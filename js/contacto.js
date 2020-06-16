


$(document).ready(function(){
    $('#contacto').click(function(){

      var contacto =$('#contacto').val();
      var nombre= $('#nombre').val();
      var snombre= $('#snombre').val();
      var email= $('#email').val();
      var celular= $('#celular').val();
      var mensaje=$('#mensaje') .val();
     validacion(nombre,snombre,email,celular,mensaje,contacto);
     });
  });

 function validacion(nombre,snombre,email,celular,mensaje,contacto){
  $(document).ready(function(){
    var validacion=1;
          emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          //validacion primer nombre
          if(nombre!=""){
            $('#errors_nombre').html("");
  
          }
          else{
            $('#errors_nombre').html("Este campo no puede estar vacio");
            validacion=0;
  
          }
          

          //validacion email
          if (emailRegex.test(email)) {
            $('#errors_email').html("");

           
          } else {
          $('#errors_email').html("Su email es  invalido");
          validacion=0;
        }
        //validacion celular
        if(celular!=""){
          $('#errors_celular').html("");

        }
        else{
          $('#errors_celular').html("Este campo no puede estar vacio");
          validacion=0;

        }
        //validacion mensaje
        if(mensaje!=""){
          $('#errors_mensaje').html("");

        }
        else{
          $('#errors_mensaje').html("Este campo no puede estar vacio");
          validacion=0;

        }

        if(validacion>0){
          contacto(nombre,snombre,email,celular,mensaje,contacto);
        }
      });

      function contacto(nombre,snombre,email,celular,mensaje,contacto){

        $(document).ready(function(){
          
          var parametros = {"nombre": nombre,"snombre":snombre, "email":email,"celular":celular ,"mensaje":mensaje,"contacto":contacto};
                  $.ajax({
                    data:parametros,
                    url:'mails/contacto.php',
                    type: 'post',
                    success: function(data){
                      swal ( " El mensaje fue enviado exitosamente " );
                          $('#contacto').val("");
                          $('#nombre').val("");
                          $('#snombre').val("");
                          $('#email').val("");
                          $('#celular').val("");
                          $('#mensaje').val("");
                          setTimeout('document.location.reload()',2000);


                    },
                    error: function(){
                      swal ( "Ops! Ha ocurrido un error, intenta de nuevo " ) ;

                    },
                });
                
        });

       }


 }

