import { Cards } from "@/components/Cards";
import { ContainerListCards, ContentListCards, MainListCards } from "./styles";
import React, { useEffect, useState } from "react";
import { IListCards } from "./types";
import { Button } from "@chakra-ui/react";
import { CustomLoading } from "@/components/Load";

export const ListCards: React.FC<IListCards> = ({ itens }) => {
  const [sizeList, setSizeList] = useState(10);
  const [loadList, setLoadList] = useState(false);

  const handleList = () => {
    setLoadList(true);

    setTimeout(() => {
      setSizeList((state) => state + 10);
      setLoadList(false);
    }, 2000);
  };

  return (
    <MainListCards>
      <ContainerListCards>
        <ContentListCards>
          {itens
            .filter((e, i) => i < sizeList)
            .map((item, index) => (
              <React.Fragment key={index}>
                <Cards herosValues={item} />
              </React.Fragment>
            ))}
        </ContentListCards>
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
      </ContainerListCards>
      <div></div>
    </MainListCards>
  );
};
