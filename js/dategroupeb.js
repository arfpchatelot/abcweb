function affichedate()
{
 var madate= new Date();
 let annee=madate.getFullYear();
 let mois= madate.getMonth()+1;
 let jourmois=madate.getDate();
let chainedate='';
 if(madate<10) 
 {
chainedate+="0"+jourmois;
 }
 else
 {
chainedate+=jourmois;

 } 
 (mois<10)?chainedate+='/0'+mois:chainedate+='/'+mois; 
 chainedate+='/'+annee;

return chainedate;

}
let machaine= affichedate();
console.log(machaine);
//alert(affichedate());
