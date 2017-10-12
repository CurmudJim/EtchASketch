$(document).ready(function() {

  $("#size").keyup(function(event){
      if(event.keyCode == 13){
          $("#startBtn").click();
      }
  });

  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  $('#startBtn').click(function() {



    var size = $('input').val();
    $('#size').val('')
    if (size=='') {
      size = 16
    }
    if (size<2 || size>64){
      alert("Enter a number greater than 1 and less than 65.");
      return false;
    }else {


    $('.input-group').hide();
    $('.jumbotron').append('<div class="btn-group" role="group" aria-label="Basic example">\
    <button type="button" class="btn btn-dark">Black</button>\
    <button type="button" class="btn btn-light">Color</button>\
    <button type="button" class="btn btn-danger">Reset</button></div>');
    $('.jumbotron').append('<div class="container"></div>');

    for (var i = 0; i < size; i++) {
      $('.container').append('<div class="row"></div>');
    }

    for (var i = 0; i < size; i++) {
      $('.row').append('<div class="cell"></div>');
    }

    var cellParimeter = 100 / size;
    $('.cell').css("width", cellParimeter + '%');
    $('.row').css("height", cellParimeter + '%');


    $('.btn-dark').click(function() {
      $(".cell").hover(function() {
        $(this).css("background-color" , '#0D0E0F');
      });
            });
      $('.btn-light').click(function() {
        $('.cell').hover(function() {
          $(this).css("background-color" , getRandomColor());
        });
      });


    $('.btn-danger').click(function() {
      $('.btn-group').hide(0);
      $('.container').remove();
      $('.input-group').show('slow');

    });
}

  });





});
