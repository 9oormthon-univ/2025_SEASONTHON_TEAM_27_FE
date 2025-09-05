import React from "react";
import "../styles/HomeReview.css";

export default function HomeReview() {
  const reviews = [
    {
      name: "김○명",
      role: "대학생 개발자",
      content: "“출근길 5분만에 최신 트렌드를 파악할 수 있어서 좋아요.”"
    },
    {
      name: "김○정",
      role: "UXUI 디자이너",
      content: "“바쁜데도 꼭 필요한 정보만 정리돼 있어서 부담 없이 읽어요.”"
    },
    {
      name: "김○원",
      role: "주니어 개발자",
      content: "“메일 한 통으로 업계 흐름을 놓치지 않게 돼요.”"
    },
    {
      name: "손○빈",
      role: "대학생 개발자",
      content: "“읽을 때마다 바로 동료와 공유하게 돼요.”"
    }
  ];

  return (
    <div className="home-review-background">
      <div className="home-review-container">
        <div className="home-review-title">후기</div>
        <div className="home-review-cards">
          {reviews.map((review, idx) => (
            <div className="home-review-card" key={idx}>
              <div className="home-review-profile">
                <div className="home-review-photo"></div>
                <div className="home-review-info">
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                  <div className="home-review-card-content">{review.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
