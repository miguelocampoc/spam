

$(document).ready(function(){
 
 
  Swal.fire({
    html:
      'Bienvenido a spam ¿Cuentanos en que te podemos ayudar?'+ '<br><br>'+
      "<input id='nombre' type='text' placeholder='Nombre(opcional)' class='form-control '></input> <div class='pt-2'></div> "+"<br>"+

      "<input id='celular' type='text' placeholder='Numero de celular(introduce 10 digitos)' class='form-control input_tel' required></input> <div class='pt-2'></div> "+"<br>"+
      "<p style='font-size:9px; float:left;'></p>"+
      "<textarea  id='mensaje' class='form-control input_mensaje'  rows='3' placeholder='Escriba su mensaje aqui' required ></textarea>"+
      "<p  id='error_mensaje'></p>"+"<button id='enviar' type='button' class='btn btn-primary'>Enviar</button>", 
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton:false,
    focusConfirm: true,
   
  })
 
  $('#enviar').click(function(){
    var celular = $('.input_tel').val();
    var mensaje = $('.input_mensaje').val();  
    var nombre = $('#nombre').val();  
    var parametros = {"nombre": nombre,"mensaje":mensaje,"celular":celular};
    cargando();
    $.ajax({
      data:parametros,
      url:'mails/sendindex.php',
      type: 'post',
      success: function(data){
        Swal.fire(
          '',
          'Su mensaje se ha enviado exitosamente',
          'success'
        )
      },
      error: function(){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error',
        })
      },
  });






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

function cargando(){
  $(document).ready(function(){
    let timerInterval
Swal.fire({
  title: '',
  html: 'Cargando...',
  timer: 5000,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

  });
}


