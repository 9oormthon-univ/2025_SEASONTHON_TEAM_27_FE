import React, { useState } from "react";
import xcross from "../assets/xcross.svg";
import "../styles/SubscribeModal.css";

export default function SubscribeModal({ onClose }) {
  const [fields, setFields] = useState({
    ai: false,
    frontend: false,
    backend: false,
    email: ""
  });
  const [error, setError] = useState({ domain: false, email: false });

  const handleCheck = (key) => {
    setFields({ ...fields, [key]: !fields[key] });
  };

  const handleEmailChange = (e) => {
    setFields({ ...fields, email: e.target.value });
  };

  const handleSubscribe = () => {
    const domainValid = fields.ai || fields.frontend || fields.backend;
    const emailValid = fields.email.trim() !== "";

    setError({
      domain: !domainValid,
      email: !emailValid
    });

    if (domainValid && emailValid) {
      alert("구독 완료!");
      onClose();
    }
  };

  return (
    <div className="subscribe-modal-bg">
      <div className="subscribe-modal" role="dialog" aria-modal="true" aria-labelledby="subscribe-title">
        <button className="close-btn" onClick={onClose} aria-label="닫기">
          <img src={xcross} alt="" />
        </button>
        <h2 className="subscribe-title" id="subscribe-title">구독 시작하기</h2>

        <div className={`domain-area${error.domain ? " error" : ""}`} role="group" aria-labelledby="domain-label">
          <div className="domain-label" id="domain-label">분야</div>
          <div className="domain-checks">
            {[
              { key: "ai", label: "AI", day: "월요일" },
              { key: "frontend", label: "프론트엔드", day: "수요일" },
              { key: "backend", label: "백엔드", day: "금요일" },
            ].map(({ key, label, day }) => (
              <label
                key={key}
                className="domain-check-label"
                tabIndex={0}
                onKeyPress={e => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    handleCheck(key);
                  }
                }}
              >
                <input
                  type="checkbox"
                  checked={fields[key]}
                  onChange={() => handleCheck(key)}
                  className="custom-checkbox-input"
                  id={`checkbox-${key}`}
                  aria-checked={fields[key]}
                />
                <span className="custom-checkbox" aria-hidden="true"></span>
                <span className="domain-label-text" htmlFor={`checkbox-${key}`}>{label}</span>
                <span className="domain-day-text">{day}</span>
              </label>
            ))}
          </div>
          {error.domain && (
            <div className="domain-error-label" role="alert">최소 1개의 분야를 선택해주세요</div>
          )}
        </div>

        <div className={`email-area${error.email ? " error" : ""}`}>
          <label htmlFor="email-input" className="email-label">이메일</label>
          <input
            id="email-input"
            type="email"
            className="email-input"
            placeholder="mailtrend@gmail.com"
            value={fields.email}
            onChange={handleEmailChange}
            aria-invalid={error.email}
            aria-describedby={error.email ? "email-error" : undefined}
          />
          {error.email && (
            <div id="email-error" className="email-error-label" role="alert">이메일을 입력해 주세요</div>
          )}
        </div>

        <button className="subscribe-btn" onClick={handleSubscribe}>
          구독하기
        </button>
      </div>
    </div>
  );
}
