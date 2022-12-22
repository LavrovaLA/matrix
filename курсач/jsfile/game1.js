
let startCont = document.querySelector('.startCont');

let aut = document.querySelector('#startAut');
let inpName = document.querySelector('.inp');
let player = document.querySelector('#name');

let buttonStart = document.querySelector('#buttonStart');//всякое из меню
let keys = document.querySelector('.keys');
let buttonComplete = document.getElementById("complete");
let butModal = document.querySelector('#butModal');
let restart = document.querySelector('#restart');

let openedLvls = 1;

let text = document.querySelector('.text');
let rating = document.getElementById("rating");
var secM = 8;
let listRat = document.querySelector('#listRating');
let backRating = document.querySelector('#returnBack')
let scoresLamp2 = 0;
let lvlNum = document.querySelector('.lvl.dispNone'); //1 lev

let mainPage = document.getElementById("mainPage");
let container1=document.getElementById("container1");//лягушка
var frog = document.getElementById("frogImage");
frog.src='images/frog1.png';

var frog2 = document.getElementById("frogImage");
frog2.src='images/frog1.png';

let place = document.querySelector('.place');

let place2 = document.querySelector('.place2');


let lvl1 = document.getElementById("lvl1");
let lvl2 = document.getElementById("lvl2");
let lvl3 = document.getElementById("lvl3");

lvl1.onclick = changeColourLvl;
lvl2.onclick = changeColourLvl;
lvl3.onclick = changeColourLvl;

let mouse1=0;
let mouse2=0;
let mouse3=0;

var scoresLamp3=0;



function changeColourLvl(){

  lvl1.classList.remove('colourLvl');
  lvl2.classList.remove('colourLvl');
  lvl3.classList.remove('colourLvl');
  this.classList.add('colourLvl');
}




let lampCont1 = document.getElementById("container2");//лампы
let buttonL = document.getElementById("buttonLampU");
buttonL.innerHTML = '<img src="images/l2.png" /  width="200" height="200" >';
let buttonA = document.getElementById("buttonLamp");
buttonA.innerHTML = '<img src="images/l2.png" /  width="200" height="200" >';
let buttonLampU = document.querySelector('#buttonLampU');
let ButL = document.querySelector('button#buttonLampU img');
let ButLA = document.querySelector('#buttonLamp img');
let lampSec = document.getElementById("lampSec");
var sec;
var comp = 0;
var sec_o=3;
var ch = 0;
var score = 0;
var startTime = 1;
var ErRate = 0.5;
var scoreLamp=0;
//localStorage.clear();
let rateFrog = 0.015;
var n = 1;

let mouseCont1 = document.getElementById("container3");// мыш поганая
let mouse = document.getElementById("mouse");

let lampCont2 = document.getElementById("contlamp2");//лампы
let buttonLl2 = document.getElementById("buttonLampUL2");//лампа ур 2
buttonLl2.innerHTML = '<img src="images/l2.png" /  width="175" height="175" >';

let buttonL2l2 = document.getElementById("buttonLampU2L2");
buttonL2l2.innerHTML = '<img src="images/l2.png" /  width="175" height="175" >';

let buttonAl2 = document.getElementById("buttonLampL2");
buttonAl2.innerHTML = '<img src="images/l2.png" /  width="175" height="175" >';

let buttonA2l2 = document.getElementById("buttonLamp2L2");
buttonA2l2.innerHTML = '<img src="images/l2.png" /  width="175" height="175" >';

let buttonF = document.getElementById("fakeLampL2");
buttonF.innerHTML = '<img src="images/l2.png" /  width="175" height="175" >';
var blocks;

// let scores = document.getElementById("scores");
// scores.innerHTML='баллы: 0';

let timerl2 = document.querySelector('#timerL2');
let timel2 = document.querySelector('#timeL2');

let timer2l2 = document.querySelector('#timer2L2');
let time2l2 = document.querySelector('#time2L2');

// let restart = document.querySelector('#restart');

let buttonLampUl2 = document.querySelector('#buttonLampUL2');
let ButLPicl2 = document.querySelector('button#buttonLampUL2 img');
let ButLAPicl2 = document.querySelector('#buttonLampL2 img');

let buttonLampU2l2 = document.querySelector('#buttonLampU2L2');
let ButLPic2l2 = document.querySelector('button#buttonLampU2L2 img');
let ButLAPic2l2 = document.querySelector('#buttonLamp2L2 img');

var totalScoresLev1 = 0;

