import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const RegisterForm = () => {
  const [githubUsername, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const validateForm = event => {
    event.preventDefault();
    if (githubUsername && techs && latitude && longitude) {
      axios
        .post("/devs", { github_username: githubUsername, techs, latitude, longitude })
        .then(() => alert("User Created"))
        .catch(errr => alert(errr));
    }
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, [navigator]);
  return (
    <>
      <h4>
        <strong>Registra-te</strong>
      </h4>
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
            <label htmlFor="longitude">Longitude</label>
            <input
              name="longitude"
              id="longitude"
              value={longitude}
              required
              onChange={e => setLongitude(e.target.value)}
            />
          </InputBlock>
        </InputGroup>

        <Button onClick={validateForm}>Registrar</Button>
      </form>
    </>
  );
};
const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const InputBlock = styled.div`
  margin-top: 20px;
  label {
    width: 100%;
    color: #acacac;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    width: 100%;
    font-size: 14px;
    margin: 10px 0px;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    &:hover,
    &:focus {
      border-bottom: 1px solid black;
    }
  }
`;
const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: #6931ca;
  }
`;
export default RegisterForm;
