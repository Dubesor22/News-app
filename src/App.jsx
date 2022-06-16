import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