var totalScoresLev2 = 0;

var totalScoresLev3 = 0;




let nextGame = document.querySelector('#nextGame');
let nextGame2 = document.querySelector('#nextGame2');
let nextGameF2 = document.querySelector('#nextGameF2');
let nextGameF3 = document.querySelector('#nextGameF3');
let nextGameL2 = document.getElementById("nextGameL2");
let nameG=document.getElementById("nameGame");
let levm;

let ent = document.querySelector('.ent');
let scores = document.getElementById("scores");
scores.innerHTML='баллы: 0';


aut.onclick = changePage;


function changePage() {
changeLevel();
showModal();
text.innerHTML="Для прыжка нужно нажать на лягушку.Чем дольше время нажатия на нее - тем дальше она прыгнет. Для прохождения уровня лягушка должна лапками встать на кувшинку";
}


var comFrog=0;
function changeLevel(){         
  if ((inpName.value.length == 0)||(((lvl1.classList.contains('colourLvl'))==0)&&((lvl2.classList.contains('colourLvl'))==0)&&((lvl3.classList.contains('colourLvl'))==0))){                                   
if (inpName.value.length == 0) {
    ent.innerHTML='Для начала игры введите свое имя!';
    setTimeout("ent.innerHTML=' '",800);
}

if (((lvl1.classList.contains('colourLvl'))==0)&&((lvl2.classList.contains('colourLvl'))==0)&&((lvl3.classList.contains('colourLvl'))==0)){
  ent.innerHTML='для начала игры выберите уровень';
  setTimeout("ent.innerHTML=' '",800);
}
}
else if (lvl1.classList.contains('colourLvl')){
  lvl1.classList.remove('colourLvl');
  lvlNum.innerHTML = "уровень 1";
  frog.style.transition = '1s'
  frog.style.marginTop=0+'%';
  rateFrog = 0.015;
  n=1;
  nextGameF2.classList.add('dispNone');
  if (comFrog>=1){
    nextGame.classList.remove('dispNone');
  }
  frogLevel1();
}
else if ((lvl2.classList.contains('colourLvl'))&&(openedLvls>=2)){
  lvlNum.innerHTML = "уровень 2";
  lvl1.classList.remove('colourLvl');
  n=2;
  rateFrog=0.03;
  nextGame.classList.add('dispNone');
  if (comFrog>=2){
    nextGameF2.classList.remove('dispNone');
  }
  frog.style.transition = '1s'
  frog.style.marginTop=0+'%';
  frogLevel1();
}
else if ((lvl3.classList.contains('colourLvl'))&&(openedLvls>=3)){
  lvlNum.innerHTML = "уровень 3";
  lvl3.classList.remove('colourLvl');
  n=3;
  rateFrog=0.01;
  nextGame.classList.add('dispNone');
  nextGame2.classList.add('dispNone');
  frog.style.transition = '1s';
  frog.style.marginTop=0+'%';
  place.style.marginLeft ='40.7%';
  place.style.width='150px';
  place.style.height='150px';
  place.style.marginTop='12%';
  place2.classList.remove('dispNone');
  place2.style.width='150px';
  place2.style.height='150px';
  frog.style.width='170px';
  frogLevel3();
}
}


//--------------------------------------------------------------------лягушка 1-2 ур------------------------------------------------

