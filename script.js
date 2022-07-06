
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","B","D","E","F"];
    const btn= document.getElementById("btn");
    const color =document.querySelector("#hex-code");


    btn.addEventListener('click', function(){
        let code="#";
        for(let i=0;i<6;i++){
            code+= hex[randomNum()];
        }
        color.textContent=code;
        document.body.style.backgroundColor=code;
        btn.style.color=code;

    });


    function randomNum(){
        return Math.floor(Math.random() * hex.length);
    }





