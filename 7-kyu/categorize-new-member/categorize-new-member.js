function openOrSenior(data){
    // initialize membershipType array outside of loop to store member type
    let membershipType = [];
     
    // loop through data array
    for(let i = 0; i < data.length; i++) {
      // data[i] has two indexes always
      // data[i][0] is age and data[i][1] is handicap score
      // if member is over 55 and has a handicap above 7
      if (data[i][0] >= 55 && data[i][1] > 7) {
        // true so push "Senior" into membershipType array
        membershipType.push("Senior");
      } else {
        // false so push ("Open") into membershipType array
        membershipType.push("Open");
      }
    } // return membershipType outside of loop
      return membershipType;
  }