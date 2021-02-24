function affichejour()
{
    for(let i=1; i<=31; i++){

let uneoption=document.createElement("option");
 
uneoption.text="jour"+i;
uneoption.setAttribute("value",i);
document.querySelector("#jour").appendChild(uneoption);
   
}
 
}

affichejour();

