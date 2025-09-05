import HomeHeader from '../components/HomeHeader';
import HomeMain from '../components/HomeMain';
import HomeSubscribe from '../components/HomeSubscribe';
import HomeWhy from '../components/HomeWhy';
import HomeHowToUse from '../components/HomeHowToUse';
import HomeReview from '../components/HomeReview';
import HomeFAQ from '../components/HomeFAQ';
import HomeFooter from '../components/HomeFooter';


export default function Home() {
  return (
    <div className="home-page">
      <div>
          <HomeHeader />
      </div>
      <div>
          <HomeMain />
      </div>
      <div>
          <HomeSubscribe />
      </div>
      <div>
          <HomeWhy />
      </div>
      <div>
          <HomeHowToUse />
      </div>
      <div>
          <HomeReview />
      </div>
      <div>
          <HomeFAQ />
      </div>
      <div>
          <HomeFooter />
      </div>
    </div>
  )
}