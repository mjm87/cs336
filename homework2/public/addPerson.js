$( 'form' ).submit(function( event ) {
  event.preventDefault();

  var form = $( this );

  $.ajax({
    type: 'POST',
    url: '/people',
    data: form.serialize(),
    dataType: 'json',
    success: function( resp ) {
      console.log("Sucessfully added person");
      $('#name').value("");
      $('#id').value("");
      $('#years').value = "";
    }
  });
});