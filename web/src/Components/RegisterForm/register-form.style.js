import styled, {keyframes} from "styled-components";
import {fadeIn, jello} from "react-animations";
export const Strong = styled.h4`
  font-weight: bold;
      animation: 1s ${keyframes`${fadeIn}`};

`
export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ErrorMessage = styled.p`
    color: red;
    display: block;
    animation: 1s ${keyframes`${fadeIn}`};
`;
export const InputBlock = styled.div`
  margin-top: 20px;
  animation: 1s ${keyframes`${jello}`};
  label {
    width: 100%;
    color: #acacac;
    font-size: 16px;
    font-weight: bold;
     ${({isValid, show}) => (!isValid && show) && `
       color: red;
    `}
     ${ErrorMessage} {
       display: none
     }
     
  }
  input {
    width: 100%;
    font-size: 14px;
    margin: 10px 0;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    ${({isValid, show}) => (!isValid && show) && `
      border-color: red;
    `}
    &:hover,
    &:focus {
      border-bottom: 1px solid black;
    ${({isValid, show}) => (!isValid && show) && `
      border-color: red;
    `}
    }
  }
  ${ErrorMessage} {
      display:     ${({isValid, show}) => (!isValid && show) ? 'block' : 'none'
}
  }
`;

export const Button = styled.button`
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
  animation: 1s ${keyframes`${fadeIn}`};

  &:hover {
    background: #6931ca;
  }
  &:disabled{
  background: #acacac;
  }
`;