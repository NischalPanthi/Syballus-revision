card=document.getElementById("card");
card.onclick=newCard;
const hist=document.getElementById("history");
hist.onclick=redirect;
let button=document.getElementById("but");
button.onclick=add;
let submit=document.getElementById("sub");
submit.onclick= replace;
let delte=document.getElementById("del");
delte.onclick=delet; 
i=2;
j=0;
k=1;
mn="";

function add(){
    if(j==0){
    hell=document.createElement("tr");
    allo=document.getElementById("table");
    allo.appendChild(hell);
     col1=document.createElement("td");
     col2=document.createElement("td");
     col3=document.createElement("td");
    hell.appendChild(col1);
    hell.appendChild(col2);
    hell.appendChild(col3);
     subj=document.createElement("input");
     cod=document.createElement("input");
    subj.type=Text;
    cod.type=Text;
    col2.appendChild(subj);
    col3.appendChild(cod);
    col1.innerHTML= i;
    i++;
    j++;
    
}
}
function replace(){
    if(j==1){
        subjV=subj.value;
        codv=cod.value;
        col2.removeChild(subj);
        col3.removeChild(cod);
       col2.innerHTML=subjV;
       col3.innerHTML=codv;
        j--;
    
}
}

function delet(){
    allo.removeChild(allo.lastChild);
    i--;
    j=0;
    localStorage.clear();

}

function newCard(){
    k++;
    const hk=k;
    mn=mn+"1";
    const idd=mn;
    let i1=1;
    let j1=0;
    tab=document.createElement("table");
tab.id="table"+mn

bod=document.getElementById("body");
div=document.createElement("div");
sem=document.createElement("h1");
sem.innerHTML=k+ " Semester";
button1=document.createElement("button");
button1.innerHTML="Add";
button1.addEventListener("click",function(){
    if(j1==0){
        hell=document.createElement("tr");
        allo=document.getElementById("table"+idd);
        allo.appendChild(hell);
         col1=document.createElement("td");
         col2=document.createElement("td");
         col3=document.createElement("td");
        hell.appendChild(col1);
        hell.appendChild(col2);
        hell.appendChild(col3);
         subj=document.createElement("input");
         cod=document.createElement("input");
        subj.type=Text;
        cod.type=Text;
        col2.appendChild(subj);
        col3.appendChild(cod);
        col1.innerHTML= i1;
        i1++;
        j1++;
        
    } 
});
button2=document.createElement("button");
button2.innerHTML="Submit";
button2.addEventListener("click",function(){
    if(j1==1){
        subjV=subj.value;
        localStorage.setItem("textData"+idd+i1,"Added "+subjV +" in "+"semester "+hk);
       // window.location.href="display.html";
        codv=cod.value;
        col2.removeChild(subj);
        col3.removeChild(cod);
       col2.innerHTML=subjV;
       col3.innerHTML=codv;
        j1--;
    
}   
});
//button2.onclick=add;
button3=document.createElement("button");
button3.innerHTML="Delete";
button3.addEventListener("click",function(){
    if(i1>1){
    document.getElementById("table"+idd).removeChild(document.getElementById("table"+idd).lastChild);
    i1--;
    j1=0;
    }
})
//tab=document.createElement("table");
//tab.id="table"+mn
head_row=document.createElement("tr");
head1=document.createElement("th");
head1.innerHTML="S.No.";
head2=document.createElement("th");
head2.innerHTML="Subject";
head3=document.createElement("th");
head3.innerHTML="Code";

bod.appendChild(div);
div.appendChild(sem);
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
div.appendChild(tab);
tab.appendChild(head_row);
head_row.appendChild(head1);
head_row.appendChild(head2);
head_row.appendChild(head3);
}

function redirect(){
    window.location.href="display.html";
}