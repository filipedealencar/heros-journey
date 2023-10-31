import { ContainerListCards, ContentListCards, MainListCards } from "./styles";
import React, { useEffect, useState } from "react";
import { IListCards } from "./types";
import { Button, SimpleGrid } from "@chakra-ui/react";
import { CustomLoading } from "@/components/Load";
import { TeamsCard } from "@/components/Cards";

export const ListCards: React.FC<IListCards> = ({ item, itens }) => {
  const [sizeList, setSizeList] = useState(9);
  const [loadList, setLoadList] = useState(false);

  const handleList = () => {
    setLoadList(true);

    setTimeout(() => {
      setSizeList((state) => state + 9);
      setLoadList(false);
    }, 2000);
  };

  return (
    <MainListCards>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX="40px"
        spacingY="20px"
      >
        {itens
          .filter((e, i) => i < sizeList)
          .map((hero, index) => (
            <div onClick={() => item && item(hero)} key={index}>
              <TeamsCard herosValues={hero} />
            </div>
          ))}{" "}
      </SimpleGrid>
      {loadList ? (
        <CustomLoading />
      ) : (
        <Button
          backgroundColor={"#fff"}
          color={"#0083eb"}
          size="lg"
          onClick={handleList}
        >
          Carregar mais
        </Button>
      )}
    </MainListCards>
  );
};
