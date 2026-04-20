function inBangCC() {
    let myForm = document.forms["frmInCC"];
    let num = myForm.elements[0].value/.innerHTML;
    alert(num);
    let str = "<table border='1'><tr><th>số</th><th>kết quả</th></tr>";
    for (let i = 1; i <= 10; i++) {
        str += "<tr><td>" + num + "</td><td>" + (num * i) + "</td></tr>";
    }
    str += "</table>";
    document.getElementById("result").innerHTML = str;
}
