let searchBar = document.getElementById("searchbar")
let searchClickFunc = () => {
  
    searchBar.style.border="1px solid gray";
    searchBar.style.fontWeight="bold"
    searchBar.style.padding="0px 25px 0px 9px"
}
searchBar.addEventListener("click", searchClickFunc);
//House selection Generator
// function getRandomPercentages() {
//     let random1 = Math.floor(Math.random() * 100);
//     let random2 = Math.floor(Math.random() * (100 - random1));
//     let random3 = Math.floor(Math.random() * (100 - random1 - random2));
//     let random4 = 100 - random1 - random2 - random3;

//     return [random1, random2, random3, random4];
// }

// let percentages = getRandomPercentages();
// console.log(percentages); // Example output: [23.45, 12.67, 43.21, 20.67]

// document.addEventListener("DOMContentLoaded", () => {
//     let downArrows = document.querySelectorAll(".arrows");

//     downArrows.forEach(downArrow => {
//         downArrow.addEventListener("click", () => {
//             downArrow.style.transform = "rotate(270deg)";
//             console.log("Hello");
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
        let downArrows = document.querySelectorAll(".arrows");
     let popup=document.getElementById("popup")
        downArrows.forEach(downArrow => {
            downArrow.addEventListener("click", () => {
                if(downArrow.classList.contains("rotate-270")){
                    popup.style.display="none"
                    popup.style.transition="0.3s ease-in-out"
                    downArrow.classList.add("rotate-90")
                    downArrow.classList.remove("rotate-270")
                    console.log("hel;l")
                }
                else{
                          popup.style.display="flex"
                    downArrow.classList.add("rotate-270")
                    downArrow.classList.remove("rotate-90")
                    console.log("hel;l")
                }
            });
        });
    });