function play(){

   

    document.querySelector('#flag1').style.visibility="hidden";
    document.querySelector('#flag2').style.visibility="hidden";


    var dice1Value =Math.random();
    dice1Value*=6;
    dice1Value=Math.floor(dice1Value)+1;
    console.log(dice1Value);


    var dice2Value =Math.random();
    dice2Value*=6;
    dice2Value=Math.floor(dice2Value)+1;
    console.log(dice2Value);

    document.querySelector('.img1').src='dice'+dice1Value+'.png';
    document.querySelector('.img2').src='dice'+dice2Value+'.png';
    
    if (dice1Value>dice2Value){
        document.querySelector('#board').textContent="Player 1 WON";
        document.querySelector('#flag1').style.visibility="visible";
        
    }
    else if (dice1Value<dice2Value){
        document.querySelector('#board').textContent="Player 2 WON";
        document.querySelector('#flag2').style.visibility="visible";
        
    }
    else {
        document.querySelector('#board').textContent="It's a DRAW";
        
    }
    
}
