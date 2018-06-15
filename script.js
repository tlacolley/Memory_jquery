var main = document.getElementsByTagName("main")[0];
var divBack = document.createElement("div");
var divFace = document.createElement("div");
divBack.style.display = "flex";
divFace.style.display = "flex";
divBack.style.position = "absolute";
divFace.style.position = "absolute";
divBack.style.margin = "1%";
divFace.style.margin = "1%";
divBack.style.flexWrap = "wrap";
divFace.style.flexWrap = "wrap";

// div.className = "back";
main.appendChild(divBack);
main.appendChild(divFace);
main.style.position = "relative";

var arenaCards = [];

var nbCard = prompt("enter nombres cartes paire !");7

while (nbCard %2){
    nbCard = prompt("PAIRE MOTHERFUCKER!!!!!");

}

for (var i = 0; i < nbCard; i++) {
    cards = document.createElement("img");
    divBack.appendChild(cards);
    cards.className = "back";
    cards.style.width = "160px";
    cards.style.height = "240px";
    cards.src="Img/6.jpg";
    cards.style.margin = "10px";

}

for (var i = 0; i < nbCard; i++) {
    cardsFace = document.createElement("img");
    divFace.appendChild(cardsFace);
    cardsFace.className = "front";
    cardsFace.style.width = "160px";
    cardsFace.style.height = "240px";
                                cardsFace.src = "/Img/alban.png"
    cardsFace.style.margin = "10px";

    cardsFace.style.opacity = "0"
}


for (var i = 0; i < nbCard; i++) {

    this.addEventListener("click", flip);

    function flip() {

            cardsFace.style.opacity = "1";
            // table.push(this.parentNode.id);




    }
}
































// var back = document.getElementsByClassName("back");
// var hidden = document.getElementsByClassName("gne");
// var img = document.getElementsByTagName("img");
// var div = document.getElementsByTagName("div");
//
// var table = [];
//
//
// for (var i = 0; i < back.length; i++) {
//     div = back[i]
//     div.addEventListener("click", flip);
//
//     function flip() {
//         if (table.length < 2) {
//             this.style.visibility = "hidden";
//             table.push(this.parentNode.id);
//             }
//         else {
//             console.log(table);
//             this.style.visibility = "visible";
//         }
//     }
//
//
//
// }








// for (var i = 0; i < back.length; i++) {
//         if(numFlip < 3){
//             back[i].addEventListener("click", flip);
//             function flip(){
//
//                 this.style.visibility = "hidden";
//                 numFlip = numFlip + 1;
//                     }
//                     console.log(numFlip);
//             }
//             else {
//                 this.style.visibility = "visible";
//
//             }
//
//     }






    // for (var i = 0; i< img.length; i++){
    //     // img[i].src = "Img/6.jpg";
    //     // img[i].classList.remove("gne");
    //     // img[i].classList.replace("gne","back");
    //     // this.style.toggleClass("active");
    //     this.addEventListener("click", flip);
    //
    //     function flip(){
    //
    //         // img[i].classList.replace("gne","back");7
    //
    //
    //
    //
    //               // if(numFlip > 3){
    //               //       var unmFlip += 1 ;
    //               //
    //               // }
    //
    //
    //           }
    //
    // //
    // }
