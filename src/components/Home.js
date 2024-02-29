import Sidebar from "./Sidebar";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import { HomeContainer } from "../styles/HomeStyles";

function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <PersonalInfo />
    </HomeContainer>
  );
}

export default Home;
