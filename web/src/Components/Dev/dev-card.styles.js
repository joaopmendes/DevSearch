import styled from "styled-components";export

const Dev = styled.section`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px 20px;
`;
export const DevHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
export const DevHeaderImage = styled.header`
  display: flex;

  grid-column-start: 1;
  grid-column-end: 1;

  img {
    border-radius: 50%;
  }
`;
export const DevHeaderInfo = styled.header`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 10;
  margin-left: 20px;
  strong {
    font-size: 16px;
    color: #333;
  }
  p {
    color: #999;
    font-size: 13px;
    margin-top: 2px;
  }
`;
export const DevBio = styled.div`
  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }
  a {
    color: #8e4dff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #5a2ea6;
    }
  }
`;