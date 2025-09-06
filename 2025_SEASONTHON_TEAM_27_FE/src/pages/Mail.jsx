import "../styles/Mail.css";
import HomeHeader from "../components/HomeHeader"
import HomeFooter from "../components/HomeFooter"
import React from "react"
import { useParams, useNavigate } from "react-router-dom";
import left from "../assets/left.svg"
import goback from "../assets/goback.svg"
import gofront from "../assets/gofront.svg"

export default function Mail() {
  const { id } = useParams();
  const nav = useNavigate();
  const currentId = Number(id);

  const handleGoBack = () => {
    if (currentId > 1) {
        nav(`/mail/${currentId - 1}`);
    }
  };
  const handleGoFront = () => {
    nav(`/mail/${currentId + 1}`);
  };

  // 실제 데이터는 id에 따라 불러오거나 props로 받을 수 있습니다.
  // 여기서는 예시용으로 고정 데이터를 사용합니다.
  
  return (
    <div>
        <div>
            <HomeHeader />
        </div>
        <div className="mail-bg">
            <div className="mail-container">
                <hr className="mail-line" />
                <div className="mail-header">
                    <img className="mail-back" src={left} alt="left" />
                    <div className="mail-title">안녕하시구리!</div>
                </div>
                <hr className="mail-line" />
                <div className="mail-content">
                    메일 !
                </div>
                <hr className="mail-line" />
                <div className="mail-buttons">
                    <img className="mail-button" src={goback} alt="goback" onClick={handleGoBack} />
                    <img className="mail-button" src={gofront} alt="gofront" onClick={handleGoFront}/>
                </div>
            </div>
        </div>
        <div>
            <HomeFooter />
        </div>
    </div>
  );
}
