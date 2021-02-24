function couleurchange() {
    let chainecouleur = "#" + document.querySelector("#txtrouge").value + document.querySelector("#txtvert").value + document.querySelector("#txtbleu").value;
    return chainecouleur;

}

function controleHexa(chainehexa) {
    chainehexa = chainehexa.toUpperCase();
    var maregex = /^[A-F0-9]{2}$/;
    let boolres = maregex.test(chainehexa);
    console.log(boolres);
    return boolres;
}

var objtxtrouge = document.querySelector("#txtrouge");

objtxtrouge.addEventListener("blur", function () {

    if (controleHexa(this.value) == false) {
        this.value = "";
        this.style.backgroundColor = "#880000";
        this.style.color = "#FFFFFF"
        this.focus();

        alert("veuiller saisir un chiffre entre 0 et 9, ou une lettre de A à F");
    }
    else {
        this.style.backgroundColor = "#ffffff";
        this.style.color = '#000000';
        document.body.style.backgroundColor = couleurchange();
    }
});






//-----------------------
var objtxtvert = document.querySelector("#txtvert");

objtxtvert.addEventListener("blur", function () {

    if (controleHexa(this.value) == false) {
        this.value = "";
        this.style.backgroundColor = "#880000";
        this.style.color = "#FFFFFF";
        this.focus();

        alert("veuiller saisir un chiffre entre 0 et 9, ou une lettre de A à F");
    }
    else {
        this.style.backgroundColor = "#ffffff";
        this.style.color = '#000000';
        document.body.style.backgroundColor = couleurchange();

    };
});

///------------------
var objtxtbleu = document.querySelector("#txtbleu");

objtxtbleu.addEventListener("blur", function () {

    if (controleHexa(this.value) == false) {
        this.value = "";
        this.style.backgroundColor = "#880000";
        this.style.color = "#FFFFFF";
        this.focus();

        alert("veuiller saisir un chiffre entre 0 et 9, ou une lettre de A à F");
    }
    else {
        this.style.backgroundColor = "#ffffff";
        this.style.color = '#000000';
        document.body.style.backgroundColor = couleurchange();
    };
});
/*
var objbtnrouge=document.querySelector("#btnrouge");
objbtnrouge.addEventListener("click", 
function()
{
document.querySelector("#txtrouge").value='FF';

document.querySelector("#txtvert").value='00';
document.querySelector("#txtbleu").value='00';
document.body.style.background=couleurchange();
});
*/

 testbtn=document.querySelectorAll('input[type=button]');
for (var item of testbtn){
item.addEventListener("click",
function () { switch (this.value) {
        case "Rouge":
            document.querySelector("#txtrouge").value='FF';

document.querySelector("#txtvert").value='00';
document.querySelector("#txtbleu").value='00';
document.body.style.background=couleurchange();
        break;
        case "Vert":
document.querySelector("#txtrouge").value='00';
document.querySelector("#txtvert").value='FF';
document.querySelector("#txtbleu").value='00';
document.body.style.background=couleurchange();
        break;
            
        case "Bleu":
document.querySelector("#txtrouge").value='00';
document.querySelector("#txtvert").value='00';
document.querySelector("#txtbleu").value='FF';
document.body.style.background=couleurchange();
                
        break;}
    
    ;});

} 


/*
var objbtnvert=document.querySelector("#btnvert");
objbtnvert.addEventListener("click", 
function()
{
document.querySelector("#txtrouge").value='00';

document.querySelector("#txtvert").value='FF';
document.querySelector("#txtbleu").value='00';
document.body.style.background=couleurchange();
});
var objbtnbleu=document.querySelector("#btnbleu");
objbtnbleu.addEventListener("click", 
function()
{
document.querySelector("#txtrouge").value='00';

document.querySelector("#txtvert").value='00';
document.querySelector("#txtbleu").value='FF';
document.body.style.background=couleurchange();
});*/