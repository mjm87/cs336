$( 'form' ).submit(function( event ) {
  event.preventDefault();

  var form = $( this );

  $.ajax({
    type: 'POST',
    url: '/people',
    data: form.serialize(),
    success: function() {
      // clearing the form on completion
      form.trigger("reset");
      console.log("Person added.");
    }
  })
  .fail(function(){
    console.log("Couldn't add person.");
  });
});