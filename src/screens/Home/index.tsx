import { CustomLoading } from "@/components/Load";
import { GlobalContext } from "@/contexts/GlobalContext";
import { ListCards } from "@/patterns/ListCards";
import SidebarWithHeader from "@/patterns/Sidebar";
import HerosApi from "@/services/apis/Heros";
import { Superhero } from "@/types/HerosTypes";
import { Box } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent, useContext } from "react";
import styled from "styled-components";

const ContentMsgNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const MsgNotFound = styled.div`
  color: #fff;
  font-family: "Bangers";
  font-size: 4rem;
  filter: drop-shadow(2px 4px 4px black);
  text-align: center;
`;

const Home: React.FC = ({}) => {
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
    setMode("list");
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
  return (
    <Box
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {isMounted ? (
        <CustomLoading />
      ) : (
        <>
          {filteredSuperheroes?.length === 0 ? (
            <ContentMsgNotFound>
              <MsgNotFound>
                Nenhum personagem encontrado. Tente de novo!
              </MsgNotFound>
            </ContentMsgNotFound>
          ) : isLoadSearch ? (
            <CustomLoading />
          ) : (
            <ListCards itens={filteredSuperheroes ?? []} />
          )}
        </>
      )}
    </Box>
  );
};

export default Home;
