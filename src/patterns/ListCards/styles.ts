import styled from "styled-components";

export const MainListCards = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const ContainerListCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const ContentListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;