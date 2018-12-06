// nesne tanımlama 1

var insan = {};

insan.ad = "Burcu";
insan.yas = 26;

insan.yuru = function () {
    console.log(insan.ad + " Yürüyor");
}

console.log(insan.ad);
console.log(insan.yas);
console.log(insan.yuru());


// nesne tanımlama 2

var insan2 = {
    ad : "Ayşe",
    yas : 45,
    x : function () {
        console.log(insan2.ad + " Koşuyor");
    }
}

console.log(insan2.ad);
console.log(insan2.yas);
console.log(insan2.x());
