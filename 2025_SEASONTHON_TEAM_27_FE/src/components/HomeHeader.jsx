import React, { useState } from "react";
import '../styles/HomeHeader.css'
import SubscribeModal from './SubscribeModal';
import { useNavigate } from "react-router-dom"

export default function HomeHeader() {
  const nav = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const goToHome = () => nav('/');
  const goToArchive = () => nav('/archive');
  const goToSubscribe = () => setShowModal(true);

  return (
    <div>
      <div className="header">
        <div className="header-logo-box" onClick={goToHome}>
          <img className="header-logo" alt="logo"/>
          <h3 className="header-title">메일트렌드</h3>
        </div>
        <div className="header-btns">
          <button className="archive" onClick={goToArchive}>아카이브</button>
          <button className="subscribe1" onClick={goToSubscribe}>구독하기</button>
        </div>
      </div>
      {showModal &&
        <SubscribeModal onClose={() => setShowModal(false)} />
      }
    </div>
  );
}
