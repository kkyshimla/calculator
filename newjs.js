
let x=[];
function make()
{
  x.push("9");
}
function make2()
{
    x.push("8");
}
function make3()
{
    x.push("7");
}
function make4()
{
    x.push("6");
}
function make5()
{
    x.push("5");
}
function make6()
{
    x.push("4");
}
function make7()
{
    x.push("3");
}
function make8()
{
    x.push("2");
}
function make9()
{
    x.push("1");
}
function make11()
{
    x.push("0");
}
function make12()
{
    x.push("00");
}
function make13()
{
    x.push("."); 
     
}
function division()
{
    x.push("/");
}
function multiply()
{
    x.push("*");
}
function minus()
{
    x.push("-");
}
function plus()
{
    x.push("+");
}
function taker()
{
    let a=document.getElementById('a');
    a.addEventListener('click',make);
    let b=document.getElementById('b');
    a.addEventListener('click',make2);
    let c=document.getElementById('c');
    c.addEventListener('click',make3);
    let d=document.getElementById('d');
    d.addEventListener('click',make4);
    let e=document.getElementById('e');
    e.addEventListener('click',make5);
    let f=document.getElementById('f');
    f.addEventListener('click',make6);
    let g=document.getElementById('g');
    g.addEventListener('click',make7);
    let h=document.getElementById('h');
    h.addEventListener('click',make8);
    let i=document.getElementById('i');
    i.addEventListener('click',make9);
    let j=document.getElementById('j');
    j.addEventListener('click',make11);
    let k=document.getElementById('k');
    k.addEventListener('click',make12);
    let l=document.getElementById('l');
    l.addEventListener('click',make13);
    let t=document.getElementById('a1');
    t.addEventListener('click',division);
    let m=document.getElementById('a2');
    m.addEventListener('click',multiply);
    let s=document.getElementById('a3');
    s.addEventListener('click',minus);
    let p=document.getElementById('a4');
    p.addEventListener('click',plus);
    let q=document.getElementById('a5');
    q.addEventListener('click',make10);
    return x;
}
function num()
{   
    let x=taker();
    let y=x.join("");
    return y;
}
function dooperation()
{
    
    
    
    document.getElementById('result').innerHTML=str;


    
}

function fun()
{   x.pop();
    document.getElementById('result').innerHTML=x;
    
}
function rest()
{
    location.reload(true);


}
function make10()
{  let str=num();
    let result=eval(str);
    document.getElementById('result').innerHTML=str+" = "+result;
    
}


