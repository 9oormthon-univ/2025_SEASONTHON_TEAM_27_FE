import HomeHeader from "../components/HomeHeader";
import ArchiveList from "../components/ArchiveList";
import HomeFooter from "../components/HomeFooter";

export default function Archive() {
  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div>
        <ArchiveList />
      </div>
      <div>
        <HomeFooter />
      </div>
    </div>
  );
}