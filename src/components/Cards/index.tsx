import { useRef, useState } from "react";
import {
  CardWrapper,
  ContentImg,
  ContentCards,
  GlassCard,
  Text,
  ImgCards,
  CardsOpen,
  CardsClose,
  CardInfo,
  ContainerCardInfo,
} from "./styles";
import { ICards } from "./types";
import { Informations } from "../Informations";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import PowerStatus from "../PowerStatus";
import { CustomModal } from "../Modal";
import { useDisclosure } from "@chakra-ui/react";

export const Cards: React.FC<ICards> = ({ herosValues }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const cardIsOpenRef = useRef<HTMLDivElement>(null);
  // useOutsideClick({
  //   callback: () => setIsOpen(false),
  //   ref: cardIsOpenRef,
  // });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CardWrapper ref={cardIsOpenRef} $open={isOpen} onClick={onOpen}>
      {/* {isOpen ? (
        <CardsOpen $open={isOpen}>
          <ContentImg>
            <ImgCards $open={isOpen} src={herosValues?.images.lg} />
          </ContentImg>

          <ContainerCardInfo>
            <CardInfo>
              <Text $open={isOpen}>{herosValues?.name}</Text>
              <Informations data={herosValues} />
            </CardInfo>
            <PowerStatus powers={herosValues.powerstats} />
       
          </ContainerCardInfo>
        </CardsOpen>
      ) : (
        <CardsClose $open={isOpen}>
          <ImgCards $open={isOpen} src={herosValues?.images.lg} />
          <Text $open={isOpen}>{herosValues?.name}</Text>
        </CardsClose>
      )} */}

      <CardsClose $open={isOpen}>
        <CustomModal onClose={onClose} open={isOpen}>
          <CardsOpen $open={isOpen}>
            <ContentImg>
              <ImgCards $open={isOpen} src={herosValues?.images.lg} />
            </ContentImg>

            <ContainerCardInfo>
              <CardInfo>
                <Text $open={isOpen}>{herosValues?.name}</Text>
                <Informations data={herosValues} />
              </CardInfo>
              <PowerStatus powers={herosValues.powerstats} />
            </ContainerCardInfo>
          </CardsOpen>
        </CustomModal>
        <ImgCards $open={isOpen} src={herosValues?.images.lg} />
        <Text $open={isOpen}>{herosValues?.name}</Text>
      </CardsClose>
    </CardWrapper>
  );
};
