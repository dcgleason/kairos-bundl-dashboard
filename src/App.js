import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OneWeekend from "./pages/OneWeekend";
import ManyWeekends from "./pages/ManyWeekends";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
       <Route path="/" element={<ManyWeekends />} />
      <Route path="/K201/1" element={<OneWeekend />} />
   

    </Routes>
  );
}
export default App;
