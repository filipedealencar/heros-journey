import {
  Box,
  Text,
  Image,
  Flex,
  Badge,
  SimpleGrid,
  styled,
} from "@chakra-ui/react";
import { IIFormations } from "./types";
import {
  CardContainer,
  InformationsImage,
  InformationsName,
  InformationsDetail,
} from "./styles";
import { useEffect, useState } from "react";

export const Informations: React.FC<IIFormations> = ({ data }) => {
  return (
    <CardContainer>
      {/* <InformationsImage src={data.images.md} alt={data.name} /> */}
      <InformationsName>Biografia</InformationsName>
      {data.biography.fullName && data.biography.fullName !== (`-` || "") && (
        <InformationsDetail $sizeStr={data.biography.fullName.length}>
          <div>
            {" "}
            <span>Nome Completo:</span> <p>{data.biography.fullName}</p>
          </div>
        </InformationsDetail>
      )}
      {data.biography.aliases[0] &&
        data.biography.aliases[0] !== (`-` || "") && (
          <InformationsDetail $sizeStr={data.biography.aliases[0].length}>
            <div>
              {" "}
              <span>Apelido:</span> <p>{data.biography.aliases[0]}</p>
            </div>
          </InformationsDetail>
        )}
      {data.biography.alterEgos && data.biography.alterEgos !== (`-` || "") && (
        <InformationsDetail $sizeStr={data.biography.alterEgos.length}>
          <div>
            <span>Alcunhas:</span>{" "}
            <p>
              {data.biography.alterEgos === "No alter egos found."
                ? "Nenhum encontrado"
                : data.biography.alterEgos}
            </p>
          </div>
        </InformationsDetail>
      )}
      {data.biography.firstAppearance &&
        data.biography.firstAppearance !== (`-` || "") && (
          <InformationsDetail $sizeStr={data.biography.firstAppearance.length}>
            <span>1ª Aparição:</span>
            <div>
              <p>{data.biography.firstAppearance}</p>
            </div>
          </InformationsDetail>
        )}
      {data.biography.placeOfBirth &&
        data.biography.placeOfBirth !== (`-` || "") && (
          <InformationsDetail $sizeStr={data.biography.placeOfBirth.length}>
            <span>Local de Nascimento:</span>{" "}
            <div>
              <p>{data.biography.placeOfBirth}</p>
            </div>
          </InformationsDetail>
        )}
      {data.biography.publisher && data.biography.publisher !== (`-` || "") && (
        <InformationsDetail $sizeStr={data.biography.publisher.length}>
          <span>Editor(a):</span>{" "}
          <div>
            <p>{data.biography.publisher}</p>
          </div>
        </InformationsDetail>
      )}
    </CardContainer>
  );
};
