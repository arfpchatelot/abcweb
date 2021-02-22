
function change() {
    var macolor = '#' + document.querySelector("#txtrouge").value + document.querySelector("#txtvert").value + document.querySelector("#txtbleu").value;
    /*=macolor;*/
    return macolor;
}

var txtR = document.querySelector('#txtrouge');

txtR.addEventListener("blur", function () {

    console.log=controleHexa(document.querySelector("#txtrouge").value );
    document.querySelector("body").style.backgroundColor = change();
}
);


var txtV = document.querySelector('#txtvert');
txtV.addEventListener("blur", function () {

    document.querySelector("body").style.backgroundColor = change();
}
);
var txtB = document.querySelector('#txtbleu');
txtB.addEventListener("blur", function () {

    document.querySelector("body").style.backgroundColor = change();
}
);

function controleHexa ( saisie )
{
 let maregex= /^[0-9]{2,2}$/;
 let test =maregex.test(saisie);
 alert(test);
 return test;
 
}




