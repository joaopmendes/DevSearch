import React, {useEffect} from "react";
import styled from "styled-components";
import DevList from "./Dev/dev-list.component";
import RegisterFormComponent from "./RegisterForm/register-form.component";
import fetchDevs from "./../services/load-devs.service"
function AppComponent() {
    useEffect(() => {
        console.log(fetchDevs());
    },[]);
  return (
    <AppContainer>
      <Aside>
        <RegisterFormComponent />
      </Aside>
      <Main>
        <DevList />
      </Main>
    </AppContainer>
  );
}
const AppContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-top: 60px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1366px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  width: 30%;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
  margin-right: 20px;

  @media (max-width: 1366px) {
    width: 100% !important;
  }

  h4 {
    font-size: 20px;
    text-align: center;
    color: #333;
  }
`;
const Main = styled.section`
  width: 60%;
  @media (max-width: 1366px) {
    width: 100% !important;
    padding-top: 20px;
  }
`;

export default AppComponent;
