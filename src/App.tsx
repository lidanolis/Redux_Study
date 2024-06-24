import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
