// Target the sport linke
// Replace link with game type links

$(document).on("turbolinks:load", function() {
  submitSportListener();
  // findMatchListener();
})

  var submitSportListener = function() {
    $(".submit-sport-form").on("submit", function() {
        event.preventDefault();

        var submitSportTarget = $(this);
        var address = submitSportTarget.attr("action");
        var method = submitSportTarget.attr("method");
        var data = submitSportTarget.serialize();

        var request = $.ajax({
          url: address,
          method: method,
          data: data
        })
        request.done(function(response) {
          // For the sport, append all the game types
          for(var i=0; i < response.length; i++) {
            var sportLink = "/sports/" + response[i].id;
            var sportId = response[i].name;
            var formSportLink = '<form action="' + sportLink + '"><input class="sport-button" type="submit" value= '+ sportId +' /></form>'
            // var fullSportLink = '<button class="sport-button" href="' + sportLink + '">'+sportId+'</a>'
            submitSportTarget.parent().hide();
            $("#sports-type-container").append(formSportLink)

          }
        })
      })
}

  var findMatchListener = function() {
    $("#find-match-link").on("click", function() {
      event.preventDefault();

      var findMatchLinkTarget = $(this);
      var address = findMatchLinkTarget.attr("action")
      var method = findMatchLinkTarget.attr("method")

      var request = $.ajax({
        url: address,
        method: method,
      })

      request.done(function(response) {
        findMatchLinkTarget.addClass("hidden")
      })

      request.fail(function(response) {
        alert(response);
      })
    })
}
