import Home from "../pages/Home.js";
import SprayCalculator from "../pages/SprayCalculator.js";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "CropCalc - Kalkulatory Rolnicze" },
  },
  {
    path: "/spray",
    name: "SprayCalculator",
    component: SprayCalculator,
    meta: { title: "Kalkulator Oprysków" },
  },
];
