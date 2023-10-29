import { useRef, useState } from "react";
import {
  CardWrapper,
  ContentCards,
  GlassCard,
  Text,
  ImgCards,
  CardsOpen,
  CardsClose,
  CardInfo,
} from "./styles";
import { ICards } from "./types";
import { useOutsideClick } from "@chakra-ui/react";
import { Informations } from "../Informations";

export const Cards: React.FC<ICards> = ({ herosValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardIsOpenRef = useRef<HTMLDivElement>(null);
  //   useOutsideClick({
  //     handler: () => setIsOpen(false),
  //     ref: cardIsOpenRef,
  //   });

  return (
    <CardWrapper $open={isOpen} onClick={() => setIsOpen(true)}>
      {isOpen ? (
        <CardsOpen $open={isOpen}>
          <ImgCards $open={isOpen} src={herosValues?.images.lg} />
          <CardInfo>
            <Text $open={isOpen}>{herosValues?.name}</Text>
            <Informations data={herosValues} />
          </CardInfo>
        </CardsOpen>
      ) : (
        <CardsClose $open={isOpen}>
          <ImgCards $open={isOpen} src={herosValues?.images.lg} />
          <Text $open={isOpen}>{herosValues?.name}</Text>
        </CardsClose>
      )}
    </CardWrapper>

    // <CardWrapper>
    //   <ContentCards>
    //     <ImgCards src={herosValues?.images.lg} />
    //   </ContentCards>
    // </CardWrapper>
  );
};
