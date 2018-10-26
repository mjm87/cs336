$('form').submit(function(event) {
  event.preventDefault();

  $.ajax({
    type: 'GET',
    url: '/person/'+ $('#id').val(),
    dataType: 'json',
    success: function( resp ) {
      // unhide the Person Data fields
      $("#users-contain").removeClass("hidden").addClass("visible");

      // update the page with the retrieved person data
      $("#return-name").html(resp.name);
      $("#return-id").html(resp.id);
      $("#return-years").html(resp.years);
    }
  }).fail(function(){
    console.log("failed");
  });
});