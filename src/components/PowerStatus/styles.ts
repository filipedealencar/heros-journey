import styled from "styled-components";

export const StatusMain = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StatusContainer = styled.div`
  margin: 0 0 20px;
  padding: 10px;
  border-radius: 5px;
  transform: rotateY(-180deg);
  width: 100%;
`;

export const StatName = styled.div`
  display: flex;
  gap: 4px;
  font-weight: bold;
`;

export const ContainerStatusBar = styled.div`
  width: 100%;
  background: #d7d7d7;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const ValuesPower = styled.span`
  display: inline-block;
  transform-origin: bottom;
  animation: countUp 5s linear forwards;

  @keyframes countUp {
    to {
      transform: scaleY(1);
    }
  }
`;

export const StatBar = styled.div<{ $statusValue: number }>`
  /* background-color: #3498db; */
  height: 20px;
  border-radius: 5px;
  width: ${({ $statusValue }) => $statusValue}%;

  //#ff0000  vermelho
  //#f5ff00 amarelo
  //#30ff00 verde

  background: ${({ $statusValue }) =>
    `linear-gradient(90deg, ${
      $statusValue === 100
        ? "#30ff00"
        : $statusValue >= 50
        ? "#f5ff00"
        : "#ff0000"
    } ${$statusValue <= 20 ? "40%" : "0%"}, 
    ${
      $statusValue === 100
        ? "#30ff00"
        : $statusValue <= 20
        ? "#ff0000 "
        : "#f5ff00"
    } 
    ${
      $statusValue < 50 && $statusValue >= 70
        ? "30%"
        : $statusValue > 70 && $statusValue <= 95
        ? "0%"
        : "50%"
    },
    ${$statusValue <= 50 ? "#f5ff00" : "#30ff00"} 
    ${$statusValue >= 70 ? "60%" : $statusValue >= 90 ? "30%" : "100%"} )`};
  transition: width 2s;
`;
