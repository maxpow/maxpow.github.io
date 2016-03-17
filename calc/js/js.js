var flag1=true;
var flag2=0;
var flag3;
var flag4;
var flag5=true;

var getNumber0,getNumber1;
var display1=document.querySelector('#display');
var left1=document.querySelector('#left');
left1.addEventListener('click', function(e) {
    //e.stopPropagation();
    getNumber1=e.target.innerHTML;
    //alert(e.target.innerHTML); alert(e.currentTarget.innerHTML);
    if(e.target.innerHTML==e.currentTarget.innerHTML)return;
    getNumber0=document.querySelector('#display').innerHTML;
    if(!flag5){
        firstNumber = undefined;
        secondNumber = undefined;
    }
    if(flag1){
        display1.innerHTML=getNumber1;
        flag1=false;
        flag4=true;
    }
    else {
        display1.innerHTML=getNumber0+getNumber1;
        flag4=true;
    }

});


var firstNumber,secondNumber;

var minus1=document.querySelector('#minus');
minus1.addEventListener( "click" , function() {
    flag5=true;
    calc();
    flag3='minus';
});

var plus1=document.querySelector('#plus');
plus1.addEventListener( "click" , function() {
    flag5=true;
    calc();
    flag3='plus';
});
var multi1=document.querySelector('#multi');
multi1.addEventListener( "click" , function() {
    flag5=true;
    calc();
    flag3='multi';
});
var devi1=document.querySelector('#devi');
devi1.addEventListener( "click" , function() {
    flag5=true;
    calc();
    flag3='devi';
});
var eq1=document.querySelector('#eq');
flag4=true;
eq1.addEventListener( "click" , function() {
    calc();
    flag5=false;
});

function calc(){
    flag1=true;
    if(firstNumber) {
        if (flag4) {
            secondNumber = document.querySelector('#display').innerHTML;
            //flag3='plus';
            flag2++;
        }
    }
    else firstNumber=document.querySelector('#display').innerHTML;
    if(flag2>=1) {
        if(flag3=='plus') {display1.innerHTML = (+firstNumber) + (+secondNumber);}
        if(flag3=='minus') {display1.innerHTML = (+firstNumber) - (+secondNumber);}
        if(flag3=='multi') {display1.innerHTML = (+firstNumber)*(+secondNumber);}
        if(flag3=='devi') {display1.innerHTML = (+firstNumber)/(+secondNumber);}
        firstNumber = display1.innerHTML;
        secondNumber = undefined;
        flag4=false;
        flag2=0;
    }
}
