$(document).ready(function() {
  $("form#new-contact").submit(function(event) {

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#street").val();
    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#state").val();
    var newAddress = { street: inputtedStreet,
                       city: inputtedCity,
                       state: inputtedState,
                       fullAddress: function() {
                         return this.street + ", " + this.city + ", " + this.state;
                       }
                      };
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName,
                       address: newAddress.fullAddress()
                      };


    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
    // $("input#street").val("");
    // $("input#city").val("");
    // $("input#state").val("");

    $("input").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
    });

    event.preventDefault();
  });

});
