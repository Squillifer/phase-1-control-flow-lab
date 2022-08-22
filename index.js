function scuberGreetingForFeet(Height){
  // Write your code here!
  if (Height <= 400)
    return 'This one is on me!'
  else if (Height > 400 && Height <2000)
    return 'That will be twenty bucks.'
  else if (Height >=2000 && Height <=2500)
    return 'I will gladly take your thirty bucks.'
  else 
    return 'No can do.'


}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}