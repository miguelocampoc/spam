<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPAM S.A.S</title>
    <?php include 'head.php'?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="js/index.js"></script>
</head>
<style>

 .minh-100 {
    height: 100vh;
  }
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
<body style="background-color:black">
<?php include 'nav.php'?>
<div id="mobile">
<div class="pb-5"> </div>
<div class="pb-3"> </div>
<div class="pb-3"> </div>
<div class="pb-3"> </div>

</div>
    <div class="container-fluid" id="container-fluid">
           <div class="row  justify-content-center align-items-center minh-100">
                <div class="col-md-5" >
                <div style="text-align:center">
                <img src="img/logospam.png" id="align-center"></img>
                </div>
                <p id="align-center" style="color:white; font-size:32px; text-align:center;"> Spam Soluciones & Servicios s.a.s </p>
               <div style="text-align:center"> <a class="boton alternativo" style="font-size:21px" href="servicios.php"> Ver Servicios</a></div> <br>
               <p style="text-align:center; font-size:20px; color:white; "> Dirección: Calle 75 Bis N° 31-05 Barrio La Florestica
                    PBX: (7) 6213188
                    Celular: +57 3108348082 - +573102462181
                    E–mail: spamsas@spamingenieria.com
                    Barrancabermeja, Santander, Colombia
                </p>
           </div>
    </div>
</body>
</html>