import React, { useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import DevList from "./Dev/dev-list.component";
import RegisterFormComponent from "./RegisterForm/register-form.component";
import fetchDevs from "../services/load-devs.service";
function AppComponent(callback, deps) {
    const [devs, setDevs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getDevs = async () => {
            setIsLoading(true)
            const result = await fetchDevs();
            setDevs(result.data)
            setIsLoading(false)
        };
        getDevs()
    }, []);

    const addDev = dev => {
        const newDevs = [...devs];
        newDevs.push(dev);
        setDevs(newDevs)
    };
  return (
    <AppContainer>
      <Aside>
        <RegisterFormComponent addDev={addDev}/>
      </Aside>
      <Main>
        <DevList devs={devs} isLoading={isLoading} />
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
