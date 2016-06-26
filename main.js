$(document).ready(function() {
  $('#class-drop').on('change', function() {
    var pic = $(this).val();
    $('img').attr('src', pic);

  });
  $('#class-drop').on('change', function() {
    var classes = $(this).val();
    //alert(classes); bug testing
    switch(classes) {
      case "barbarian.png":
        $('.classes').addClass('hidden');
        $('.barbarian').removeClass('hidden');
        $('.barbarian').addClass('show');
        $('.default').text(" An explorer's pack and four javelins");
        break;
      case "bard.png":
        $('.classes').addClass('hidden');
        $('.bard').removeClass('hidden');
        $('.bard').addClass('show');
        $('.bard').prependTo($('.choices'));
        $('.default').text(" leather armor and a dagger");
        break;
      case "cleric.png":
        $('.classes').addClass('hidden');
        $('.cleric').removeClass('hidden');
        $('.cleric').addClass('show');
        $('.cleric').prependTo($('.choices'));
        $('.default').text(" A shield and a holy symbol");
        break;
      case "druid.png":
        $('.classes').addClass('hidden');
        $('.druid').removeClass('hidden');
        $('.druid').addClass('show');
        $('.druid').prependTo($('.choices'));
        $('.default').text( " Leather armor, an explorer's pack, and a druidic focus");
        break;
      case "fighter.png":
        $('.classes').addClass('hidden');
        $('.fighter').removeClass('hidden');
        $('.fighter').addClass('show');
        $('.fighter').prependTo($('.choices'));
        $('.default').text('');
        break;
      case "monk.png":
        $('.classes').addClass('hidden');
        $('.monk').removeClass('hidden');
        $('.monk').addClass('show');
        $('.monk').prependTo($('.choices'));
        $('.default').text(" 10 darts");
        break;
      case "paladin.png":
        $('.classes').addClass('hidden');
        $('.paladin').removeClass('hidden');
        $('.paladin').addClass('show');
        $('.paladin').prependTo($('.choices'));
        $('.default').text(" Chain mail and a holy symbol");
        break;
      case "ranger.png":
        $('.classes').addClass('hidden');
        $('.ranger').removeClass('hidden');
        $('.ranger').addClass('show');
        $('.ranger').prependTo($('.choices'));
        $('.default').text(" A longbow and a quiver of 20 arrows");
        break;
      case "rogue.png":
        $('.classes').addClass('hidden');
        $('.rogue').removeClass('hidden');
        $('.rogue').addClass('show');
        $('.rogue').prependTo($('.choices'));
        $('.default').text(" Leather armor, two daggers, and thieves' tools");
        break;
      case "sorcerer.png":
        $('.classes').addClass('hidden');
        $('.sorcerer').removeClass('hidden');
        $('.sorcerer').addClass('show');
        $('.sorcerer').prependTo($('.choices'));
        $('.default').text(" Two daggers");
        break;
      case "warlock.png":
        $('.classes').addClass('hidden');
        $('.warlock').removeClass('hidden');
        $('.warlock').addClass('show');
        $('.warlock').prependTo($('.choices'));
        $('.default').text(" leather armor, any simple weapon, and two daggers");
        break;
      case "wizard.png":
        $('.classes').addClass('hidden');
        $('.wizard').removeClass('hidden');
        $('.wizard').addClass('show');
        $('.wizard').prependTo($('.choices'));
        $('.default').text(" A spellbook");
      break;
    }
  });
  $('#background-drop').on('change', function() {
    var background = $(this).val();

    switch (background) {
      case "acolyte":
        $('.equip-show').text(acolyte.toString());
        break;
      case "charlatan":
        $('.equip-show').text(charlatan.toString());
        break;
      case "criminal":
        $('.equip-show').text(criminal.toString());
        break;
      case "entertainer":
        $('.equip-show').text(entertainer.toString());
        break;
      case "folkhero":
        $('.equip-show').text(folkhero.toString());
        break;
      case "guildartisan":
        $('.equip-show').text(guildartisan.toString());
        break;
      case "hermit":
        $('.equip-show').text(hermit.toString());
        break;
      case "noble":
        $('.equip-show').text(noble.toString());
        break;
      case "outlander":
        $('.equip-show').text(outlander.toString());
        break;
      case "sage":
        $('.equip-show').text(sage.toString());
        break;
      case "sailor":
        $('.equip-show').text(sailor.toString());
        break;
      case "soldier":
        $('.equip-show').text(soldier.toString());
        break;
      case "urchin":
        $('.equip-show').text(urchin.toString());
        break;

    }
  });

  $('input[name=equipment1]:radio').on('change',function() {
    var choice1 = $(this).val();
    //alert(choice1); bug testing
    $('.choice1').text(" " + choice1);

  });
  $('input[name=equipment2]:radio').on('change', function() {
    var choice2 = $(this).val();
    $('.choice2').text(" " + choice2);
  });
  $('input[name=equipment3]:radio').on('change',function () {
    var choice3 = $(this).val();
    $('.choice3').text(" " + choice3);
  });
  $('input[name=equipment4]:radio').on('change', function() {
    var choice4 = $(this).val();
    $('.choice4').text(" " + choice4);
  });

  $('#class-drop').on('change', function() {
    $('.choice1, .choice2, .choice3, .choice4').text('');
  });


  $('.form-inline').submit(function() {
    if ($('#characterName').val() !== "") {
      console.log($("#characterName").val());
      var equipmentList = $('.equip-show, .default, .choice1, .choice2, .choice3, .choice4').text();
      var character = $('#characterName').val();
      localStorage.setItem(character, equipmentList);

    }
    else {
      $('.name-error').text("Please give your character a name");

      return false
    }
  });



  /*bug testing
  $('select').on('change', function() {
    alert(typeof this.value)
  });*/
});
