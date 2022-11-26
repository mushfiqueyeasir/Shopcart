import Banner from "./component/banner/Banner";
import HotDeals from "./component/hotDeals/HotDeals";
import NavBar from "./component/shared/NavBar";
import Furniture from "./component/furniture/Furniture";
import Searched from "./component/searched/Searched";
import Review from "./component/review/Review";
import Footer from "./component/shared/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <HotDeals />
      <Searched />
      <Furniture />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
