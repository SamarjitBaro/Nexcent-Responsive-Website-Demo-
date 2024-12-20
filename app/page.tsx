import Navbar from "../components/navbar";

import Main1 from "../components/main1";
import Main2 from "../components/main2";
import Main3 from "@/components/main3";
// import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      <Main1 />

      <Main2 />
      <Main3 />
    </>
  );
}
