import styled from "styled-components/native";

export const DevWrapper = styled.View`
  flex: 1;
`;
export const DevTextName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const DevTextBio = styled.Text`
  margin-top: 5px;
  color: #666;
`;
export const DevTextSkills = styled.Text`
  margin-top: 5px;
`;
export const DevImage = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
`;
export const FormView = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  flex-direction: row;
  
`

export const SearchInput = styled.TextInput`
  flex:1;
  height: 50px;
  background-color:#fff;
  border-radius: 25px;
  padding-left: 5px ;
  padding-right: 5px ;
  font-size: 16px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 4px 4px;
  elevation: 2;
`
export const SearchButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background: #8E4Dff;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin-left:50px;
`