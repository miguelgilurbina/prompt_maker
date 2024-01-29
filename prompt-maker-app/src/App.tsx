import Prompt from "./components/Prompt";
import NavBar from "./components/NavBar";
import ImageBackground from "./components/ImageBackground";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Prompt></Prompt>
      <ImageBackground imageUrl="src/assets/img/pixel-art-landscape-1.png " />
    </div>
  );
}

export default App;
