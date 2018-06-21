$(document).ready(function() {
    var tableCards = [];
    var divBack = $("<div>");
    var divFace = $("<div>");
    divBack.addClass("divBack");
    divFace.addClass("divFace");
    $("main").append(divBack);
    $("main").append(divFace);

    divBack.css({
        "display": "flex",
        "position": "absolute",
        "margin": "1%",
        "flexWrap": "wrap",
    })

    divFace.css({
        "display": "flex",
        "position": "absolute",
        "margin": "1%",
        "flexWrap": "wrap",
    })

    $("main").css("position", "relative")



    var nbCard = prompt("enter nombres cartes paire !");

    while (nbCard % 2) {
        nbCard = prompt("PAIRE MOTHERFUCKER!!!!!");
    }

    for (var i = 0; i < nbCard; i++) {
        var cards = $("<img>")
        $(divBack).append(cards)
        cards.css({
            "width": "160px",
            "height": "240px",
            "margin": "10px"
        }).attr("src", "Img/6.jpg").addClass("back")

    }



    var srcImg = ["Img/alban.png", "Img/alex.jpg", "Img/aurelie.jpg", "Img/caro.jpg", "Img/dimitri.jpg", "Img/dorian.jpg", "Img/fabien.jpg", "Img/gaetan.png", "Img/hermelen.jpg", "Img/jb.jpg", "Img/jd.jpg", "Img/mika.jpg", "Img/perrine.jpg", "Img/quent.jpg", "Img/thomas.jpg", "Img/tibau.jpg", "Img/tibausensei.png", "Img/yann.jpg"];



    for (var i = 0; i < nbCard / 2; i++) {
        var randomImg = Math.floor(Math.random() * srcImg.length)

        for (j = 0; j < 2; j++) {
            var cardsFace = $("<img>")
            cardsFace.css({
                "width": "160px",
                "height": "240px",
                "margin": "10px",
                "opacity": "0",
            }).attr("src", srcImg[randomImg]).addClass("front")
            tableCards.push(cardsFace)

        }

    };


    shuffle(tableCards)

    for (var i = 0; i < tableCards.length; i++) {
        divFace.append(tableCards[i])
    }
    console.log(tableCards);

    $(".front").click(function() {
        $(this).css("opacity", "1");
    });

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }








});









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
