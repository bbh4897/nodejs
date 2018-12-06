var isim = "burcuccc";

try {
    if (isim != "burcu") {
        throw Error("Beklenmeyen isim");
    } 
    else {
        console.log(isim);
    }

} catch (err) {
    console.log(err);
}
