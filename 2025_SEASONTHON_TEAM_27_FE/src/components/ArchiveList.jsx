import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ArchiveList.css";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

// 상수 정의

const TAB_LIST = ["AI", "프론트엔드", "백엔드"];
const YEAR_LIST = ["년도", "2025", "2024", "2023"];
const MONTH_LIST = [
  "월", "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월"
];

const ITEMS_PER_PAGE = 6;

// 주차 구하는 함수
function parseDateFields(sent_at) {
  const date = new Date(sent_at);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1) + "월";
  const day = date.getDate();
  let week = "";
  if (day <= 7) week = "첫째 주";
  else if (day <= 14) week = "둘째 주";
  else if (day <= 21) week = "셋째 주";
  else week = "마지막 주";
  return { year, month, week };
}

// 카테고리 매핑 함수
function categoryToTab(category) {
  if (category === "AI") return "AI";
  if (category === "BACKEND") return "백엔드";
  if (category === "FRONTEND") return "프론트엔드";
  return category;
}

export default function ArchiveList() {
  const nav = useNavigate();
  const [rawItems, setRawItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("AI");
  const [selectedYear, setSelectedYear] = useState("년도");
  const [selectedMonth, setSelectedMonth] = useState("월");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
  fetch("http://15.164.189.54:8080/api/archive")
    .then(res => res.json())
    .then(data => {
      console.log("API 응답:", data);
      setRawItems(data.data || []);
      setLoading(false);
    })
    .catch((e) => {
      console.error("fetch 에러:", e);
      setLoading(false);
    });
  }, []);

  useMemo(() => {
    console.log("archiveItems 출력:", rawItems);
  // 나머지 변환
  }, [rawItems])


  // 서버 데이터 → 렌더 데이터 구조 변환
  const archiveItems = useMemo(() => {
    return rawItems.map(item => {
      const { year, month, week } = parseDateFields(item.sent_at);
      return {
        tab: categoryToTab(item.category),
        year,
        month,
        week,
        title: item.title,
        url: item.content_url,
        id: item.content_id,
      };
    });
  }, [rawItems]);

  // 필터링
  const filteredItems = useMemo(() => {
    return archiveItems.filter(item => {
      const yearCheck = selectedYear === "년도" || item.year === selectedYear;
      const monthCheck = selectedMonth === "월" || item.month === selectedMonth;
      return item.tab === selectedTab && yearCheck && monthCheck;
    });
  }, [archiveItems, selectedTab, selectedYear, selectedMonth]);

  // 페이지네이션
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 필터 변경 시 페이지 초기화
  const onFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  if (loading) return <div>로딩중...</div>;

  return (
    <div className="archive-bg">
      <div className="archive-wrap">
        <h1 className="archive-title">아카이브</h1>
        <div className="archive-desc">보고싶은 분야의 소식을 다시 볼 수 있어요</div>
        <div className="archive-tabs">
          {TAB_LIST.map(tab => (
            <button
              key={tab}
              className={`archive-tab ${tab === selectedTab ? "active" : ""}`}
              onClick={() => {setSelectedTab(tab); setCurrentPage(1);}}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className="archive-line" />
        <div className="archive-filter">
          <select
            className="archive-select"
            value={selectedYear}
            onChange={e => onFilterChange(setSelectedYear)(e.target.value)}
          >
            {YEAR_LIST.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
          <select
            className="archive-select"
            value={selectedMonth}
            onChange={e => onFilterChange(setSelectedMonth)(e.target.value)}
          >
            {MONTH_LIST.map(month => <option key={month} value={month}>{month}</option>)}
          </select>
        </div>
        <div className="archive-list">
          {currentItems.length === 0 ? (
            <div className="archive-list-item">정보 없음</div>
          ) : (
            currentItems.map((item, idx) => (
              <div
                key={idx}
                className="archive-list-item"
                tabIndex={0}
                role="button"
                onClick={() => nav(`/mail/${item.id}`)}
                onKeyPress={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    nav(`/mail/${item.id}`);
                  }
                }}
              >
                {item.year} {item.month} {item.week}<br />
              </div>

            ))
          )}
        </div>
      </div>
      <div className="archive-pagination">
          <button
            className="archive-pagination-btn"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={left} alt="이전페이지" />
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <span
              key={idx}
              className={`archive-pagination-num ${currentPage === idx + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(idx + 1)}
              style={{ cursor: "pointer" }}
            >
              {idx + 1}
            </span>
          ))}
          <button
            className="archive-pagination-btn"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={right} alt="다음페이지" />
          </button>
      </div>
    </div>
  );
}
