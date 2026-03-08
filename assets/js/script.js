
const ele = document.getElementById("ele1")
    
    function pintar(color = "green"){
        ele.style.backgroundColor = color;
        }

    pintar();

    addEventListener("click", function() {pintar("yellow")})

        
 