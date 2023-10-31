// import { CustomLoading } from "@/components/Load";
// import { GlobalContext } from "@/contexts/GlobalContext";
// import { ListCards } from "@/patterns/ListCards";
// import SidebarWithHeader from "@/patterns/Sidebar";
// import HerosApi from "@/services/apis/Heros";
// import { Superhero } from "@/types/HerosTypes";
// import { Box, Button, Heading } from "@chakra-ui/react";
// import { useState, useEffect, ChangeEvent, useContext } from "react";
// import styled from "styled-components";

// const ContentMsgNotFound = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50%;
// `;
// const MsgNotFound = styled.div`
//   color: #fff;
//   font-family: "Bangers";
//   font-size: 4rem;
//   filter: drop-shadow(2px 4px 4px black);
//   text-align: center;
// `;

// const Duel: React.FC = ({}) => {
//   const { mode, duel, setMode, setDuel } = useContext(GlobalContext);

//   const [isMounted, setIsMounted] = useState(true);

//   const heros = new HerosApi();

//   const { data, isLoading, error } = heros.getListHeros();

//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [isLoadSearch, setIsLoadSearch] = useState(true);
//   const [filteredSuperheroes, setFilteredSuperheroes] = useState<
//     Superhero[] | undefined
//   >([]);

//   useEffect(() => {
//     setDuel({
//       opponentOne: { id: undefined, name: undefined },
//       opponentTwo: { id: undefined, name: undefined },
//       duelConfirmed: false,
//     });
//     setMode("duel");
//   }, []);

//   const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//     setIsLoadSearch(true);
//   };

//   useEffect(() => {
//     const performSearch = () => {
//       const filteredHeroes = data?.filter((superhero) =>
//         superhero.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredSuperheroes(filteredHeroes);
//     };

//     const debounce = setTimeout(() => {
//       performSearch();
//       setIsLoadSearch(false);
//     }, 300);

//     return () => clearTimeout(debounce);
//   }, [searchTerm, data]);

//   useEffect(() => {
//     if (data?.length === undefined || error !== undefined) return;
//     if (isLoading) return;
//     setTimeout(() => {
//       setIsMounted(false);
//     }, 2000);
//   }, [data, isLoading]);
//   return (
//     <Box
//       style={{
//         display: "flex",
//         position: "relative",
//         justifyContent: "space-around",
//         width: "100%",
//       }}
//     >
//       {isMounted ? (
//         <CustomLoading />
//       ) : (
//         <>
//           {filteredSuperheroes?.length === 0 ? (
//             <ContentMsgNotFound>
//               <MsgNotFound>
//                 Nenhum personagem encontrado. Tente de novo!
//               </MsgNotFound>
//             </ContentMsgNotFound>
//           ) : isLoadSearch ? (
//             <CustomLoading />
//           ) : (
//             <Box
//               display={"flex"}
//               alignItems={"center"}
//               flexDirection={"column"}
//               gap={"24px"}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: "24px",
//                 }}
//               >
//                 <Heading
//                   fontSize={{ lg: "6xl", base: "4xl" }}
//                   filter={"drop-shadow(2px 4px 4px black)"}
//                 >
//                   {`${
//                     duel.opponentOne.name === undefined &&
//                     duel.opponentTwo.name === undefined
//                       ? "Escolha um personagem"
//                       : duel.opponentOne.name &&
//                         duel.opponentTwo.name === undefined
//                       ? "Esolha um oponente para:"
//                       : "Confirme o duelo entre:"
//                   }`}
//                 </Heading>

//                 {duel.opponentOne.name && (
//                   <Heading
//                     fontSize={{ lg: "4xl", base: "2xl" }}
//                     filter={"drop-shadow(2px 4px 4px black)"}
//                   >
//                     {`${duel.opponentOne.name}${
//                       duel.opponentTwo.name ? ` X ${duel.opponentTwo.name}` : ""
//                     }`}
//                   </Heading>
//                 )}
//                 {duel.opponentOne.id !== undefined &&
//                   duel.opponentTwo.id !== undefined && (
//                     <div
//                       style={{
//                         display: "flex",
//                         gap: "16px",
//                       }}
//                     >
//                       <Button
//                         colorScheme="whatsapp"
//                         size="lg"
//                         onClick={() =>
//                           setDuel((state) => {
//                             return {
//                               ...state,
//                               duelConfirmed: true,
//                             };
//                           })
//                         }
//                       >
//                         Confirmar
//                       </Button>
//                       <Button
//                         colorScheme="whatsapp"
//                         variant="outline"
//                         background={"#fff"}
//                         size="lg"
//                         onClick={() =>
//                           setDuel({
//                             opponentOne: { id: undefined, name: undefined },
//                             opponentTwo: { id: undefined, name: undefined },
//                             duelConfirmed: false,
//                           })
//                         }
//                       >
//                         Cancelar
//                       </Button>
//                     </div>
//                   )}
//               </div>
//               <ListCards itens={filteredSuperheroes ?? []} />
//             </Box>
//           )}
//         </>
//       )}
//     </Box>
//   );
// };

// export default Duel;

import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  SimpleGrid,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Superhero } from "@/types/HerosTypes";
import HerosApi from "@/services/apis/Heros";
import { ListCards } from "@/patterns/ListCards";
import { GlobalContext } from "@/contexts/GlobalContext";