var scoreFrog2=0;
var scoreFrog1 =0;
function frogLevel1()
{
//..............................................................
  container1.classList.remove('dispNone');
  nameG.classList.add('dispNone');
  startCont.classList.add('dispNone');
  buttonStart.classList.remove('dispNone');
  butModal.classList.remove('dispNone');
  restart.classList.remove('dispNone');
  place.classList.remove('dispNone');
  frog.classList.remove('dispNone');
  scores.classList.remove('dispNone');
  lvlNum.classList.remove('dispNone');
  player.innerHTML='Игрок: '+ inpName.value;
  player.classList.remove('dispNone');
  keys.classList.remove('dispNone');
  buttonComplete.classList.remove('dispNone');
  place2.classList.add('dispNone');
  place.style.width='200px';
  place.style.height='200px';
  place.style.marginTop='20%';
  place.style.marginLeft='40%';
  frog.style.width='200px';

//..............................................................

var sec;
var checkIMG = 0;
buttonStart.onclick = funcStartFrog;
frog.ondblclick = changeCharacter;
mainPage.onclick = returnMain;

function changeCharacter(){
      if (checkIMG == 0){
      frog.src='images/frog11.png';
      checkIMG=1;}
      else 
      {
        frog.src='images/frog1.png';
        checkIMG=0;
      }
}

function funcStartFrog(){
  frog.onmousedown = mouseDown;
  frog.onmouseup = mouseUp;

}



function mouseDown(){
  sec =  Date.now();
    return sec;
}

function mouseUp(){

  frog.style.transition = '2s'
    if (checkIMG==0){
    frog.src='images/frog2.png';
    }
    else{
      frog.src='images/frog22.png';
    }
    var rate = Date.now()*rateFrog-rateFrog*sec;
    if (rate<33){
    frog.style.marginTop=rate+'%';}

    else{
      frog.style.marginTop=33+'%';
    }

    setTimeout(changeImage, 2000);
    frog.onmousedown = undefined;
    frog.onmouseup=undefined;
    buttonComplete.classList.add('colourC');
    if (rate>13 && rate<26.8 ){
      if (((Math.round((10-(Math.abs(19-rate)))*100)/100)>scoreFrog1)&&(n!=2))
      {scoreFrog1=Math.round((10-(Math.abs(19-rate)))*100)/100;}
      if (((Math.round((10-(Math.abs(19-rate)))*100)/100)>scoreFrog2)&&(n==2))
      {scoreFrog2=Math.round((10-(Math.abs(19-rate)))*100)/100;

      //localStorage.setItem(inpName.value, score);
    }
    if(n==1){
      totalScoresLev1=scoreFrog1+scoreLamp+mouse1;
      scores.innerHTML='баллы: '+ Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100;
      insertIntoRating();
      comFrog = 1;
      nextGame.classList.remove('dispNone');
      nextGame.onclick = lampLev1;
      }
      else if (n==2){
      totalScoresLev2=scoreFrog2+scoresLamp2+mouse2;  
      scores.innerHTML='баллы: '+ Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100;
      insertIntoRating();
      comFrog=2;
      nextGameF2.classList.remove('dispNone');
      nextGameF2.onclick = lampLev2;
      }

      buttonComplete.innerHTML = '&#10003';
      buttonComplete.classList.add('colourGreen');
    }
    else{
      if (buttonComplete.innerHTML!='&#10003'){
      buttonComplete.innerHTML='&times';
      buttonComplete.classList.add('colourRed');
      }
    }
    restart.onclick = funcRestart;
    restart.classList.add('colRestart');
    restart.innerHTML = 'заново';
}

function changeImage(){
  if (checkIMG==0)
  {
  frog.src='images/frog1.png';}
  else{
    frog.src='images/frog11.png';
  }
}
function funcRestart(){
  frog.style.transition = '1s'
  frog.style.marginTop=0+'%';
}

}
var scoreFrog3=0;

//-------------------------------------------------------------------------лягушка ур 3------------
function frogLevel3(){

//..............................................................
container1.classList.remove('dispNone');
nameG.classList.add('dispNone');
startCont.classList.add('dispNone');
buttonStart.classList.remove('dispNone');
butModal.classList.remove('dispNone');
nextGameF2.classList.add('dispNone');
restart.classList.remove('dispNone');
place.classList.remove('dispNone');
frog.classList.remove('dispNone');
scores.classList.remove('dispNone');
lvlNum.classList.remove('dispNone');
player.innerHTML='Игрок: '+ inpName.value;
player.classList.remove('dispNone');
keys.classList.remove('dispNone');
buttonComplete.classList.remove('dispNone');
var rate2 = 0;
var firstP = 0;
var rat1=6, rat2=15;
var rate =0;

//..............................................................

var sec;
var checkIMG = 0;
buttonStart.onclick = funcStartFrog;
frog.ondblclick = changeCharacter;
mainPage.onclick = returnMain;

function changeCharacter(){
    if (checkIMG == 0){
    frog.src='images/frog11.png';
    checkIMG=1;}
    else 
    {
      frog.src='images/frog1.png';
      checkIMG=0;
    }
}

function funcStartFrog(){
frog.onmousedown = mouseDown;
frog.onmouseup = mouseUp;

}



function mouseDown(){
sec =  Date.now();
  return sec;
}

function mouseUp(){

frog.style.transition = '2s';
  if (checkIMG==0){
  frog.src='images/frog2.png';
  }
  else{
    frog.src='images/frog22.png';
  }
  rate =rate+ Date.now()*rateFrog-rateFrog*sec;
  if (rate<33){
  frog.style.marginTop=rate+'%';}

  else{
    frog.style.marginTop=33+'%';
  }

  setTimeout(changeImage, 2000);
  frog.onmousedown = undefined;
  frog.onmouseup=undefined;
  buttonComplete.classList.add('colourC');
  if (rate>rat1 && rate<rat2 ){
    rate2=rate;
    if (firstP==1){
      firstP=2;
      scoreFrog3=3;
      nextGameF3.classList.remove('dispNone');
      ErRate=0.3;
      if (n==3){
        ErRate=0.3;
      nextGameF3.onclick = toLamp3;
      }

  
    }
    if(firstP==0){
    firstP=1;
    rat1=23;
    rat2=31.5;
    frog.onmousedown = mouseDown;
    frog.onmouseup = mouseUp;
    }
    sec=0;
  }
  mouse3=3;
  totalScoresLev3= scoreFrog3+scoresLamp3+mouse3;
  scores.innerHTML = 'баллы: ' + Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100;
  insertIntoRating();
  // }
  }
  restart.onclick = funcRestart;
  restart.classList.add('colRestart');
  restart.innerHTML = 'заново';


function changeImage(){
if (checkIMG==0)
{
frog.src='images/frog1.png';}
else{
  frog.src='images/frog11.png';
}
}
function funcRestart(){
  rate2 = 0;
  firstP = 0;
  rat1=6, rat2=15;
  rate =0;
frog.style.transition = '1s'
frog.style.marginTop=0+'%';
frog.onmousedown = mouseDown;
frog.onmouseup = mouseUp;
//frog.src='m1.png';
}
}

