function like(e){$("#like"+e).toggleClass("active"),$("#l"+e).click((function(l){l.preventDefault(),$.ajax({type:"post",url:$("#s"+e).prop("href")})}))}