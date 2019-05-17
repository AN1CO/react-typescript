import * as React from "react";

interface IFriend {
  name: string;
  email?: string;
}

// intersection of interfaces
interface IFriendProps {
  friend: IFriend;
}

interface IReduxProps {
  isLoggedIn: boolean;
}

// React.FC >> react.functional.component, let TS know its a react
// component
// can have more than one props passing in OR layer it all in
// properties in one Prop

export const Friend: React.FC<IFriendProps & IReduxProps> = ({ friend }) => {
  const [showEmail, setShowEmail] = React.useState(true);
  const handleEmailClick = () => {
    setShowEmail(!showEmail);
  };
  return (
    <div>
      <div>
        <span>{friend.name}</span>
      </div>
      {showEmail ? (
        <div>
          <span>{friend.email}</span>
        </div>
      ) : null}
      <button onClick={() => handleEmailClick()}>
        {showEmail ? "Hide" : "Show"} Email
      </button>
    </div>
  );
};
