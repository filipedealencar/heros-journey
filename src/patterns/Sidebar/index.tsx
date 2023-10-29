import { UserAvatar } from "@/components/UserAvatar";
import { StyledChakraBox } from "./styles";

const Sidebar: React.FC = ({}) => {
  return (
    <div>
      <StyledChakraBox>
        <UserAvatar />
      </StyledChakraBox>
    </div>
  );
};

export default Sidebar;
