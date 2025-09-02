import React, { useState, useMemo } from "react";
import "../styles/ArchiveList.css";

const TAB_LIST = ["AI", "프론트엔드", "백엔드"];
const YEAR_LIST = ["년도", "2025", "2024", "2023"];
const MONTH_LIST = ["월", "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

// 더 많은 예시 데이터 (타입별, 연도, 월 포함)
const ARCHIVE_ITEMS = [
  { tab: "AI", year: "2025", month: "8월", week: "마지막 주" },
  { tab: "AI", year: "2025", month: "8월", week: "셋째 주" },
  { tab: "AI", year: "2025", month: "8월", week: "둘째 주" },
  { tab: "AI", year: "2025", month: "8월", week: "첫째 주" },
  { tab: "AI", year: "2025", month: "7월", week: "마지막 주" },
  { tab: "AI", year: "2025", month: "7월", week: "넷째 주" },
  { tab: "프론트엔드", year: "2024", month: "6월", week: "첫째 주" },
  { tab: "백엔드", year: "2023", month: "4월", week: "둘째 주" },
  // 더 추가 가능
];

const ITEMS_PER_PAGE = 4;

export default function ArchiveList() {
  const [selectedTab, setSelectedTab] = useState("AI");
  const [selectedYear, setSelectedYear] = useState("년도");
  const [selectedMonth, setSelectedMonth] = useState("월");
  const [currentPage, setCurrentPage] = useState(1);

  // 필터링된 리스트 계산
  const filteredItems = useMemo(() => {
    return ARCHIVE_ITEMS.filter(item => {
        const yearCheck = selectedYear === "년도" || item.year === selectedYear;
        const monthCheck = selectedMonth === "월" || item.month === selectedMonth;
    return item.tab === selectedTab && yearCheck && monthCheck;
    });
  }, [selectedTab, selectedYear, selectedMonth]);


  // 페이지네이션용 총 페이지 수
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  // 현재 페이지 아이템 슬라이스
  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 페이지 변경 함수
  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // 탭이나 필터 변경 시 페이지 초기화
  const onFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  return (
    <div className="archive-bg">
      <div className="archive-wrap">
        <h1 className="archive-title">아카이브</h1>
        <div className="archive-desc">
          보고싶은 분야의 소식을 다시 볼 수 있어요
        </div>
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
              <div key={idx} className="archive-list-item">
                {item.year} {item.month} {item.week}
              </div>
            ))
          )}
        </div>
        <div className="archive-pagination">
          <button className="archive-pagination-btn" onClick={() => changePage(currentPage - 1)}>
            &lt;
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <span
              key={idx}
              className={`archive-pagination-num ${currentPage === idx + 1 ? "active" : ""}`}
              onClick={() => changePage(idx + 1)}
              style={{cursor: "pointer"}}
            >
              {idx + 1}
            </span>
          ))}
          <button className="archive-pagination-btn" onClick={() => changePage(currentPage + 1)}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
