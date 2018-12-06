const y = (sayi) =>{
    return new Promise((resolve, reject) =>{
        if(sayi ==1)
            resolve("Girilen değer doğru" + " " + sayi);
        else 
            reject("Hatalı veri");
    })
};

y(1)
.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
})