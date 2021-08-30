// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0;

contract NotaryStar {
  string public starName;
  address public starOwner;

  event NameSet(string setName);
  event StarClaimed(address claimedBy);
  event NameChanged(string newStarName, address changedBy);

  constructor() {
    starName = "Greatness";
    // emit NameSet(starName);

  }

  function claimStar() public {
    starOwner = msg.sender;
    emit StarClaimed(msg.sender);

  }

  function changeName(string  memory _newName) public {
    starName = _newName;
    starOwner = msg.sender;
    emit NameChanged(starName, msg.sender);

  }
}