import styled from "styled-components";

export const ContainerLoadStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentLoadStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const LoadStyle = styled.div<{
  $valChindren?: number;
  $positionAbsolute: boolean;
  $size: number;
  $border: number;
}>`
  position: ${({ $positionAbsolute }) => $positionAbsolute && "absolute"};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: ${({ $border }) => `${$border}px solid #fff`};
  border-radius: 50%;
  margin: 30px;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
  animation-delay: ${({ $valChindren }) =>
    $valChindren && `-0.${$valChindren}s`};

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
