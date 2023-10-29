import { ContainerAvatar, ContentAvatar, NameUser, UserImagem } from "./styles";

import avatarImg from "../../../public/images/avatar.png";

export const UserAvatar: React.FC<IUserAvatar> = ({ userImage }) => {
  return (
    <ContainerAvatar>
      <ContentAvatar>
        <UserImagem src={userImage ?? avatarImg} alt="avatar" />
        <NameUser>Ricardo</NameUser>
      </ContentAvatar>
    </ContainerAvatar>
  );
};
