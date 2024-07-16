import * as Auth from "next-auth";

type Props = {
  user: Auth.User;
};

const UserName: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <span>{user?.userName}</span>
    </div>
  );
};

export default UserName;
