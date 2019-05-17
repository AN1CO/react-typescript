import ax from "axios";
import { IFriendsList } from "../src/FriendsList";

export const getFriends = (): Promise<IFriends[]> => {
  return ax
    .get("http//")
    .then(response => {
      const users = response.data.map(user => {
        return users;
      });
    })
    .catch(err => err);
};

// never have to worry about mispelling and then reusing throughout
// an app
enum Cookie {
  THIS_IS_NAME = "this-is-the-translated-version"
}
