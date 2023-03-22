
function changeTitle(){
    var title = document.getElementById("UserName");
    title.innerText = "Albertosaurio L. Gomez";
}


function hideBlock2() {
    var remove2 = document.getElementById("block2");
    remove2.remove();
}

function hideBlock3(){
    var remove1 = document.getElementById("block3");
    remove1.remove();
}

function hideblockY22(){
    var removeB22 = document.getElementById("blockY2-2");
    removeB22.remove();
}

function hideblockY21(){
    var removeB21 = document.getElementById("blockY2-1");
    removeB21.remove();
}

function hideblockY23(){
    var removeB23 = document.getElementById("blockY2-3");
    removeB23.remove();
}

function hideblockY24(){
    var removeB24 = document.getElementById("blockY2-4");
    removeB24.remove();
}


    var num = 500;

function addtoList(){
     var list = document.getElementById("Y");
    num++;
    list.innerHTML = num;
}

function removelist(){
    var list = document.getElementById("Y");
    num--;
    list.innerHTML = num;
}

var numR = 2

function removeReq(){
    var list2 = document.getElementById("two");
    numR--;
    list2.innerHTML = numR;
}

function counter() {    
    for(var num = 0; num <= 5; num++){
        console.log(num);
    }
}