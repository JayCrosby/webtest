//STORY Variable
var user = prompt("You encounter a dragon in the woods. Do you FIGHT, RUN or PET it?").toUpperCase();

//START Switch
switch(user) {
    case "FIGHT": //START Fight Conditions
       var trained = prompt("Are you trained in fighting? (YES or NO)").toUpperCase();
       var experience = prompt("Do you have experience fighting dragons? (YES or NO)").toUpperCase();
       if (trained === "YES" || experience === "YES") {
           console.log("Thankfully, you only need to be one of the two. You slay the dragon!");
       } else {
           console.log("You're not a trained fighter or have experience in fighting dragons? You're toast.");
       }
        break; //END Fight Conditions

    case "RUN": //START Run Conditions
       var fast = prompt("Did you run track at school? (YES or NO)").toUpperCase();
       var wings = prompt("Do you have wings to fly away from the dragon? (YES or NO)").toUpperCase();
       if (fast === "YES" && wings === "YES") {
           console.log("Good. You outran and outflew the bastard");
       } else {
           console.log("Too bad, you're gonna need both to escape a dragon. You're dead");
       }
        break; //END Run Conditions

    case "PET": //START Pet Conditions
        var petSkills = prompt("Have you ever had a dragon before? (YES or NO)").toUpperCase();
        var animal = prompt("Are you an animal person? (YES or NO)").toUpperCase();
        if (petSkills === "YES" || animal === "YES") {
            console.log("It's okay. You can use the skills you got and improvise!");
        } else {
            console.log("Shucks! The dragon is barbecuing you as we speak");
        }
        break; //END Pet Conditions

    default: //DEFAULT
        console.log("You're doing WHAT?! Try again!");
}
