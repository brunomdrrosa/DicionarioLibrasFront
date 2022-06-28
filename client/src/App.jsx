import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Learn } from "./pages/Learn";
import { QuestionProvider } from "./contexts/QuestionContext";
import { Exercise } from "./pages/Exercise";
import { Stories } from "./pages/Stories";
import { Signs } from "./pages/Signs";

export const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Register />} />
    <Route path="/aprender" element={<Learn />} />
    <Route path="/aprender/:course" element={<Learn />} />
    <Route
      path="/aprender/:course/:unity"
      element={
        <QuestionProvider>
          <Exercise questionData="asjd" />
        </QuestionProvider>
      }
    />
    <Route path="/historias" element={<Stories />} />
    <Route path="/sinais" element={<Signs />} />
  </Routes>
);