function toLamp3 (){
place2.classList.add('dispNone');
frog.classList.add('dispNone');
place.classList.add('dispNone');
ErRate=0.3;
showLamp2();
}

//------------------------------------------------------модальное окно--------------------------

function showModal(){

let modal = document.getElementById('rules');
var openModal = document.getElementById("butModal");
var closeModal = document.getElementsByClassName("close")[0];
openModal.onclick = function() {
modal.style.display = "block";
}


closeModal.onclick = function() {
    modal.style.display = "none";
}
}


var ErRate = 0.5;
let lvl2Lamp = 0;
//-----------------------------------------------------лампа ур 2---------------------------------

function showLamp2(){
  nextGameF3.classList.add('dispNone');
lampCont2.classList.remove('dispNone');
var sec;
var sec_o=3;
var ch = 0;
var startTime = 2;
var startTime2=4;
let sec_s=0;
let levelCompleted = 0;


var er1=0, er2=0;

buttonStart.onclick = funcStartL2;

function changeImage() {
    buttonLampU2l2.onclick = changeImage2;
    ButLPicl2.src = 'images/l1.png';
    if (ch == 0) {
      sec-=3;
        sec_s=sec;
        if ((Math.round(sec_s * 100) / 100 < startTime - ErRate) || (Math.round(sec_s * 100) / 100 > startTime + ErRate)) {
            timerl2.classList.add('color');
            levelCompleted=0;

        }
        else{
          timerl2.classList.remove('color');
        }
    }
    buttonLampUl2.onclick = undefined;
    
}
function changeImage2(){
    ButLPic2l2.src = 'images/l1.png';
    if (ch == 0) {
        timer2l2.innerHTML = Math.round(sec * 100) / 100 + ' sec';
        time2l2.innerHTML = startTime2 + ' sec';
        timerl2.innerHTML = Math.round(sec_s* 100) / 100 + ' sec';
        timel2.innerHTML = startTime + ' sec';
        if ((Math.round(sec * 100) / 100 < startTime2 - ErRate) || (Math.round(sec * 100) / 100 > startTime2 + ErRate)) {
            timer2l2.classList.add('color');
            levelCompleted=0;
        }
        else{
            er1=Math.round(Math.abs(startTime2-Math.round(sec * 100) / 100 )*100)/100;
            if ((7-4*er1)>scoresLamp2)
            {
              if (n==2){
              scoresLamp2=Math.round((7-4*er1)*100)/100;
              totalScoresLev2= scoreFrog2+scoresLamp2+mouse2;
              scores.innerHTML = 'баллы: ' + (totalScoresLev1+totalScoresLev2+totalScoresLev3);
              insertIntoRating();
              
              }
              else if (n==3){
                scoresLamp3 = Math.round((7-4*er1)*100)/100;
                totalScoresLev3= scoreFrog3+scoresLamp3+mouse3;
                scores.innerHTML = 'баллы: ' + (totalScoresLev1+totalScoresLev2+totalScoresLev3);
                insertIntoRating();
              }
            }
            levelCompleted=1;
            timer2l2.classList.remove('color');
            levm=2;
          blocks = [
            [0,0,0,0,0,0,0],
            [1,1,1,1,0,0,0],
            [0,0,1,1,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,1,1,1,1,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,1,1,1]];
            if (n==2){
              // funcRestart();
              secM=10;
            nextGameL2.onclick = mouseLev1;
            }
            else if (n==3){
              // funcRestart();
              secM=8;
              nextGameL2.onclick = mouseLev1;
            }
        }
    }
    timel2.classList.add('bord');
    timerl2.classList.add('bord');
    time2l2.classList.add('bord');
    timer2l2.classList.add('bord');
    buttonComplete.classList.add('bordC');
    restart.onclick = funcRestart;
    ch = 1;
    buttonStart.onclick = undefined;
    buttonLampU2l2.onclick = undefined;
    if(timer2l2.classList.contains('color')||timerl2.classList.contains('color')){
    }
    else{

      
      nextGameL2.classList.remove('dispNone');
      if (n==2){
        scoresLamp2=Math.round((7-4*er1)*100)/100;
        totalScoresLev2 = scoresLamp2+scoreFrog2+mouse2;
        scores.innerHTML='баллы: '+Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100;  
        insertIntoRating();
      }
      else if (n==3){
        scores.innerHTML='баллы: '+Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100;  
        insertIntoRating();
      }      
    }
}

function funcRestart() {
    buttonStart.onclick = funcStartL2;
    sec = 0;
    ch = 0;
    boolStart = 0;
    ButLAPicl2.src = 'images/l2.png';
    ButLPicl2.src = 'images/l2.png';
    ButLAPic2l2.src = 'images/l2.png';
    ButLPic2l2.src = 'images/l2.png';
    timerl2.innerHTML = '';
    timel2.innerHTML = '';
    timer2l2.innerHTML = '';
    time2l2.innerHTML = '';
    timel2.classList.remove('bord');
    timerl2.classList.remove('bord');
    timerl2.classList.remove('colour');
    time2l2.classList.remove('bord');
    timer2l2.classList.remove('bord');
    timer2l2.classList.remove('colour');
    clearInterval(globalInterval);
    clearInterval(inte);

}
function changeImageA() {
    ButLAPicl2.src = 'images/l1.png';
}

function changeImageA2() {
    ButLAPic2l2.src = 'images/l1.png';
    globalInterval = setInterval(() => {
        sec += 0.1;
    }, 100);
    lampSec.classList.remove('dispNone');
    buttonLampUl2.onclick = changeImage;
    startCL();
    clearInterval(inte);
    //clearInterval(inte2);
    buttonF.classList.add('dispNone');
    buttonAl2.style.marginleft='1%';
    buttonAl2.style.marginTop='10px';
    buttonA2l2.style.marginLeft='-66%';
    buttonA2l2.style.marginTop='10px';
}


function funcStartL2() {
     sec = 0;
     //buttonF.style.display='absolute';
     changePosition();
     setTimeout(()=>{buttonF.classList.remove('dispNone')},1000);
     setTimeout(changeImageA, startTime * 1000);
     setTimeout(changeImageA2, startTime2 * 1000);
}

var inte,inte2;
function changePosition(){
       inte =setInterval(() =>
       {buttonAl2.style.marginLeft=20+Math.random()*35+'%';
       buttonAl2.style.marginTop=5+Math.random()*15+'%';
       buttonA2l2.style.marginLeft=Math.random()*25+'%';
       buttonA2l2.style.marginTop=5+Math.random()*15+'%';
       buttonF.style.marginLeft=Math.random()*55+'%';
   }, 1000)
}

}
//---------------------------------------------------------лампа ур 1----------------------------
function lampLev1(){                                                          
  deleteFrog();
  showLamp1();
  text.innerHTML = "После нажатия на кнопку через какое-то время загорится верхняя лампочка. Для прохождения уровня нужно нажать на вторую лампочку через приблизительно такое же время (есть возможность допустить погрешность до 0,5секунд)"
}
function lampLev2(){                                                          
  deleteFrog();
  ErRate = 0.5;
  showLamp2();
  text.innerHTML = "После нажатия на кнопку через какое-то время загорится верхняя лампочка. Для прохождения уровня нужно нажать на вторую лампочку через приблизительно такое же время (есть возможность допустить погрешность до 0,5секунд)"
}
function showLamp1(){
  lampCont1.classList.remove('dispNone');
  buttonStart.onclick = funcStartL1;
  restart.classList.add('colRestart');
  restart.innerHTML = 'заново';
  restart.onclick = funcRestartLamp1;
  function changeImage() {
    ButL.src = 'images/l1.png';
    buttonComplete.classList.add('bordC');
    if (ch == 0) {
      sec -=3;
        timer.innerHTML = Math.round(sec * 100) / 100 + ' сек';
        time.innerHTML = startTime + ' сек';
        if ((Math.round(sec * 100) / 100 < startTime - ErRate) || (Math.round(sec * 100) / 100 > startTime + ErRate)) {
            timer.classList.add('colour');
            if (comp==0){
            buttonComplete.innerHTML='&times';
            buttonComplete.classList.add('colourRed');
            }
    
        }
        else{

            if ((3-Math.round(Math.abs(startTime-Math.round(sec * 100) / 100 )*100)/100)>scoreLamp)
            {scoreLamp =(3-Math.round(Math.abs(startTime-Math.round(sec * 100) / 100 )*100)/100);
            totalScoresLev1 = Math.round((scoreFrog1+scoreLamp+mouse1)*100)/100;
                scores.innerHTML='баллы: '+ Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100;
                insertIntoRating();
        }
                nextGame2.classList.remove('dispNone');
                levm=1;
                blocks = [
                  [0,0,0,0,0,0,0],
                  [1,1,1,1,0,0,0],
                  [0,0,1,1,0,0,0],
                  [0,0,1,1,0,0,0],
                  [0,0,1,1,0,0,0],
                  [0,0,1,1,0,0,0],
                  [0,0,1,1,1,1,1]];
                nextGame2.onclick=mouseLev1;
                comp=1;
            
        }
    }
    time.classList.add('bord');
    timer.classList.add('bord');
    ch = 1;
    buttonStart.onclick = undefined;
    buttonLampU.onclick = undefined;

}
function funcStartL1() {
  sec = 0;
  setTimeout(changeImageA, startTime * 1000);
 
}

function funcRestartLamp1() {
    buttonStart.onclick = funcStartL1;
    sec = 0;
    ch = 0;
    boolStart = 0;
    ButLA.src = 'images/l2.png';
    ButL.src = 'images/l2.png';
    timer.innerHTML = '';
    time.innerHTML = '';
    time.classList.remove('bord');
    timer.classList.remove('bord');
    timer.classList.remove('colour');
    clearInterval(globalInterval);

}
function changeImageA() {
    ButLA.src = 'images/l1.png';
    globalInterval = setInterval(() => {
        sec += 0.1;
    }, 100);

    lampSec.classList.remove('dispNone');
    startCL();
    buttonLampU.onclick = changeImage;
}


}

