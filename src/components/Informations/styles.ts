import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 16px;
  max-width: 400px;
  text-align: center;
  transform: rotateY(180deg);
  background: #fff;
  border-radius: 12px;
`;

export const InformationsImage = styled.img`
  max-width: 100%;
`;

export const InformationsName = styled.h2`
  font-size: 18px;
  margin: 8px 0;
  display: flex;
  gap: 10px;
  color: #000;
`;

export const InformationsDetail = styled.div<{ $sizeStr: number }>`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  margin: 8px 0;
  line-height: 1.5;
  text-align: start;
  white-space: nowrap;

  div {
    display: flex;
    gap: 8px;
    overflow: ${({ $sizeStr }) => $sizeStr > 30 && "hidden"};
    p {
      margin: 0;
      font-style: italic;
      color: #0083eb;
      animation: ${({ $sizeStr }) => $sizeStr > 30 && "mymove 8s infinite"};

      ${({ $sizeStr }) =>
        $sizeStr > 30 &&
        "@keyframes mymove {0%  {transform: translateX(0%); } 25% {transform: translateX(-50%); } 50% {transform: translateX(-50%); } 100% {transform: translateX(0%); }}"}
    }
  }

  span {
    font-weight: bold;
    color: #1e1e1e;
    white-space: nowrap;
  }
`;
