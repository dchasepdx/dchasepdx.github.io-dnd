$(document).ready(function() {
  $('select').on('change', function() {
    var pic = $(this).val();
    $('img').attr('src', pic);

  });
  $('select').on('change', function() {
    var classes = $(this).val();
    //alert(classes); bug testing
    switch(classes) {
      case "barbarian.png":
        $('form').addClass('hidden');
        $('.barbarian').removeClass('hidden');
        $('.barbarian').addClass('show');
        break;
      case "bard.png":
        $('form').addClass('hidden');
        $('.bard').removeClass('hidden');
        $('.bard').addClass('show');
        $('.bard').prependTo($('.choices'));
        break;
      case "cleric.png":
        $('form').addClass('hidden');
        $('.cleric').removeClass('hidden');
        $('.cleric').addClass('show');
        $('.cleric').prependTo($('.choices'));
        break;
      case "druid.png":
        $('form').addClass('hidden');
        $('.druid').removeClass('hidden');
        $('.druid').addClass('show');
        $('.druid').prependTo($('.choices'));
        break;
      case "fighter.png":
        $('form').addClass('hidden');
        $('.fighter').removeClass('hidden');
        $('.fighter').addClass('show');
        $('.fighter').prependTo($('.choices'));
        break;
      case "monk.png":
        $('form').addClass('hidden');
        $('.monk').removeClass('hidden');
        $('.monk').addClass('show');
        $('.monk').prependTo($('.choices'));
        break;
      case "paladin.png":
        $('form').addClass('hidden');
        $('.paladin').removeClass('hidden');
        $('.paladin').addClass('show');
        $('.paladin').prependTo($('.choices'));
        break;
      case "ranger.png":
        $('form').addClass('hidden');
        $('.ranger').removeClass('hidden');
        $('.ranger').addClass('show');
        $('.ranger').prependTo($('.choices'));
        break;
      case "rogue.png":
        $('form').addClass('hidden');
        $('.rogue').removeClass('hidden');
        $('.rogue').addClass('show');
        $('.rogue').prependTo($('.choices'));
        break;
      case "sorcerer.png":
        $('form').addClass('hidden');
        $('.sorcerer').removeClass('hidden');
        $('.sorcerer').addClass('show');
        $('.sorcerer').prependTo($('.choices'));
        break;
      case "warlock.png":
        $('form').addClass('hidden');
        $('.warlock').removeClass('hidden');
        $('.warlock').addClass('show');
        $('.warlock').prependTo($('.choices'));
        break;
      case "wizard.png":
        $('form').addClass('hidden');
        $('.wizard').removeClass('hidden');
        $('.wizard').addClass('show');
        $('.wizard').prependTo($('.choices'));
      break;
    }
  });
  



  /*bug testing
  $('select').on('change', function() {
    alert(typeof this.value)
  });*/


});
