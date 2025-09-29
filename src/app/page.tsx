import AppBar from "./components/appbar/page";
import Navbar from "./components/navbar/page";
import BlogSpot from "./pages/blogspot/page";
import Video from "./pages/video/page";
import Promo from "./pages/promo/page";
import News from "./pages/news/page";
import Lawson from "./pages/lawson/page";
import Menu from "./pages/originalMenu/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div>
      <AppBar/>
      <Navbar />
      <BlogSpot/>
      <Video/>
      <Promo/>
      <News/>
      <Lawson/>
      <Menu/>
      <Footer/>
    </div>
  )
}