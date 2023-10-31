import { useEffect } from "react";
import { ContainerLoadStyle, ContentLoadStyle, LoadStyle } from "./styles";

export const CustomLoading: React.FC<ICustomLoading> = ({}) => {
  let itens: number[] = [45];
  useEffect(() => {
    for (let index = 0; index < 2; index++) {
      itens.push(itens[index] - 15);
    }
  }, []);

  return (
    <ContainerLoadStyle>
      <ContentLoadStyle>
        <LoadStyle
          $positionAbsolute={false}
          $border={15}
          $size={100}
        ></LoadStyle>
        {itens.map((val, i) => (
          <LoadStyle
            $positionAbsolute={true}
            $border={15}
            $size={100}
            key={i}
            $valChindren={val}
          ></LoadStyle>
        ))}
      </ContentLoadStyle>
    </ContainerLoadStyle>
  );
};
