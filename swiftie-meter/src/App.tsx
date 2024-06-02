import "./App.css";
import Trivia from "./components/Trivia/Trivia";
import Navabar from "./components/Navbar/Navabar";

function App() {
  return (
    <>
      <div>
        {/* <h1>Swiftie Meter</h1> */}
        <Navabar />
        <Trivia />
      </div>
    </>
  );
}

export default App;
