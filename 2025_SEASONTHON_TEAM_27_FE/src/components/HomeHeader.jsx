import '../styles/HomeHeader.css'

export default function HomeHeader() {

  return (
    <div className="header">
      <div className="header-logo-box">
        <img className="header-logo" alt="logo"/>
        <h3 className="header-title">메일트렌드</h3>
      </div>
      <div className="header-btns">
        <button className="archive">아카이브</button>
        <button className="subscribe1">구독하기</button>
      </div>
    </div>
  )
}
