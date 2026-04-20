let soluong= document.getElementsByClassName("sl");
let dongia=document.getElementsByClassName("dg");
let tongthanhtoan=0;
let thanhtien=document.getElementsByClassName("tt");
for (let i=0; i<soluong.length; i++)
{
    thanhtien[i].innerHTML=soluong[i].innerHTML*dongia[i].innerHTML;
    tongthanhtoan += parseInt(thanhtien[i].innerHTML);
}
document.getElementById("tongtien").innerHTML=tongthanhtoan;