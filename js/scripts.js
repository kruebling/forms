$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person").val();
    var addressInput = $("input#address").val();

    $(".person").text(personInput);
    $(".address").text(addressInput);

    $("#letter").show();

    event.preventDefault();
  });
});
