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


/*let machaine= affichedate();*/
/*console.log(machaine);*/

//alert(affichedate());
var objetboutondate= document.querySelector('#btndate');
objetboutondate.addEventListener('click',function(){ document.getElementById('madate').value=affichedate();} );

function afficheheure()
{
    var chaineheure='';
    var monheure=new Date();
    let heure=monheure.getHours();
    (heure<10)? chaineheure+='0'+heure:chaineheure+=heure;
    let min=monheure.getMinutes();
    (min<10)?chaineheure+=':0'+min:chaineheure+=':'+min;
    let sec=monheure.getSeconds();
    (sec<10)?chaineheure+=':0'+sec:chaineheure+=':'+sec;

    document.getElementById('monheure').value=chaineheure;
    setTimeout(function() {afficheheure();}, 1000);
}
var objetboutonheure=document.querySelector('#btnheure');
objetboutonheure.addEventListener('click',afficheheure);
