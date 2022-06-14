import "./App.css";
import Carousel from "./Carousel/Carousel";

function App() {
  const pictures = [
    {
      name: "first",
      src: "https://img3.goodfon.ru/wallpaper/nbig/4/6f/fon-geometriya-figury.jpg",
    },
    {
      name: "second",
      src: "https://www.meme-arsenal.com/memes/4a6c4107bd68e9286dce5628a474451b.jpg",
    },
    {
      name: "third",
      src: "https://img.freepik.com/free-vector/festive-background-abstraction-screensaver_497922-151.jpg",
    },
  ];

  return (
    <div className="App">
      <Carousel items={pictures} />
    </div>
  );
}

export default App;