let mouseWasClicked =0;
var tt;

//-------------------------------------------------------------------------мышь--------------

function mouseLev1(){
  ButLAPicl2.src = 'images/l2.png';
    ButLPicl2.src = 'images/l2.png';
    ButLAPic2l2.src = 'images/l2.png';
    ButLPic2l2.src = 'images/l2.png';
    timerl2.innerHTML = '';
    timel2.innerHTML = '';
    timer2l2.innerHTML = '';
    time2l2.innerHTML = '';
    timel2.classList.remove('bord');
    timerl2.classList.remove('bord');
    timerl2.classList.remove('colour');
    time2l2.classList.remove('bord');
    timer2l2.classList.remove('bord');
    timer2l2.classList.remove('colour');
    clearInterval(globalInterval);
    //clearInterval(inte);
container2.classList.add('dispNone');
nextGame2.classList.add('dispNone');
mouseCont1.classList.remove('dispNone');
nextGameL2.classList.add('dispNone');
lampCont2.classList.add('dispNone');
text.innerHTML = "После нажатия на кнопку старт начнется отсчет времени, за которое нужно пройти уровень. Если время закончилось - вы проиграли. Для передвижения мыши нужно на нее нажать и перемещать ее с курсором."
var maze = document.getElementById("canv").getContext("2d");


maze.canvas.width=700;
maze.canvas.height=700;

let timerMouse = document.getElementById("timerMouse");
timerMouse.classList.remove('dispNone');
timerMouse.innerHTML="00:00";
drawGround();
function drawGround(){
    var blockWidth = maze.canvas.width/blocks[0].length;
    var blockHeight = maze.canvas.height/blocks.length;
    maze.fillStyle = "rgb(175, 207, 205)";
    maze.fillRect(0,0,maze.canvas.width,maze.canvas.height);
    for (let i=0; i<blocks.length;i++){
        for(let j = 0; j<blocks[0].length;j++){
            if(blocks[i][j]!==0){
                maze.fillStyle="rgb(205, 237, 235)";
                maze.fillRect(j*blockWidth,i*blockHeight,blockWidth,blockHeight);
            }
        }
    }
}

buttonStart.onclick=startC;
let checkMouse=0;
var secEM=-1;
//-------------------таймер---------------------
function startC(){
 // secM=8;
  mouse.onmousedown = mouseMove;

  // restart.onclick = restartMouse1;
  buttonStart.onclick=undefined;
oneSec();
function sub(){
  secM--;
}
function oneSec(){
  sub();
  if ((secM>=0)&&(checkMouse==0)){
  timerMouse.innerHTML="00:0"+secM;
  }
  else if (checkMouse==1){
    timerMouse.innerHTML="00:0"+secEM;
  }
  else {
    timerMouse.innerHTML="00:00";
  }
  if(secM>0){timerM()};
  //clearTimeout(tt);
}
function timerM(){
  tt =setTimeout(oneSec,1000)
}
}

function restartMouse1(){
  clearTimeout(tt);
  mouseWasClicked=0;
  mouse.style.left=1000+'px';
  mouse.style.top=580+'px';
  checkMouse=0;
  mouse.src='images/m1.png';
  if (n==2){
  secM=10;}
  else {secM=8;}
  timerMouse.innerHTML="00:0"+(secM-1);
  mouse.onmousedown = undefined;
  mouse.onmouseup=undefined;
  buttonStart.onclick=startC;

}

function mouseMove(event) { 

  mouseWasClicked=1;
  //let scoreMouse=0;
  checkMouse = 0;
    mouse.style.position = 'absolute';
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
    var ots = 400;
    if (mouseWasClicked==1){
    if (levm==2){
    if ((checkMouse==0)&&(secM>0)&&(checkMouse==0)&&((pageY<650)&&((pageY>110)&&(pageY<600)&&
    (pageX>30+ots)&&(pageX<700+ots)&&(pageY <180 && (pageX<400+ots))||((pageX>300+ots)&&
    (pageX<350+ots)&&(pageY>400))||(pageY<530)&&(pageY>140)&&(pageX<550+ots)&&(pageX>450+ots)||
    (pageY<280)&&(pageY>40)&&(pageX<550+ots)&&(pageX>250+ots)||(pageY>600)&&(pageX>300+ots)))){
    mouse.style.left = pageX - mouse.offsetWidth / 2 + 'px';
      mouse.style.top = pageY - mouse.offsetHeight / 2 + 'px';}
    }

    if (levm==1){
      if ((checkMouse==0)&&(secM>0)&&(checkMouse==0)&&((pageY<650)&&((pageY>110)&&(pageY<600)&&(pageX>30+ots)&&(pageX<700+ots)&&(pageY <180 && (pageX<400+ots))||((pageX>300+ots)&&(pageX<350+ots))||(pageY>600)&&(pageX>300+ots))))
      { mouse.style.left = pageX - mouse.offsetWidth / 2 + 'px';
      mouse.style.top = pageY - mouse.offsetHeight / 2 + 'px';}
    }
  
    if ((secM>0)&&(pageX>ots+50)&&(pageX<80+ots)&&(pageY>50)&&(pageY<250))
    {
      checkMouse=1;
      mouse.src='images/m3.png';
      secEM=secM;
      if (levm==1){mouse1=1;
        if (openedLvls<2){
        openedLvls=2; }
        totalScoresLev1=scoreLamp+scoreFrog1+mouse1;
      insertIntoRating();}
      else if (levm==2) {
        openedLvls=3;
        mouse2=3; 
        totalScoresLev2=scoresLamp2+scoreFrog2+mouse2;
      insertIntoRating();}

      scores.innerHTML='баллы: '+(Math.round(totalScoresLev1+totalScoresLev2+totalScoresLev3)*100/100);
      insertIntoRating();

      mouse.onmouseup=undefined;
      mouse.onmousedown=undefined;
      restart.onclick = restartMouse1;
    }
    else if ((secM==0)&&(checkMouse==0)&&(levm==1)){
       mouse.src='images/m4.png';
       mouse.onmouseup=undefined;
       mouse.onmousedown=undefined;
       restart.onclick = restartMouse1;
     }
    
    }
  }


    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);

    mouse.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      mouseWasClicked=0;
      mouse.onmouseup = null;
    };
    if ((secM==0)&&(checkMouse==0)){
      mouse.src='images/m4.png';
      mouse.onmouseup=undefined;
      mouse.onmousedown=undefined;
     //  mouse.style.top = 80+'px';
     //  mouse.style.left = 350+'px';
      restart.onclick = restartMouse1;
    }
    

  
  };

  mouse.ondragstart = function() {
    return false;
  };
  if ((secM==0)&&(checkMouse==0)){
    mouse.src='images/m4.png';
    mouse.onmousedown=undefined;
    mouse.onmousedown=undefined;
    mouse.style.top = 80+'px';
    mouse.style.left = 350+'px';
    restart.onclick = restartMouse1;
  }
  
  
}

