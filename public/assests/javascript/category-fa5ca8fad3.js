function handler(e){for(var t=e.toUpperCase(),a=document.getElementById("uldiv").getElementsByTagName("li"),n=0;n<a.length;n++){var r=a[n].getElementsByTagName("h2")[1];(r.textContent||r.innerText).toUpperCase().indexOf(t)>-1?a[n].style.display="":a[n].style.display="none"}}$(".rmove_arror").click((function(){var e=$("#Category_items").innerWidth();e-2*e+parseInt($("#Category_items").css("marginLeft"))>-1613&&$("#Category_items").animate({marginLeft:"+=-110px"},"fast")})),$(".lmove_arror").click((function(){parseInt($("#Category_items").css("marginLeft"))<-10&&$("#Category_items").animate({marginLeft:"+=100px"},"fast")}));