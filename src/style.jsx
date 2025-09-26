import styled from "styled-components";
import TextField from '@mui/material/TextField';

export const FlexBox = styled.div`
    display: flex;
`

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 15px;
    background-color: black;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 1200;
`;

export const MainWrapper = styled.div`
    width: 95%;
    margin: 50px auto;
    padding: 10px;
    `;

export const SearchField = styled(TextField)({
    border: "0.5px solid lightgrey",

})

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;