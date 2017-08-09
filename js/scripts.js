$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person").val();
    var addressInput = $("input#address").val();

    $(".person").text(personInput);
    $(".address").text(addressInput);

    $("#letter").show();

    event.preventDefault();
  });
  $("#formTwo").submit(function(event) {
    var yellInput = $("input#yell").val();

    $(".yell").text(yellInput);
    .toUpperCase();

    $("#shout").show();

    event.preventDefault();

  });
});
