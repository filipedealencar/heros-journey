import { Superhero } from "@/types/HerosTypes";

export interface IListCards {
  itens: Superhero[];
  item?: (el: Superhero) => void;
}
