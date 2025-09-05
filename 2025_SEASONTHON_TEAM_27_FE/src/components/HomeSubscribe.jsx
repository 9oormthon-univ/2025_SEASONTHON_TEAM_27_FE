import React, { useState } from "react";
import '../styles/HomeSubscribe.css';
import SubscribeModal from './SubscribeModal';

export default function HomeSubscribe() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home-subscribe-container">
      <div>
        <h1>남들보다 한발 앞선<br />IT 트렌드</h1>
      </div>
      <div>
        <button className="subscribe2" onClick={openModal}>지금 바로 받아보기</button>
      </div>

      {showModal && <SubscribeModal onClose={closeModal} />}
    </div>
  );
}
