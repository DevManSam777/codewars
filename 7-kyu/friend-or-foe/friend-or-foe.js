function friend(friends){
  // filter through friends list and return an array if length of friend's name is equal to 4
  return friends.filter(friend => friend.length === 4);
}