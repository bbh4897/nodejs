// destructing olmadan
const insan = {
    ad: "burcu",
    yas:26,
    cinsiyet:"bayan"
}

//const a = insan.ad;
//const b = insan.yas;
//const c = insan.cinsiyet;

//console.log(a, b, c);

// destructing ile

const {x,y,z} = insan;

console.log(x, y, z);


// diziler ile ornek

const dizi = [1, 2, 3];
const [a, b, c] = dizi;

console.log(a,b,c);