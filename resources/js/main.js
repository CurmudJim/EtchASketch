$(document).ready(function() {

  $("#parimeter").keyup(function(event){
      if(event.keyCode == 13){
          $("#startBtn").click();
      }
  });

  $('#startBtn').click(function() {



    var parimeter = $('input').val();

    if (parimeter==null || parimeter<2 || parimeter>40){
      alert("Enter a number greater than 1 and less than 41.");
      return false;
    }else {

    $('.input-group').hide();
    $('.jumbotron').append('<button type="button" class="btn btn-danger">Reset</button>');
    $('.jumbotron').append('<div class="container"></div>');

    for (var i = 0; i < parimeter; i++) {
      $('.container').append('<div class="row"></div>');
    }

    for (var i = 0; i < parimeter; i++) {
      $('.row').append('<div class="cell"></div>');
    }

    var cellParimeter = 100 / parimeter;
    $('.cell').css("width", cellParimeter + '%');
    $('.row').css("height", cellParimeter + '%');

    $(".cell").hover(function() {
      $( this ).addClass('draw');
    });


    $('.btn-danger').click(function() {
      $('.btn-danger').hide("slow");
      $('.container').remove();
      $('.input-group').show("slow");

    });
}

  });





});
