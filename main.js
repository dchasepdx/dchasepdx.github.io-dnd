$(document).ready(function() {
  $('select').on('change', function() {
    var pic = $(this).val();
    $('img').attr('src', pic);

  });
});
