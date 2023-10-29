import styled from "styled-components";
import Image from "next/image";

export const ContainerAvatar = styled.div`
  display: flex;
`;
export const ContentAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 50px;
`;

export const UserImagem = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const NameUser = styled.span`
  font-family: "Bangers";
  font-size: 1.2rem;
`;