function funcStartMouse1() {
  sec = 0;
  setTimeout(changeImageA, startTime * 1000);
}


// ----------------------------------------------------рейтинг------------------------------------
let a=1;
let names = new Array(localStorage.length);

for (let i= 0; i<names.length;i++){
  names[i] = new Array(2);
}

for (let i=0; i<localStorage.length; i++){
  names[i][0] = localStorage.key(i);
  names[i][1] = parseFloat(localStorage.getItem(localStorage.key(i)));
}
names.sort((function(index){
  return function(a,b){
    return (a[index]===b[index]?0:(a[index]<b[index]?-1:1));
  };
})(1));
if (localStorage.length<=10){
for (let i=localStorage.length-1; i>=0;i--){
  listRat.innerHTML+=`${localStorage.length-i}.${names[i][0]} : ${names[i][1]}<br/>`
}
}
else{
  for (let i=10; i>0;i--){
    listRat.innerHTML+=`${11-i}.${names[localStorage.length-a][0]} : ${names[localStorage.length-a][1]}<br/>`
    a++;
  }
}

rating.onclick=showRating;

function showRating(){
  startCont.classList.add('dispNone');
  listRat.classList.remove('dispNone');
  backRating.classList.remove('dispNone');
  backRating.onclick = hideRating;
}

