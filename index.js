const character = document.getElementById('character');
const block = document.getElementById('block');
const score = document.getElementById('score');
const result = document.getElementById('result');
const mark = document.getElementById('mark');
const refresh = document.getElementById('refresh');
var points = 0;

function jump(){
    if(character.classList != 'animation'){
        character.classList.add('animation');
    }
    setTimeout(() => {
        character.classList.remove('animation');
    },750);
}

var check = setInterval(() =>{
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft<=70 && blockLeft>=50 && characterTop>300){
        block.style.animation = 'none';
        block.style.display = 'none';
        result.innerHTML = 'Game Over!!!'
        mark.innerHTML='Your Points is : '+points;
        refresh.innerHTML = 'Refresh the page to play again.';
        score.style.display = 'none';
        points=0;
        score.innerHTML = `Score : ${points}`;
    }
    else if(blockLeft<970){
        score.innerHTML = `Score : ${points}`;
        points++;
    }
},10)