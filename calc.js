function squareCheck()
{
    var length = "<p>Length of side : <input type=\"number\" name=\"side\" onkeypress=\"calcSquare(this.value)\" placeholder=0 size=\"15\"/></p>";
    if (document.getElementById("square").checked)
    {
        document.getElementById('parameters').innerHTML = length;
    }
    else
    {
        document.getElementById('parameters').innerHTML = "";
    }
}

function calcSquare(value){
    if (document.getElementById("milli").checked)
        var area = value*value*0.000001;
    else if (document.getElementById("centi").checked)
        var area = value*value*0.0001;
    else 
        var area = value*value;  
    document.getElementById("result").value = area;
}

function rectCheck()
{
    var length = "<p class = \"inline\">Length of Rectangle : <input type=\"number\" id=\"length\" name=\"length\" placeholder=0 value=\"length\" onkeypress=\"calcRect2(this.value)\" size=\"15\" required /></p>";
    var breadth = "<p class = \"inline\">Breadth of Rectangle : <input type=\"number\" id=\"breadth\" name=\"breadth\" placeholder=0 value=\"breadth\" onkeypress=\"calcRect1(this.value)\" size=\"15\" required />";       
    if (document.getElementById("rectangle").checked)
        document.getElementById('parameters').innerHTML = length+breadth;
    else
        document.getElementById('parameters').innerHTML = "";
}

function calcRect1(b)
{
    var l = document.getElementById("length").value;
    if (document.getElementById("milli").checked)
        var area = l*b*0.000001;
    else if (document.getElementById("centi").checked)
        var area = l*b*0.0001;
    else 
        var area = l*b;  
    document.getElementById("result").value = area;

}

function calcRect2(l)
{
    var b = document.getElementById("breadth").value;
    if (document.getElementById("milli").checked)
        var area = l*b*0.000001;
    else if (document.getElementById("centi").checked)
        var area = l*b*0.0001;
    else 
        var area = l*b;  
    document.getElementById("result").value = area;

}

function triCheck()
{
    var b = "<p class = \"inline\">Base : <input type=\"number\" id=\"b\" name=\"b\" placeholder=0 onkeypress=\"calcTri1(this.value)\" size=\"15\" /></p>";
    var h = "<p class = \"inline\">Height : <input type=\"number\" id=\"h\" name=\"h\" placeholder=0 onkeypress=\"calcTri2(this.value)\"  size=\"15\" /></p>";
    if (document.getElementById("triangle").checked)
        document.getElementById('parameters').innerHTML = b+h;
    else
        document.getElementById('parameters').innerHTML = "";
}

function calcTri1(b)
{
    var h = document.getElementById("h").value;
    if (document.getElementById("milli").checked)
        var area = ((b*h)/2)*0.000001;
    else if (document.getElementById("centi").checked)
        var area = (b*h*0.0001)/2;
    else 
        var area = (b*h)/2;  
    document.getElementById("result").value = area;

}

function calcTri2(h)
{
    var b = document.getElementById("b").value;
    if (document.getElementById("milli").checked)
        var area = ((b*h)/2)*0.000001;
    else if (document.getElementById("centi").checked)
        var area = (b*h*0.0001)/2;
    else 
        var area = (b*h)/2;  
    document.getElementById("result").value = area;

}

function circleCheck()
{
    var radius = "<p>Radius of Circle : <input type=\"number\" name=\"radius\" placeholder=0 onkeypress=calcCircle(this.value) size=\"15\" /></p>";
    if (document.getElementById("circle").checked)
        document.getElementById('parameters').innerHTML = radius;
    else
        document.getElementById('parameters').innerHTML = "";
}

function calcCircle(r)
{
    if (document.getElementById("milli").checked)
        var area = Math.PI*r*r*0.000001;
    else if (document.getElementById("centi").checked)
        var area = Math.PI*r*r*0.0001;
    else 
        var area = Math.PI*r*r;  
    document.getElementById("result").value = area;
}