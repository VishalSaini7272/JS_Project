let btn1 = document.querySelector("#btn1"); //access the btn1.
let body = document.querySelector("body");    // access the body.
let currentMode = "light";
btn1.addEventListener("click",() => {
if(currentMode === "light"){  // when currentMode is equal to light.
currentMode = "dark";          // then, currentMode is equal to dark.

body.classList.add("dark");     //add the dark mode on body with the help of classlist.
body.classList.remove("light")  //remove the light mode on body with the help of classlist.
} else {
    currentMode = "light";        // then, currentMode is equal to light.
   
   body.classList.add("light");  //add the light mode on body with the help of classlist.
   body.classList.remove("dark")  //remove the dark mode on body with the help of classlist.
}
console.log(currentMode);
})

