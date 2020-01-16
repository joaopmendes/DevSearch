import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [githubUsername, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  return (
    <AppContainer>
      <Aside>
        <strong>Registra-te</strong>
        <form>
          <InputBlock>
            <label htmlFor="github_username">Utilizador Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label htmlFor="techs">Tecnologias utilizadas (react, node)</label>
            <input name="techs" id="techs" value={techs} required onChange={e => setTechs(e.target.value)} />
          </InputBlock>
          <InputGroup>
            <InputBlock>
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                value={latitude}
                required
                onChange={e => setLatitude(e.target.value)}
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="latitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                value={longitude}
                required
                onChange={e => setLongitude(e.target.value)}
              />
            </InputBlock>
          </InputGroup>
        </form>
      </Aside>
      <main></main>
    </AppContainer>
  );
}
const AppContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const Aside = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
`;
const InputBlock = styled.div``;
const InputGroup = styled.div``;
export default App;
