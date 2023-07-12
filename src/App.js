import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduce from "./pages/Introduce";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Introduce/>}/>
          <Route path="/quiz/:difficulty/:amount" element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
