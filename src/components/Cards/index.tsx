import React, { useContext, useEffect, useState } from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Badge,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  DarkMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Assets
import { MdPeople } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { Informations } from "@/components/Informations";
import { CustomModal } from "@/components/Modal";
import PowerStatus from "@/components/PowerStatus";
import {
  CardsOpen,
  ContentImg,
  ImgCards,
  ContainerCardInfo,
  CardInfo,
  TextCustom,
} from "./styles";
import { GlobalContext } from "@/contexts/GlobalContext";
import { ITeams } from "./types";

export const TeamsCard: React.FC<ITeams> = ({ herosValues }) => {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  const { mode, duel, setDuel } = useContext(GlobalContext);

  const [isOpenModal1, setIsOpenModal1] = useState(false);

  const openModal1 = () => setIsOpenModal1(true);
  const closeModal1 = () => setIsOpenModal1(false);

  const defineScore = (powers: object) => {
    const values = Object.values(powers);
    const totalScore = values.reduce((total, value) => total + value, 0);
    const averageScore = totalScore / values.length;

    return Math.round(averageScore);
  };

  return (
    <Flex
      borderRadius="20px"
      bg={boxBg}
      p="20px"
      h="260px"
      w={{ base: "230px", md: "260px" }}
      alignItems="center"
      direction="column"
      cursor="pointer"
      onClick={() => (mode === "list" ? openModal1() : null)}
      background={
        mode === "list"
          ? "#fff"
          : herosValues.id === duel.opponentOne.id
          ? "#415fcf"
          : herosValues.id === duel.opponentTwo.id
          ? "#cf4141"
          : "#fff"
      }
    >
      <Image
        src={herosValues.images.lg}
        maxW="100%"
        height="80%"
        borderRadius="20px"
        mb="10px"
      />

      <Flex mt="auto" align="center" gap="8px" w="100%">
        <CustomModal onClose={closeModal1} open={isOpenModal1}>
          <CardsOpen $open={isOpenModal1}>
            <ContentImg>
              <ImgCards $open={isOpenModal1} src={herosValues?.images.lg} />
            </ContentImg>

            <ContainerCardInfo>
              <CardInfo>
                <TextCustom $open={isOpenModal1}>
                  {herosValues?.name}
                </TextCustom>
                <Informations data={herosValues} />
              </CardInfo>
              <PowerStatus powers={herosValues.powerstats} />
            </ContainerCardInfo>
          </CardsOpen>
        </CustomModal>

        <Text
          fontWeight="600"
          color={mainText}
          textAlign="start"
          fontSize="xl"
          margin="0"
          textTransform="uppercase"
          fontFamily="Bangers"
        >
          {herosValues.name}
        </Text>
        <DarkMode>
          <Badge
            fontSize="large"
            borderRadius="9px"
            size="md"
            colorScheme="green"
            color="green.400"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="min-content"
          >
            {defineScore(herosValues.powerstats)}
          </Badge>
        </DarkMode>
      </Flex>
    </Flex>
  );
};
