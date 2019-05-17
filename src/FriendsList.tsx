import * as React from "react";

import { IFriend } from "../src/Friend";

interface IFriendsListProps {
  friends: IFriend[];
}

interface ISearchBarProps {
  value: string;
  // function signature: what are the inputs and outputs of this funct
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | number;
}

// VOID: when a function doesnt necessary do anything,
// but maybe call another funct
