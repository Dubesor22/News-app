import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/News" element={<News />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
