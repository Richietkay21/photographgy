let arr =['house.png','mesh1.png','mesh2.png'];


let slide = document.getElementById('slide')

let num = 0;

next = function(){
    num++;

    if(num>=arr.length){
        num = 0;
    }
    slide.src = arr[num];
}

prev = function(){
    num--;

    if(num<0){
        num = arr.length-1;
        if(num<num-arr.length){
            num = arr.length-1
        }
    }
    slide.src = arr[num];
}


