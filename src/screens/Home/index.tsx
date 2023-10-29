import { UserAvatar } from "@/components/UserAvatar";
import { ListCards } from "@/patterns/ListCards";
import Sidebar from "@/patterns/Sidebar";
import HerosApi from "@/services/apis/Heros";
import { Container, HStack } from "@chakra-ui/react";

const Home: React.FC = ({}) => {
  const heros = new HerosApi();

  const { data, isLoading } = heros.getListHeros();

  console.log(data, isLoading);
  return (
    <HStack>
      <Sidebar />
      <ListCards itens={data?.filter((e, i) => i < 10) ?? []} />
    </HStack>
  );
};

export default Home;
