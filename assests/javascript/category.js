//console.log($("body").innerWidth()-(parseInt($("#Category_items").css('marginLeft'))));
$(".rmove_arror").click(function(){
    var ak=$("#Category_items").innerWidth();
    if((ak-(ak*2))+parseInt($("#Category_items").css('marginLeft'))>-1613){
    $("#Category_items").animate({marginLeft:'+=-110px'},"fast");}
});

$(".lmove_arror").click(function(){
    
    if(parseInt($("#Category_items").css('marginLeft'))<-10)
    {    
       $("#Category_items").animate({marginLeft:'+=100px'},"fast"); 
    }
    
});
function handler(input){
    var filtervalue=input.toUpperCase();
    var ul = document.getElementById("uldiv");
    var li=ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("h2")[1];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filtervalue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}