function fun1(){
    var math=document.getElementById("M1").value;
    var phy=document.getElementById("M2").value;
    var pop=document.getElementById("M3").value;
    var civil=document.getElementById("M4").value;
    var web=document.getElementById("M5").value;
    var eng=document.getElementById("M6").value;
    var ico=document.getElementById("M7").value;
    var idt=document.getElementById("M8").value;

    var total= 4*parseInt(math) + 4*parseInt(phy) + 3*parseInt(pop) + 3*parseInt(civil) + 3*parseInt(web) +parseInt(eng) +parseInt(ico) +parseInt(idt) ;

    var sgpa= total/20;
    document.getElementById("result").innerHTML=sgpa;
}