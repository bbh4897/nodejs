var sayi = 0;
var x = setInterval(function(){
   
    
    if(sayi==5){
        clearInterval(x);
    }
    else{
        console.log(sayi);
        sayi++;
    }
    
},2000);