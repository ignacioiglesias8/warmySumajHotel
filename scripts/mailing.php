<?php
// Importar la librería PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Configurar el objeto PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // Configura el servidor SMTP de tu proveedor de correo electrónico
$mail->SMTPAuth = true;
$mail->Username = 'tu-correo@gmail.com'; // Configura tu dirección de correo electrónico
$mail->Password = 'tu-contraseña'; // Configura tu contraseña
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Configurar el correo electrónico
$mail->setFrom($_POST['email'], $_POST['nombre']);
$mail->addAddress('ignacioiglesias8@gmail.com');
$mail->Subject = 'Formulario de contacto';
$mail->Body = $_POST['mensaje'];

// Enviar el correo electrónico
if ($mail->send()) {
    echo 'El mensaje se envió correctamente.';
} else {
    echo 'Ocurrió un error al enviar el mensaje: ' . $mail->ErrorInfo;
}
