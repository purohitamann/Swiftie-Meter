import "./App.css";
import Trivia from "./components/Trivia/Trivia";
import Navabar from "./components/Navbar/Navabar";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div
        className="flex flex-col items-center"
        style={{ backgroundColor: "#292929" }}
      >
        {/* <h1>Swiftie Meter</h1> */}
        <Navabar />
        <Home />
        {/* <Trivia /> */}
      </div>
    </>
  );
}

export default App;
