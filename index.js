function scuberGreetingForFeet(n){
  // Write your code here!
let greeting
  if( n  <= 400 ) {
    return "This one is on me!";
  }  if (n >= 2500) {
    return 'No can do.';
  } else if(n > 2000) {
    return "I will gladly take your thirty bucks.";
}
}
function ternaryCheckCity(city){
  // Write your code here!
let cityName = city === "NYC" ? 'Ok, sounds good.' :'No go.';
  return cityName
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break; 
    default :
      return 'Bye.'
  }
}