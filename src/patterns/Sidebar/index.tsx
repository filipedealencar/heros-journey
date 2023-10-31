import { UserAvatar } from "@/components/UserAvatar";
import { ContainerSidebar, StyledChakraBox } from "./styles";

const Sidebar: React.FC = ({}) => {
  return (
    <ContainerSidebar>
      <StyledChakraBox>
        <UserAvatar />
      </StyledChakraBox>
    </ContainerSidebar>
  );
};

export default Sidebar;
