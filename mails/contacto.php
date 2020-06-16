<?php 
            use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\Exception;

            require 'phpmailer/Exception.php';
            require 'phpmailer/PHPMailer.php';
            require 'phpmailer/SMTP.php';
           $mail = new PHPMailer(true);
            $nombre=$_POST['nombre'];
            $snombre=$_POST['snombre'];
            $email=$_POST['email'];
            $celular=$_POST['celular'];
            $mensaje=$_POST['mensaje'];

        try {
            //Server settings
            $mail->SMTPDebug = 0;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'infomigsed@gmail.com';                     // SMTP username
            $mail->Password   = '@migsed123';                               // SMTP password
            $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $mail->setFrom('infomigsed@gmail.com', 'MIGSED');
            $mail->addAddress($email);     // Add a recipient
      
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Mensaje de contacto SPAM-'.$nombre;
            $mail->Body    = 'Un usuario con ha enviado la siguiente informacion atravez del formulario de contacto spam <br>nombre:'.$nombre.'<br>segundo nombre:'.$snombre.'<br>email:'.$email.'<br>celular:'.$celular.'<br>mensaje:'.$mensaje;
        
            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
?>