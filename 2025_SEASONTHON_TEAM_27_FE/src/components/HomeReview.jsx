import React, { useRef } from "react";
import "../styles/HomeReview.css";
import face1 from "../assets/face1.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import face4 from "../assets/face4.png";
import face5 from "../assets/face5.png";

export default function HomeReview() {
  const containerRef = useRef(null);

  const reviews = [
    {
      name: "김○명",
      role: "대학생 개발자",
      content: "“출근길 5분만에 최신 트렌드를 파악할 수 있어서 좋아요.”",
      photo: face1,
    },
    {
      name: "김○정",
      role: "UXUI 디자이너",
      content: "“바쁜데도 꼭 필요한 정보만 정리돼 있어서 부담 없이 읽어요.”",
      photo: face2,
    },
    {
      name: "김○원",
      role: "주니어 개발자",
      content: "“메일 한 통으로 업계 흐름을 놓치지 않게 돼요.”",
      photo: face3,
    },
    {
      name: "손○빈",
      role: "대학생 개발자",
      content: "“읽을 때마다 바로 동료와 공유하게 돼요.”",
      photo: face4,
    },
    {
      name: "유○영",
      role: "대학생 개발자",
      content: "“바쁜 일상 속에서 따로 뉴스를 찾지 않아도 돼서 편리해요.”",
      photo: face5,
    },
  ];

  let isDown = false;
  let startX, scrollLeft;

  const handleMouseDown = e => {
    isDown = true;
    containerRef.current.classList.add('dragging');
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = e => {
    if (!isDown) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDown = false;
    containerRef.current.classList.remove('dragging');
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="home-review-background">
      <div className="home-review-container">
        <div className="home-review-title">후기</div>
        <div className="home-review-cards"
             ref={containerRef}
             onMouseDown={handleMouseDown}>
          {reviews.map((review, idx) => (
            <div className="home-review-card" key={idx}>
              <div className="home-review-profile">
                <img
                  src={review.photo}
                  alt={`${review.name} 프로필`}
                  className="home-review-photo"
                />
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
