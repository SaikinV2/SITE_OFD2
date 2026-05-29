import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Animais } from "../pages/Animais";
import { Aprendizado } from "../pages/Aprendizado";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/aprendizado" element={<Aprendizado />} />
      </Route>
    </Routes>
  );
}
