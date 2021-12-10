$(document).ready(function(){
    $(".btnToggle").click(function(e){
        e.stopPropagation();
        e.preventDefault();
        const current = $(e.target).parents().eq(0).next()
        current.fadeToggle()
    });
  });

  $(document).ready(function(){
    $(".btnToggle").click(function(e){
        e.stopPropagation();
        e.preventDefault();
        const current = $(e.target).parents().eq(1).next()
        current.fadeToggle()
    });
  });