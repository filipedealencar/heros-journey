import styled from "styled-components";

export const ContentCards = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background: #e96565;
  margin: 0;
  justify-content: center;
  border-radius: 16px;
  perspective: 1000px;
  transition: transform 0.5s;
  backface-visibility: hidden;
`;

export const ImgCards = styled.img<{ $open: boolean }>`
  width: ${({ $open }) => ($open ? 25 : 80)}%;
  height: ${({ $open }) => ($open ? 60 : 70)}%;
  border-radius: ${({ $open }) => ($open ? "10px" : "0px 0px 10px 10px")};
  transform: ${({ $open }) => ($open ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const GlassCard = styled.div<{ $open: boolean }>`
  background: rgba(255, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  width: 10vw;
  height: ${({ $open }) => ($open ? 35 : 0)}vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background: rgba(255, 0, 0);
  }
`;

export const CardWrapper = styled.div<{
  $open: boolean;
}>`
  display: flex;

  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  flex-direction: column;
  width: 12rem;
  height: 18rem;
  perspective: 1000px;
  transition: transform 0.5s;
  transform: ${({ $open }) => ($open ? "rotateY(180deg)" : "rotateY(0deg)")};
  cursor: pointer;

  position: ${({ $open }) => $open && "absolute"};
  z-index: ${({ $open }) => $open && 100};
  width: ${({ $open }) => $open && "100%"};
  height: ${({ $open }) => $open && "100%"};
`;

export const CardsOpen = styled.div<{ $open: boolean }>`
  position: ${({ $open }) => $open && "absolute"};
  width: ${({ $open }) => $open && "100%"};
  display: flex;
  margin: ${({ $open }) => $open && 0};
  align-items: ${({ $open }) => $open && "normal"};
  justify-content: ${({ $open }) => $open && "flex-start"};
  flex-direction: ${({ $open }) => $open && "row-reverse"};
  border-radius: ${({ $open }) => $open && 16}px;
  perspective: ${({ $open }) => $open && 1000}px;
  transition: ${({ $open }) => $open && "transform 0.5s"};
  backface-visibility: ${({ $open }) => $open && "hidden"};
  transform: ${({ $open }) => ($open ? "rotateY(0deg)" : "rotateY(180deg)")};
`;

export const CardsClose = styled.div<{ $open: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 16px;
  perspective: 1000px;
  transition: transform 0.5s;
  backface-visibility: hidden;
`;

export const Text = styled.p<{ $open: boolean }>`
  font-size: ${({ $open }) => ($open ? "4rem" : "18px")};
  color: #0083eb;
  text-align: center;
  text-transform: uppercase;
  margin: ${({ $open }) => $open && "2rem 0 0"};
  transform: ${({ $open }) => ($open ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  width: 100%;
`;
