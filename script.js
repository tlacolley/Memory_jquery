var back = document.getElementsByClassName("back");
var hidden = document.getElementsByClassName("gne");

for (var i = 0; i < back.length; i++) {

        function flip(){

            var numFlip = 0;
            if(numFlip > 3){
                this.style.visibility = "hidden";
                numFlip += 1;
                // this.style.toggleClass(.back.active);

                    }

                }

         back[i].addEventListener("click", flip);




    }
