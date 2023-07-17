var img = document.getElementById("ggomo1");
var count = document.getElementById("score");
var TaiwanScore = document.getElementById('my_score');
var score = 0;
var MyScore = 140619;
var audio = new Audio('pop.mp3');
var hk_score = 2100, th_score = 1500, jp_score =1300, kr_score = 900, se_score = 150, pl_score = 50, dm_score = 180, id_score=100, hu_score=31; 

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'ggomo2.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    img.src = 'ggomo1.png';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'ggomo2.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'ggomo1.png';
     audio.play();
});


// Score on leaderboard
setInterval(startCountHk, 1);

function startCountHk(){
    hk_score++;
    document.getElementById("table").rows[2].cells.item(3).innerHTML = hk_score;
}

setInterval(startCountTh, 25);

function startCountTh(){
    th_score++;
    document.getElementById("table").rows[3].cells.item(3).innerHTML = th_score;
}

setInterval(startCountJp, 40);

function startCountJp(){
    jp_score++;
    document.getElementById("table").rows[4].cells.item(3).innerHTML = jp_score;
}

setInterval(startCountKr, 34);

function startCountKr(){
    kr_score++;
    document.getElementById("table").rows[5].cells.item(3).innerHTML = kr_score;
}

setInterval(startCountSe, 20);

function startCountSe(){
    se_score++;
    document.getElementById("table").rows[6].cells.item(3).innerHTML = se_score;
}

setInterval(startCountPl, 15);

function startCountPl(){
    pl_score++;
    document.getElementById("table").rows[7].cells.item(3).innerHTML = pl_score;
}

setInterval(startCountDm, 31);

function startCountDm(){
    dm_score++;
    document.getElementById("table").rows[8].cells.item(3).innerHTML = dm_score;
}

setInterval(startCountId, 29);

function startCountId(){
    id_score++;
    document.getElementById("table").rows[9].cells.item(3).innerHTML = id_score;
}

setInterval(startCountHu, 70);

function startCountHu(){
    hu_score++;
    document.getElementById("table").rows[10].cells.item(3).innerHTML = hu_score;
}

function increaseScore(){
    score++;
    MyScore++;
    count.innerHTML = score;
    TaiwanScore.innerHTML = MyScore;
    document.getElementById("table").rows[1].cells.item(3).innerHTML = MyScore;
}
