// PrivateLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

const PrivateLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <NavBarContainer>
          <Navbar />
        </NavBarContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default PrivateLayout;
