function fun1(){
    var math=parseInt(document.getElementById("M1").value);
    var phy=parseInt(document.getElementById("M2").value);
    var pop=parseInt(document.getElementById("M3").value);
    var civil=parseInt(document.getElementById("M4").value);
    var web=parseInt(document.getElementById("M5").value);
    var eng=parseInt(document.getElementById("M6").value);
    var ico=parseInt(document.getElementById("M7").value);
    var idt=parseInt(document.getElementById("M8").value);

    var m1=4*fun(math);
    var m2=4*fun(phy);
    var m3=3*fun(pop);
    var m4=3*fun(civil);
    var m5=3*fun(web);
    var m6=1*fun(eng);
    var m7=1*fun(ico);
    var m8=1*fun(idt);

    var total= m1+m2+m3+m4+m5+m6+m7+m8;

    var sgpa= total/20;
    document.getElementById("result").innerHTML=sgpa;
}
function fun(a){
    if(a>=90)
    return 10;
    else if(a>=80 && a<90)
    return 9;
    else if(a>=70 && a<80)
    return 8;
    else if(a>=60 && a<70)
    return 7;
    else if(a>=50 && a<60)
    return 6;
    else if(a>=45 && a<50)
    return 5;
    else if(a>=40 && a<45)
    return 4;
}
function fun2(){
    var sem1=document.getElementById("S1").value;
    var sem2=document.getElementById("S2").value;
    var tot = parseFloat(sem1) + parseFloat(sem2);

    var cgpa= tot/2;
    document.getElementById("result").innerHTML=cgpa;
}