$(document).ready(function() {
  $(".sections").on("click", "a", function() {
    $("a").removeClass("active")
    $(".content").removeClass("show")
    $(this)
      .find("+ .content")
      .addClass("show")
    $(this).addClass("active")
  })
})
