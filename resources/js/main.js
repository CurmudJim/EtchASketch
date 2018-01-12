$(document).ready(function() {

  $("#size").keyup(function(event){
    if(event.keyCode == 13){
      $("#startBtn").click();
    }
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getRandomColor() {
    var color = `${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}`;
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


      const cells = document.querySelectorAll('.cell');
      function cellFill(cellColor) {
        cells.forEach((cell) => {
          var tint = .0;
          cell.addEventListener("mouseover", function(e) {
            e.target.style.background = `rgba(${cellColor},${tint+=.1})`
          })
        });
      }

      var cellColor = "0,0,0"
      
      $('.btn-dark').click(function() {
        cellColor = "0,0,0";
        return cellFill(cellColor);
      });

      $('.btn-light').click(function() {
        return cellFill(getRandomColor());
      });

      $('.btn-danger').click(function() {
        $('.btn-group').hide(0);
        $('.container').remove();
        $('.input-group').show('slow');

      });
    }

  });





});
