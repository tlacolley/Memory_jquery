var back = document.getElementsByClassName("back");
var hidden = document.getElementsByClassName("gne");

for (var i = 0; i < back.length; i++) {
    back[i].addEventListener("click", flip);

    function flip(){
    this.style.display = "none";
    // this.style.toggleClass(.back.active);
    }

}
