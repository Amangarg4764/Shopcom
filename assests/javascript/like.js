function like(id){
  $("#like"+id).toggleClass("active");
  let divs=$("#l"+id);
  divs.click(function(e){
    e.preventDefault();
    $.ajax({
      type:'post',
      url:$("#s"+id).prop('href')
    });
  });
}



