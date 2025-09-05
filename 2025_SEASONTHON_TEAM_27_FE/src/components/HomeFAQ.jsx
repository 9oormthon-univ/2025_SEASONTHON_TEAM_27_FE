import React, { useState } from "react";
import "../styles/HomeFAQ.css";
import down from '../assets/down.svg';
import up from '../assets/up.svg';

export default function HomeFAQ() {
  const [openItems, setOpenItems] = useState([false, false, false, false, false]);
  const faqs = [
    { question: "다른 분야의 소식은 받아볼 수 없나요?", answer: "추후 예정되어 있습니다!" },
    { question: "구독은 무료인가요?", answer: "네, 무료입니다!" },
    { question: "구독은 어떻게 하나요?", answer: "상단의 구독하기 버튼을 눌러 이메일을 입력해주세요!" },
    { question: "구독을 취소하고 싶으면 어떻게 하나요?", answer: "메일 하단의 구독 취소 링크를 눌러주세요!" },
    { question: "메일은 언제 오나요?", answer: "월, 수, 금 아침 7시에 발송됩니다!" },
  ];

  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="home-faq-container">
    <div className="home-faq-section">
      <div className="home-faq-titlebox">
        <div className="home-faq-title">자주 하는 질문</div>
        <div className="home-faq-desc">더 궁금하신 점이 있다면 이메일을 보내주세요</div>
      </div>
      <div className="home-faq-list">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`home-faq-item faq-toggle${openItems[idx] ? " open" : ""}`}
            onClick={() => toggleItem(idx)}
          >
            <div>
              {faq.question}
              <span className="faq-arrow">
                <img src={openItems[idx] ? up : down} alt="toggle icon" />
              </span>
            </div>
            <p className={`faq-answer ${openItems[idx] ? "open" : ""}`}>
                {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
