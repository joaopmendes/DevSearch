import styled from "styled-components";


export const Flex = styled.div`
   display: flex;
   width: 100%;
   margin: 20px 0;
   justify-content: ${props => props.justifyContent || "unset"};
   align-items: ${props => props.alignItems || "unset"};
`