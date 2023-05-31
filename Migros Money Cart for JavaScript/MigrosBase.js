class MigrosBase{

    indirimOrani = 50;



    constructor(ad,soyad,kartVarmi,urunler){
        this.ad=ad;
        this.soyad=soyad;
        this.kartVarmi=kartVarmi;
        this.urunler=urunler;
    }

    hesapla(){
        let odenecekTutar =0;

        if(this.urunleriKontrolEt(this.urunler)){

            if(this.kartVarmi){
                //Money Kartı Vardır.
                this.urunler.forEach((urun)=>{
                    odenecekTutar += (urun.fiyat*(100-this.indirimOrani)/100);
                })

            }else{
                this.urunler.forEach((urun)=>{
                    odenecekTutar += urun.fiyat;
                })
            }

        }else{
            alert("En Az bir adet ürün almalısınız.")
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler){
        if(urunler!=null && urunler.length>0){
            return true;
        }
        return false;
    }
}