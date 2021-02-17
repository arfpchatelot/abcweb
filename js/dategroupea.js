

function affichedate()
{
chaine="";
var madate= new Date();
let datejour=madate.getDate();
let mois=madate.getMonth()+1;
let annee=madate.getFullYear();
if(datejour<10)
{
    chaine+="0"+datejour;

}
else 
{
    chaine+=datejour;
}
(mois<10)?chaine+="/0"+mois:chaine+="/"+mois;
chaine+="/"+annee;
return chaine;
}

let chainedepart= affichedate();

/*alert(chainedepart);*/
/*console.log(chainedepart);*/



var objetbouton= document.querySelector("#btndate");
objetbouton.addEventListener('click', function() { document.getElementById('madate').value=affichedate() ;});

