function affichejour() {
    for (let i = 1; i <= 31; i++) 
    {

        let uneoption = document.createElement("option");

        uneoption.text = "jour" + i;
        uneoption.setAttribute("value", i);
        document.querySelector("#jour").appendChild(uneoption);

    }

}

affichejour();
var tabmois=["janvier", "fevrier", "mars","avril", "mai", "juin", "juillet", "août","septembre", "octobre","novembre", "décembre"] ;  
function affichermois(tab)
{
for( let i=0; i<tab.length; i++ )
{
let uneoption= document.createElement("option");

uneoption.text=tab[i];
uneoption.value=i+1;
document.querySelector("#mois").appendChild(uneoption);

}

}
affichermois(tabmois);

function afficheannee()
{ 
    let datejour=new Date();
    let annee_en_cours=datejour.getFullYear();
    let annee_maj=datejour.getFullYear()-18;
    let annee_min=datejour.getFullYear()-77;

    for (let index = annee_min ; index <=annee_maj ; index++) {

        var uneoption=document.createElement("option");
        uneoption.textContent=index;
        uneoption.setAttribute("value",index);
        document.querySelector("#annee").append(uneoption);
        
    }
}
afficheannee();

// function valNum( machaine )
// {
   
//     let nb=0;
//     machaine1=machaine.toUpperCase();
//     for(let i=0; i<machaine1.length;i++)
//     {
//     let maval=machaine1.charCodeAt(i)-64;
//         console.log(maval);
//         nb+= maval;
//     }
//     return nb;

// }
// document.querySelector("#pseudo").value=valNum("abc");

function valNum(maChaine)
{
let somme=0;
maChaine=maChaine.toUpperCase();
for (let i = 0; i < maChaine.length; i++) {

let temp=maChaine.charCodeAt(i)-64;
somme+=temp;    
}
return somme;
}
console.log(valNum("ABC"));
let temp= document.querySelector("#nomUtilisateur").value;





function signeAstral(nummois)
{
    var signe =new Array("Capricorne","Verseau","Poisson","Belier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire");
 
    return signe[nummois-1];

}  

function calculerPseudo() 
{
    let num=Number(valNum(document.querySelector("#nomUtilisateur").value))+ Number(valNum(document.querySelector("#prenomUtilisateur").value));

    let signezodiac= signeAstral(document.querySelector("#mois").value);
    return signezodiac+num;
} 

function formOK()
{
 if( document.querySelector("#nomUtilisateur").value!="" && document.querySelector("#prenomUtilisateur").value!="" && 
 document.querySelector("#mois").value!=0 && document.querySelector("#jour").value!=0 && document.querySelector("#annee").value!=0 )
 {
 return true;

 }
 else
 {

    return false;
 }


}




document.querySelector("#prenomUtilisateur").addEventListener("blur", function() 
{     
    if(formOK()==true)
    {

    document.querySelector("#pseudo").value=calculerPseudo();
    document.querySelector("#valider").disabled=false;
        }
        else {

            alert("Veuillez remplir les zone obligatoire!...");
        }


} );

document.querySelector("#nomUtilisateur").addEventListener("blur", function() 
{     
    if(formOK()==true)
    {

    document.querySelector("#pseudo").value=calculerPseudo();
    document.querySelector("#valider").disabled=false;
        }
        else {

            alert("Veuillez remplir les zones obligatoires!...");
        }


} );
document.querySelector("#jour").addEventListener("change",function(){
    if(formOK()==true)
    {

    document.querySelector("#pseudo").value=calculerPseudo();
    document.querySelector("#valider").disabled=false;
        }
        else {

            alert("Veuillez remplir les zones obligatoires!...");
        }

}

);

document.querySelector("#mois").addEventListener("change",function(){
    if(formOK()==true)
    {

    document.querySelector("#pseudo").value=calculerPseudo();
    document.querySelector("#valider").disabled=false;
        }
        else {

            alert("Veuillez remplir les zones obligatoires!...");
        }

}

);

document.querySelector("#annee").addEventListener("change",function(){
    if(formOK()==true)
    {

    document.querySelector("#pseudo").value=calculerPseudo();
    document.querySelector("#valider").disabled=false;
        }
        else {

            alert("Veuillez remplir les zones obligatoires!...");
        }

}

);

function newCookie(cle, valeur)
{
  var datejour=new Date();
  var date_exp= new Date(datejour.getFullYear(),datejour.getMonth(),datejour.getDate(),datejour.getHours()+2,datejour.getMinutes(), datejour.getSeconds());

  /*console.log(date_exp.toGMTString());*/
    
  document.cookie = cle + "=" + valeur + ";expires=" + date_exp.toGMTString()+"; SameSite=lax";
} 


function  inscription()
{
newCookie("nomUtilisateur", document.querySelector("#nomUtilisateur").value);
newCookie("prenomUtilisateur", document.querySelector("#prenomUtilisateur").value);
let datenaissance=new Date(document.getElementById("annee").value,document.getElementById("mois").value, document.getElementById("jour").value);
newCookie("date_Naissance",datenaissance);

alert("test");

document.querySelector("#form1").submit();

}
document.querySelector("#valider").addEventListener("click",inscription);


;

