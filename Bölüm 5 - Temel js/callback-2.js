// işlem sırası callback'siz =  2, 3, 1
//function bir(){
//    setTimeout(function(){
//        console.log("Bir");
//    },2000);
//}
//
//function iki(){
//    console.log("iki");
//}
//
//function uc(){
//    console.log("Üç");
//}
//
//bir();
//iki();
//uc();

// işlem sırası callback ile = 1, 2, 3  ( sıralı yazdırmak ıstersek)

function bir(callback){
    setTimeout(function(){
        console.log("Bir");
        callback(uc)
    },2000);
}

function iki(callback){
    console.log("İki");
    callback();
}

function uc(callback){
    console.log("uc");
}

bir(iki);




