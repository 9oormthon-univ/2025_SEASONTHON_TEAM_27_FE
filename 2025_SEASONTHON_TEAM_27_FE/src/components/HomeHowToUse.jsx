import "../styles/HomeHowToUse.css";
import mon from '../assets/monday.svg'
// import wed from '../assets/wednesday.svg'
// import fri from '../assets/friday.svg'

export default function HomeHowToUse() {

  return (
    <div className="home-howtouse-background">
        <div className="home-howtouse-container">
            <h2>이렇게 사용해요</h2>
            
            <div className="home-howtouse-card">
                <img src={mon} className="home-howtouse-img" alt="돌아가는 달력"/>
                <div className="home-howtouse-cardtext">
                <h3>매일 아침 8시에<br/>메일함을 열어보세요</h3>
                <p>요일마다 원하는 주제의 글을 메일로 받아볼 수 있어요</p>
                </div>
            </div>
            
            <div className="home-howtouse-card">
                <img className="home-howtouse-img" alt="아카이브"/>
                <div className="home-howtouse-cardtext">
                <h3>아카이브를 통해<br/>지난 소식 다시 보기</h3>
                <p>아카이브를 통해 놓친 소식들을 다시 볼 수 있어요</p>
                </div>
            </div>
        </div>
    </div>
  );
}