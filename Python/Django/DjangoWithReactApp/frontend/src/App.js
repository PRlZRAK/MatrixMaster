import "./App.css";
import Members from "./Pages/Members";
import SignUpOrLogin from "./Pages/SignUpOrLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/" element={<SignUpOrLogin />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