const SuperheroDuel: React.FC<{ superheroes: Superhero[] }> = ({
  superheroes,
}) => {
  const [selectedHeroes, setSelectedHeroes] = useState<any>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mode, setMode, setDuel } = useContext(GlobalContext);

  const [isMounted, setIsMounted] = useState(true);

  const heros = new HerosApi();

  const { data, isLoading, error } = heros.getListHeros();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoadSearch, setIsLoadSearch] = useState(true);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState<
    Superhero[] | undefined
  >([]);
  useEffect(() => {
    setDuel({
      opponentOne: { id: undefined, name: undefined },
      opponentTwo: { id: undefined, name: undefined },
      duelConfirmed: false,
    });
    setMode("duel");
  }, []);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setIsLoadSearch(true);
  };

  useEffect(() => {
    const performSearch = () => {
      const filteredHeroes = data?.filter((superhero) =>
        superhero.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuperheroes(filteredHeroes);
    };

    const debounce = setTimeout(() => {
      performSearch();
      setIsLoadSearch(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, data]);

  useEffect(() => {
    if (data?.length === undefined || error !== undefined) return;
    if (isLoading) return;
    setTimeout(() => {
      setIsMounted(false);
    }, 2000);
  }, [data, isLoading]);

  const handleHeroClick = (hero: Superhero) => {
    if (!selectedHeroes.includes(hero)) {
      if (selectedHeroes.length < 2) {
        setSelectedHeroes([...selectedHeroes, hero]);
      }
    }
  };

  const handleStartDuel = () => {
    if (selectedHeroes.length === 2) {
      onOpen();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
        <Heading filter={"drop-shadow(2px 4px 4px black)"} fontFamily="Bangers">
          Superhero Duel
        </Heading>
        <Button colorScheme="whatsapp" onClick={handleStartDuel}>
          Iniciar Duelo
        </Button>
      </div>
      <div style={{ cursor: "pointer" }}>
        <div>
          <ListCards
            item={(el) => handleHeroClick(el)}
            itens={filteredSuperheroes ?? []}
          />
        </div>
      </div>

      <DuelModal isOpen={isOpen} onClose={onClose} heroes={selectedHeroes} />
    </div>
  );
};

const DuelModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  heroes: Superhero[];
}> = ({ isOpen, onClose, heroes }) => {
  const { setDuel } = useContext(GlobalContext);
  const hero1 = heroes[0];
  const hero2 = heroes[1];

  useEffect(() => {
    setDuel((state) => {
      return {
        ...state,
        opponentOne: { id: hero1?.id, name: hero1?.name },
        opponentTwo: { id: hero2?.id, name: hero2?.name },
      };
    });
  }, [heroes]);

  const defineScore = (powers: object) => {
    if (powers) {
      const values = Object?.values(powers);
      const totalScore = values.reduce((total, value) => total + value, 0);
      const averageScore = totalScore / values.length;

      return Math.round(averageScore);
    }
  };

  const defineWinner = (obj1: Superhero, obj2: Superhero) => {
    if (defineScore(obj1?.powerstats)! > defineScore(obj2?.powerstats)!) {
      return (
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={"16px"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize={"larger"} color={"green"}>
            {obj1?.name}
          </Text>
          <Text>{"vence o duelo contra"}</Text>
          <Text fontSize={"larger"} color={"red"}>
            {" "}
            {obj2?.name}
          </Text>
        </Box>
      );
    }

    if (defineScore(obj1?.powerstats) === defineScore(obj2?.powerstats)) {
      return (
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={"16px"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize={"larger"}>{obj1?.name}</Text>
          <Text>{"empatou no duelo contra"}</Text>
          <Text fontSize={"larger"}> {obj2?.name}</Text>
        </Box>
      );
    }
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"16px"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text fontSize={"larger"} color={"green"}>
          {obj2?.name}
        </Text>
        <Text>{"vence o duelo contra"}</Text>
        <Text fontSize={"larger"} color={"red"}>
          {" "}
          {obj1?.name}
        </Text>
      </Box>
    );
  };

  return (
    <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display={"flex"}
          width={"100%"}
          justifyContent={"center"}
          fontFamily={"Bangers"}
        >
          Resultado do Duelo
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Image
                src={hero1?.images.lg}
                maxW="100%"
                height="50%"
                borderRadius="20px"
                mb="10px"
              /> */}
          <SimpleGrid minChildWidth="120px" spacing="40px">
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={hero1?.images.lg}
                maxW="100%"
                borderRadius="20px"
                mb="10px"
              />
              {hero1?.name}
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{hero1?.powerstats.durability}</div>
                  <div>Durabilidade</div>
                  <div>{hero2?.powerstats.durability}</div>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{hero1?.powerstats.intelligence}</div>
                  <div>Inteligência</div>
                  <div>{hero2?.powerstats.intelligence}</div>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{hero1?.powerstats.strength}</div>
                  <div>Força</div>
                  <div>{hero2?.powerstats.strength}</div>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{hero1?.powerstats.speed}</div>
                  <div>Velocidade</div>
                  <div>{hero2?.powerstats.speed}</div>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{hero1?.powerstats.power}</div>
                  <div>Poder</div>
                  <div>{hero2?.powerstats.power}</div>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{hero1?.powerstats.combat}</div>
                  <div>Combate</div>
                  <div>{hero2?.powerstats.combat}</div>
                </Box>
              </div>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={hero2?.images.lg}
                maxW="100%"
                borderRadius="20px"
                mb="10px"
              />
              {hero2?.name}
            </Box>
          </SimpleGrid>
          <div
            style={{
              display: "flex",
              width: " 100%",
              alignItems: " center",
              justifyContent: "center",
            }}
          >
            {defineWinner(hero1, hero2)}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuperheroDuel;
