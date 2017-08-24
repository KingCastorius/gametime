
function submit() {

  if(prompt("You awaken with the helmsguard of headaches, what is your name? Throgdor or Cascadius the Vile?") === "Throgdor") {
    if(prompt("You enter into the forrest of DOOOOOOOM! a path lies to your east, and west.  Which direction do you choose?") === "east") {
      if(prompt("You find a cave filled with darkness do you enter? Yes, or No?") === "Yes") {
        if(prompt("You have stumbled upon the beast of the elder king. Shall you strike him in the legs, head, body, or arms?") === "legs") {
          if(prompt("You make it home with your millions of tons of gold dubloons, when you discover your servant has been plotting a coux! is it the butler, brother in arms, wife, son, or the old man down the street?") === "the old man down the street") {
            alert("YOU ARE THE MIGHTIEST AND WISEST IN THE SEVEN LANDS!")
          } else {
            ('You have chosen... POORLY! YOU DIE!')
          }
        } else{
          alert('YOU HAVE NEVER LEARNED TRUE COMBAT. YOU DIIIIIIIE!')
        }
      } else {
        alert('YOU HAVE FAILED AS THE FIRST BORN OF ROTHNAK THE DESTROYER!!!!')
      }
    } else {
      alert('YOU HAVE BEEN EAATEN BY RABID MONKEYS!! GAME OVER!')
    }
  } else {
   alert('You DIED!')
  }
}
