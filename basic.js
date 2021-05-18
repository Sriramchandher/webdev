function reveal()
{   alert("Hey!How is my wbepage!Click ok for more!");
    document.getElementById("para").innerHTML="Place your cursor over the next heading :)";
    
    var im=document.getElementById("image").src="lap2.jpg";
}
var name=document.getElementById("name").inputMode.italics;
function popup()
{
    if(confirm("Do you want to save it?")==true)
    {
        alert("Changes are saved");
    }
}
function change()
{
    var col=document.getElementById("head").style.color="blue";
}
function blow()
{
    var col=document.getElementById("head").style.color="white";
}
function box(){
    var box1 = document.getElementById("name");
    var box2 = document.getElementById("email");
 if (box1.value.length< 5 || box2.value.length< 5 ) {
   alert("Minimum of 5 characters is required");
    return false;
}
}