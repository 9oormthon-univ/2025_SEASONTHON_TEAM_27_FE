import React, { useEffect, useRef, useState } from "react";
import "../styles/HomeHowToUse.css";
import how1 from "../assets/how1.svg";
import how2 from "../assets/how2.svg";

export default function HomeHowToUse() {
  const containerRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();

  const [visibleContainer, setVisibleContainer] = useState(false);
  const [visibleCard1, setVisibleCard1] = useState(false);
  const [visibleCard2, setVisibleCard2] = useState(false);

  useEffect(() => {
    const obsContainer = new window.IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisibleContainer(true),
      { threshold: 0.2 }
    );
    const obsCard1 = new window.IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisibleCard1(true),
      { threshold: 0.2 }
    );
    const obsCard2 = new window.IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisibleCard2(true),
      { threshold: 0.2 }
    );
    if (containerRef.current) obsContainer.observe(containerRef.current);
    if (card1Ref.current) obsCard1.observe(card1Ref.current);
    if (card2Ref.current) obsCard2.observe(card2Ref.current);
    return () => {
      obsContainer.disconnect();
      obsCard1.disconnect();
      obsCard2.disconnect();
    };
  }, []);

  return (
    <div className="home-howtouse-background">
      <div
        className={
          "home-howtouse-container" + (visibleContainer ? " visible" : "")
        }
        ref={containerRef}
      >
        <h2>이렇게 사용해요</h2>
        <div className="home-howtouse-cards">
          <div
            className={
              "home-howtouse-card1" + (visibleCard1 ? " visible" : "")
            }
            ref={card1Ref}
          >
            <img src={how1} className="home-howtouse-img" alt="돌아가는 달력" />
            <div className="home-howtouse-cardtext">
              <h3>
                매일 아침 8시에<br />
                메일함을 열어보세요
              </h3>
              <p>요일마다 원하는 주제의 글을 메일로 받아볼 수 있어요</p>
            </div>
          </div>
          <div
            className={
              "home-howtouse-card2" + (visibleCard2 ? " visible" : "")
            }
            ref={card2Ref}
          >
            <img src={how2} className="home-howtouse-img" alt="아카이브" />
            <div className="home-howtouse-cardtext">
              <h3>
                아카이브를 통해<br />
                지난 소식을 다시 볼 수 있어요
              </h3>
              <p>아카이브를 통해 놓친 소식들을 다시 볼 수 있어요</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
