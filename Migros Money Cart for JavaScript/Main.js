let message = 
`
Migrosa Hoşgeldiniz.
Migros Money Kartınız Var Mı ?
1 - Evet
2 - Hayır 
`;

const urunler = [
    {
        urunİsmi : "Süt",
        fiyat : 15
    },
    {
        urunİsmi: "Bebek Bezi",
        fiyat : 100
    },
    {
        urunİsmi: "Kusbasi",
        fiyat : 220
    }
]

let sonuc = confirm(message);
let odenecekTutar;

if(sonuc){
    //!Money kart vardır.
    let ad = prompt("Adınızı giriniz.");
    let soyad = prompt("Soyadınız giriniz.")

    const musteri = new Musteri(ad,soyad,sonuc,urunler);
    odenecekTutar = musteri.hesapla();

    alert(`
    Müşteri bilgileri : ${ad} ${soyad}
    Ödenecek Tutar : ${odenecekTutar}
    `);


}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla()
    alert (`Ödenecek Tutar : ${odenecekTutar}`);
}