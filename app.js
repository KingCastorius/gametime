function Submit() {
  alert("Hello, we are now going on a adventure to find treasure");
  alert("On the adventure there will come different choices of different things to do, if you choose wrong you might not find the treasure");

    let Name = prompt("Type in your name");
    while (Name === "") {
    alert("Please type a name in the field!")
    let Name = prompt("Type in your name");
    }

  alert("Hello " + Name);



  alert("You enter a dark forest " + " you can hear birds singing in the air, and the sound of air sweeping through the trees");
  alert("Suddenly, you arrive at a road, with 2 different ways, one to the left and one to the right " + "Choose wich way, you wanna take");

  let road = prompt("LEFT or RIGHT?");
  let decision;
  let decision2;
  let decision3;
  let decision4;
  let decision5;



  function roadLeft() {
    alert("As you start walking on the left road,");
    alert("Far ahead of you, you see a wooden cabin.");
    alert("Do you wanna go inside the cabin or continue on the road.");
    decision = prompt("ROAD or CABIN").toLowerCase();
  }

  if (road === "left") {
    roadLeft();
  } else if (road === "right") {
    alert("You died");
  }


  function


}
