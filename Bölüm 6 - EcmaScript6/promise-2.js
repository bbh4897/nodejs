const x = (sayi) =>{
    return new Promise((resolve, reject) =>{
        if(sayi ==4){
            resolve("Her şey yolunda");
        }
        else{
            reject("Sorun var!");
        }
    })
};

x(4)
.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
});