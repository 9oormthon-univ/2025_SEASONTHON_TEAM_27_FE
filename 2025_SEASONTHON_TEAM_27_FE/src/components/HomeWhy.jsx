import "../styles/HomeWhy.css";
import why1 from '../assets/why1.svg';
import why2 from '../assets/why2.svg';

export default function HomeWhy() {
  return (
    <div className="home-why-container">
      <div className="home-why-title">메일트렌드를 구독해야 하는 이유</div>

      <div className="home-why-content">
        <img src={why1} className="home-why-img" alt="why1"/>
        <div className="home-why-reason">
            <div className="home-why-subtitle">어려운 단어를 알려드려요🧐</div>
            <div className="home-why-text">
                IT 뉴스레터, 흥미롭긴 한데 용어가 너무 어려워서<br/>
                시작하기가 망설여지나요? 걱정 마세요!<br/>
                메일트렌드는 어려운 용어를 쉽게 풀어서 누구나<br/>
                부담 없이 읽을 수 있게 도와드려요.</div>
        </div>
      </div>

      <div className="home-why-content">
        <img src={why2} className="home-why-img" alt="why1"/>
            <div className="home-why-reason">
                <div className="home-why-subtitle">똑똑하게 요약해드려요✏️</div>
                <div className="home-why-text">
                    양도 많고 복잡한 뉴스레터 일일이 읽기 힘드시죠?<br/>
                    메일트렌드는 핵심 내용만 쏙쏙 요약해서 짧은<br/>
                    시간에 중요한 정보만 빠르게 확인할 수 있어요.</div>
            </div>
      </div>
    </div>
        
  );
}