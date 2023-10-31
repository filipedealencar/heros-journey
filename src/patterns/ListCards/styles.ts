import styled from "styled-components";

export const MainListCards = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
  gap: 4vh;
`;

export const ContainerListCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 74vw;
`;

export const ContentListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;
