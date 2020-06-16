

$(document).ready(function(){
 
 
  Swal.fire({
    html:
      'Bienvenido a spam ¿Cuentanos en que te podemos ayudar?'+ '<br><br>'+
      "<input id='celular' type='text' placeholder='Numero de celular(introduce 10 digitos)' class='form-control input_tel' required></input> <div class='pt-2'></div> "+"<br>"+
      "<p style='font-size:9px; float:left;'></p>"+
      "<textarea  id='mensaje' class='form-control  input_mensaje'  rows='3' placeholder='Escriba su mensaje aqui' required ></textarea>"+
      "<p  id='error_mensaje'></p>"+"<button id='enviar' type='button' class='btn btn-primary'>Enviar</button>", 
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton:false,
    focusConfirm: true,
   
  })
 
  $('#enviar').click(function(){
    var celular = $('#celular').val();
    var mensaje = $('#mensaje').val();  
   if(celular!="" && mensaje!=""){
    alert('Mensaje enviado');
   } 
   else{
    alert('Mensaje no enviado');

   }
    
  });
});




jQuery(document).ready(function() {
    jQuery('.input_tel').keypress(function(tecla) {
        if(tecla.charCode < 48 || tecla.charCode > 57) return false;
    });
});
$(document).ready(function(){
  var mensaje = $('#mensaje').val();
  var celular = $('#celular').val();
   if(mensaje=="" && celular==""){
    $('#enviar'). attr("disabled", true);
   }
});

$(document).ready(function(){
  var mensaje;
  var celular;
  jQuery('.input_tel').keypress(function(tecla) {
    $('.input_tel').keyup(function() {
      celular = $('#celular').val();
      mensaje = $('#mensaje').val();
      if(celular=="" && mensaje==""){
        $('#enviar'). attr("disabled", true);

      }
      else if($("#celular").val().length<10 ){
        $('#enviar'). attr("disabled", true);

      }
      
      else if(mensaje==""){
        $('#enviar'). attr("disabled", true);

      }
       else{
        $('#enviar'). attr("disabled", false);

       }
    });

  });
  jQuery('.input_mensaje').keypress(function(tecla) {
    $('.input_mensaje').keyup(function() {
      celular = $('#celular').val();
      mensaje = $('#mensaje').val();
      if(celular=="" && mensaje==""){
        $('#enviar'). attr("disabled", true);


      }
       
       else if($("#celular").val().length<10 ){
        $('#enviar'). attr("disabled", true);

      }
      else if(mensaje==""){
        $('#enviar'). attr("disabled", true);

      }
       else{
        $('#enviar'). attr("disabled", false);

       }
    });

  });

});


/*
jQuery(document).ready(function() { 
  var mensaje = $('#mensaje').val();
  var celular = $('#celular').val();
   $('#enviar'). attr("disabled", true);
  jQuery('.input_tel').keypress(function(tecla) {
    $('.input_tel').keyup(function() {

    if(celular==""){
      $('#error_celular').html('El campo no puede estar vacio');

    }
    else{
      $('#error_celular').html('');

    }
  });
});
jQuery('.input_mensaje').keypress(function(tecla) {
  $('.input_mensaje').keyup(function() {

  if(mensaje==""){
    $('#error_mensaje').html('El campo no puede estar vacio');

  }
  else{
    $('#error_mensaje').html('');
    $('#enviar'). attr("disabled", false);

    

  }
});
 
});
 
});

*/





