var russian = ['Привычка - вторая натура', 'Заметьте хорошо!', 'Беда не приходит одна', 'Через тернии к звёздам'];
var latin = ['Consuetudo est altera natura', 'Nota bene', 'Nulla calamitas sola', 'Per aspera ad astra'];
var phrase_num = 0;
var TheEnd = document.querySelector('.theEnd');
var NumSentences = russian.length;
var phrasesContainer = document.querySelector('.phrases');


var But1 = document.querySelector('#But1');
But1.onclick = CreateSentence;

var But2 = document.querySelector('#But2');
But2.onclick = ChangeColour;

function ChangeColour(){
    var ColourRight = document.querySelectorAll('.phrase.right');
    for (var phrase of ColourRight){
    
    phrase.classList.add('colour');
    }
    
}



function GetRandomIndex(){
    return Math.floor(Math.random()*russian.length);
}

function MoveClick(){
    var phrases = document.querySelectorAll('.phrase');
    for(var phrase of phrases ){
        phrase.onclick=move;
    }
}

function move(){

    this.classList.add('right');
    this.textContent=this.dataset.latin_p;
}



function CreateSentence(){
    phrase_num++;
    var index = GetRandomIndex();
    if (phrase_num > NumSentences )
    {
        TheEnd.textContent = 'Фразы закончились';
    }
    else{
    phrasesContainer.innerHTML += `
    <p data-latin_p="${phrase_num}. ${latin[index]}" class="phrase">
    ${phrase_num}. ${russian[index]}</p>
    `

    
    russian.splice(index,1);
    latin.splice(index,1);
    MoveClick();
    }

    
}


