const checkSpeed = (speed) => {
  const speedLimit = 70;
  const mPerPoint = 5;

  if (speed <= speedLimit) {
    console.log('Ok');
  } else {
    const points = Math.floor((speed - speedLimit) / mPerPoint);
    
    if(points >= 12) {
      console.log('License suspended');
    } else {
      console.log('Points', points);
    }
  }
}

checkSpeed(130);