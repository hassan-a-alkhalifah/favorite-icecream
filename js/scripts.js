var blanks = ["name", "flavor"];

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();

    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();

      $(".output").append("<li>" + userInput + "</li>");
    });

  });
});
