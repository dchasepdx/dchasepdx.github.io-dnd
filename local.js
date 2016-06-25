var keys = [];

for (var i = 0; i < localStorage.length; i++) {
  keys.push(localStorage.key(i));
};
var s =$('<select />')
s.addClass('saved-drop');

for (var val in keys) {
  $('<option />', {value: localStorage.key(val), text: keys[val]}).appendTo(s);
}
s.appendTo('#char-select');

$(document).ready(function () {
  var ls = $('.saved-drop').val()
  var save = localStorage.getItem(ls)
  $('.load-list').text(save);
  

});

$('.saved-drop').on('change', function() {
    var ls = $(this).val();
    var save = localStorage.getItem(ls)
    $('.load-list').text(save);
});
