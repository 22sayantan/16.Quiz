import { Route, Routes } from "react-router-dom";
import TimeUp from "./components/time_over";
import Home from "./components/Home"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />
          <Route path="/timeUp" element={<TimeUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
