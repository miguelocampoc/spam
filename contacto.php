<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPAM S.A.S</title>
    <link rel="stylesheet" href="css/contacto.css">
    <script src = " https://unpkg.com/sweetalert/dist/sweetalert.min.js " > </script> 

    <?php include 'head.php'?>

</head>
<style>


body{
    background: url(img/instrumentacion4.png) no-repeat fixed center ;
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
   height: 100%;
   width: 100% ;
}
.boton.alternativo { 
    background-color: transparent;
    color: #00c69f!important;
    padding:2%;
    border: 2px solid #00c69f;
    border-radius: 7px;
}
 
.boton.alternativo:hover {
    background-color: #00c69f!important;
    padding:2%;
    color: white!important;
    text-decoration: none;
}
</style>
<body >
<?php include 'nav.php'?>

<br><br><br><br>
    <div class="container-fluid" id="container-fluid">
  

    
           <div class="row  justify-content-center align-items-center">
                <div class="col-md-5  bg-white " style="background-color:#E3EBEC" >
                <div >
                <div class="pb-1"> </div>
                <form name="frm-contact"> 
                  <p style="text-align:center; color:#48B1B6; font-size:20px;">Contactanos</p>
                 <?php include 'modal-contacto.php' ?>
                 </div>
                  </div>
                  <div class="border-top">
                  <div class="mb-2"> </div>
                  <div class="row ml-3 mb-3">Primer nombre*</div>
                  <div class="row pb-3">
                   <div class="col-sm-2">
                   <img width="40px" src="img/user.svg"></img>
                    <div class="row pb-3"></div>

                   </div>
                   <div class="col-sm-10">
                   <input id="nombre" type="text" class="form-control"></input>
                   <p id="errors_nombre" style="font-size:12px; color:red"></p>

                   </div>
                   </div>
                   <div class="row ml-3 mb-3">Segundo nombre</div>
                  <div class="row pb-2">
                   <div class="col-sm-2">
                   <img width="40px" src="img/user.svg"></img>
                   <div class="row pb-3"></div>

                   </div>
                   <div class="col-sm-10">
                   <input id="snombre" type="text" class="form-control"></input>
                   <p id="errors_snombre" style="font-size:12px; color:red"></p>

                   </div>
                   </div>
                   <div  class="row ml-3 mb-3">Correo electronico*</div>
                  <div class="row pb-2">
                   <div class="col-sm-2">
                   <img width="40px" src="img/mail.svg"></img>
                   <div class="row pb-3"></div>
                   </div>
                   <div class="col-sm-10">
                   <input  id="email" type="email" class="form-control" ></input>
                   <p id="errors_email" style="font-size:12px; color:red"></p>

                   </div>
                   </div>
                   <div class="row ml-3 mb-3">Celular o Telefono*</div>
                  <div class="row pb-2">
                   <div class="col-sm-2">
                   <img width="40px" src="img/phone.svg"></img>
                   <div class="row pb-3"></div>

                   </div>
                   <div class="col-sm-10">
                   <input class=" form-control validanumericos" id="celular" type="text" class="form-control" ></input>
                   <p id="errors_celular"style="font-size:12px; color:red"></p>
                   </div>
                   </div>
                   <div class="row ml-3 mb-3">Escribenos tu mensaje*</div>
                  <div class="row pb-2">
                   <div class="col-sm-2">
                   <img width="40px" src="img/pen.svg"></img>
                   <div class="row pb-3"></div>

                   </div>
                   <div class="col-sm-10">
                   <textarea id="mensaje" type="text" class="form-control" ></textarea>
                   <p id="errors_mensaje" style="font-size:12px; color:red"></p>
                   </div>
                   </div>
                   <div style="float:right">
                   <button id="contacto" value="contacto" type="button" class="btn btn-primary " >Enviar</button>
                
                   <div class="row pb-3"></div>
              
                   </form>
                   </div>
               
                </div>

           </div>

    </div>
    </div>
   
    <script src="js/contacto.js"></script>
    <br>
    
    


</body>
</html>