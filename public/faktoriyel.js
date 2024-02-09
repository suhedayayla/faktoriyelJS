/**
 * 
 */
const bilgiSatiri="Faktoriyel hesabı burada gösterilir.";

 function faktoriyelHesapla(){
	var deger=+document.getElementById("deger").value;
	var faktoriyel = 0;
	var degerSakla=deger;
	if (deger>=0){
	if ((deger== 0) ||(deger==1))
		faktoriyel=1;
	else if (deger==2)	
		faktoriyel=2;
	else {
		faktoriyel=deger;
		
	while (deger>2){
		faktoriyel=faktoriyel*(deger-1);
		deger=deger-1;
			}
		}
	    document.getElementById("p-1").innerHTML=faktoriyel;		 

	}
	else
		alert("Lütfen pozitif tam sayı giriniz.")
 }
  function sayfaYukle(){
	 document.getElementById("p-1").innerHTML=bilgiSatiri;
 }
 function temizle(){
	 document.getElementById("deger").value="";
	
	 sayfaYukle();
 }