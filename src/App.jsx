import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { EducationPage } from "./pages/EducationPage";
import { EDUC440Page } from "./pages/EDUC440Page";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index path="home" element={<EDUC440Page />} />
            <Route  path="" element={<EDUC440Page />} />
            <Route path="edu" element={<EducationPage />} />
            <Route path="educ440" element={<EDUC440Page />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
