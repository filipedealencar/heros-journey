import { Cards } from "@/components/Cards";
import { ContainerListCards, ContentListCards, MainListCards } from "./styles";
import React from "react";
import { IListCards } from "./types";

export const ListCards: React.FC<IListCards> = ({ itens }) => {
  return (
    <MainListCards>
      <ContainerListCards>
        <ContentListCards>
          {itens.map((item, index) => (
            <React.Fragment key={index}>
              <Cards herosValues={item} />
            </React.Fragment>
          ))}
        </ContentListCards>
      </ContainerListCards>
    </MainListCards>
  );
};