//---------------------------------------e,hfnm FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFKJGVNRAANBANV
function hideRating(){
  startCont.classList.remove('dispNone');
  listRat.classList.add('dispNone');
  backRating.classList.add('dispNone')
}
function deleteFrog(){
  container1.classList.add('dispNone');
  buttonComplete.classList.add('dispNone');
}


//----------------------------------------на главную--------------------------------------------
function returnMain(){
  mouseWasClicked=0;
  mouse.style.left=1000+'px';
  mouse.style.top=580+'px';
  checkMouse=0;
  mouse.src='images/m1.png';
  secM=8;
  timerMouse.innerHTML="00:07";
  mouse.onmousedown = undefined;
  mouse.onmouseup=undefined;
  keys.classList.add('dispNone');
  scores.classList.add('dispNone');
  container1.classList.add('dispNone');
  buttonComplete.classList.add('dispNone');
  player.classList.add('dispNone');
  startCont.classList.remove('dispNone');
  nameG.classList.remove('dispNone');
  aut.classList.remove('dispNone');
  inpName.classList.remove('dispNone');
  lampCont1.classList.add('dispNone');
  mouseCont1.classList.add('dispNone');
  timerMouse.classList.add('dispNone');
  lampCont2.classList.add('dispNone');
  nextGame2.classList.add('dispNone');
  nextGameL2.classList.add('dispNone');

}
function startCL(){//......................................................таймер лампы
  secE=4;
  oneSec();
  function sub(){
    secE-=1;
  }
  function oneSec(){
    sub();
    if (secE<=0){
    lampSec.classList.add('dispNone');
    }
    {
      lampSec.innerHTML=secE;
    }
    if(secE>0){timerM()};
  }
  function timerM(){
    setTimeout(oneSec,1000)
  }
  
  
  }

  function insertIntoRating(){
    scoreTotal = (Math.round((totalScoresLev1+totalScoresLev2+totalScoresLev3)*100)/100);
    let curScore = localStorage.getItem(inpName.value);
    if (curScore == null){localStorage.setItem(inpName.value, scoreTotal);}
    else {
      if (curScore<scoreTotal){localStorage.setItem(inpName.value, scoreTotal);}
    }
  }