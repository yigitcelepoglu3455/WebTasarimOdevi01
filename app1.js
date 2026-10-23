let tutar = 45
let kargo = 7;
let toplam;

if (tutar > 50) {
    kargo = 0;
    toplam = tutar;
} else {
    kargo = 7;
    toplam = tutar + kargo;
}

   console.log("Alışveriş tutarı: " + tutar + " TL");
    console.log("Kargo ücreti: " + kargo + " TL");
    console.log("Toplam tutar: " + toplam + " TL");






let sıcaklık = 50

if (sıcaklık >= 100) {
        console.log("su gaz haldedir");
}
if (sıcaklık  > 0 && sıcaklık < 100){
    console.log("su sıvı haldedir");
}

if (sıcaklık  <=0){
    console.log("su katı haldedir");
}






let tutar1 = 900;

if(tutar1 >= 2000) {
    console.log("100 tl hediye puanı");
}
else if(tutar1 > 1000 && tutar1 <2000) {
     console.log("50 tl hediye puanı");
}
else if(tutar1 <= 1000) {
    console.log("10 tl hediye puanı");
}






let boy = 175

if( boy <170) {
    console.log("Boyunuz kısa");
}
else if(boy > 170 && sıcaklık < 180 ) {
    console.log("Boyunuz orta");
}
else if(boy >180) {
    console.log("Boyunuz uzun");
}






let ortalama=67

if(ortalama >85) {
    console.log("5")
}
if(ortalama >70 && ortalama < 85) {
    console.log("4");
}
if(ortalama >70 && ortalama < 85) {
    console.log("3");
}

if(ortalama >55 && ortalama < 70) {
    console.log("3");
}

if(ortalama >45 && ortalama < 55) {
    console.log("2");
}

if(ortalama >25 && ortalama < 45) {
    console.log("1");
}
if(ortalama < 25) {
    console.log("0");
}






let yas = 12


if (yas < 18) {
    console.log("Bilet ücretiniz: 15 TL"); 
} 
else if (yas >= 18 && yas < 65) {
    console.log("Bilet ücretiniz: 20 TL"); 
} 
else {
    console.log("Bilet ücretiniz: 10 TL"); 
}





let agirlik = 7
let birimFiyat = 0;


if (agirlik <= 2) {
    birimFiyat = 6; 
} 
else if (agirlik > 2 && agirlik <= 6) {
    birimFiyat = 5; 
} 
else if (agirlik > 6 && agirlik <= 10) {
    birimFiyat = 4; 
} 
else {
    birimFiyat = 3;
}


let toplamFiyat = agirlik * birimFiyat;
console.log("Kilogram fiyatı: " + birimFiyat + " TL");
console.log("Toplam taşıma ücreti: " + toplamFiyat + " TL");


//1 evet demek 0 hayır demek 
let almanca = 1
let ingilizce = 1
let ofisProgramlari =1


if ((almanca === "1" || ingilizce === "1") && ofisProgramlari === "0") {
    console.log("İşe başlayabilirsiniz");
} else {
    console.log("üzgünüz");
}








let harcama = 1000
let indirimliTutar = 0;


if (harcama > 0 && harcama <= 200) {

    let indirimMiktari = harcama * 0.10;
    indirimliTutar = harcama - indirimMiktari;
    console.log("İndirim oranı: %10");
    console.log("İndirimli alışveriş tutarı: " + indirimliTutar + " TL");
} 
else if (harcama > 200 && harcama <= 400) {
   
    let indirimMiktari = harcama * 0.15;
    indirimliTutar = harcama - indirimMiktari;
    console.log("İndirim oranı: %15");
    console.log("İndirimli alışveriş tutarı: " + indirimliTutar + " TL");
} 
else if (harcama > 400) {
   
    let indirimMiktari = harcama * 0.20;
    indirimliTutar = harcama - indirimMiktari;
    console.log("İndirim oranı: %20");
    console.log("İndirimli alışveriş tutarı: " + indirimliTutar + " TL");
} 
else {
    console.log("Geçerli bir alışveriş tutarı giriniz.");
}







