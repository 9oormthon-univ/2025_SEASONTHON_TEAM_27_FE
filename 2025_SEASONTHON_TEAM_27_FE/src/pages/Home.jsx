import HomeHeader from '../components/HomeHeader';
import ganpan from '../assets/ganpan.svg';
import HomeSubscribe from '../components/HomeSubscribe';
import HomeHowToUse from '../components/HomeHowToUse';
import HomeReview from '../components/HomeReview';
import HomeFooter from '../components/HomeFooter';


export default function Home() {
  return (
    <div>
      <div>
          <HomeHeader />
      </div>
      <div>
          <img src={ganpan} alt="Ganpan" />
      </div>
      <div>
          <HomeSubscribe />
      </div>
      <div>
          <HomeHowToUse />
      </div>
      <div>
          <HomeReview />
      </div>
      <div>
          <HomeFooter />
      </div>
    </div>
  )
}