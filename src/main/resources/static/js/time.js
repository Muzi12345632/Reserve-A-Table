// Create a timer function that updates the timer element every second.
function timer() {
    var date = new Date();
    var time =  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("timer").innerHTML = time;
}

// Start the timer.
setInterval(timer, 1000);

//function for button

$(document).ready(function() {
  $('.rating').each(function() {
    var rating = $(this).find('input[name="rating"]').val();

    $(this).find('span').each(function() {
      var dataRating = $(this).data('rating');

      if (dataRating <= rating) {
        $(this).addClass('checked');
      }
    });
  });

  $('.rating span').click(function() {
    var rating = $(this).data('rating');

    $(this).siblings('input[name="rating"]').val(rating);

    $(this).siblings('span').removeClass('checked');
    for (var i = 0; i < rating; i++) {
      $(this).siblings('span').eq(i).addClass('checked');
    }
  });

  $('.rating-clear').click(function() {
    $(this).parent().find('input[name="rating"]').val(0);

    $(this).parent().find('span').removeClass('checked');
  });
});
