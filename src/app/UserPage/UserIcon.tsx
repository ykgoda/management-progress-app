import * as Auth from "next-auth";
import { IconButton } from "../../index";

type Props = {
  user: Auth.User;
};

const UserIcon: React.FC<Props> = ({ user }) => {
  return <IconButton src={user?.userImage} />;
  // <div>
  //     <img src={user.userImage} alt="ユーザーのアイコン画像" />
  // </div>
};

export default UserIcon;
