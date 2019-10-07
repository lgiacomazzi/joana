<?php
if (isset($_POST['send_message_btn'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $insta = $_POST['insta'];
  $subject = $_POST['subject'];
  $msg = $_POST['msg'];
  // Content-Type helps email client to parse file as HTML
  // therefore retaining styles
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $message = "<html>
  <head>
  	<title>New message from website contact form</title>
  </head>
  <body>
    <p>de: ". $name . ", ". $email . ", @". $insta ."</p>
  	<h1>" . $subject . "</h1>
  	<p>".$msg."</p>

  </body>
  </html>";
  mail('joana@joanabrum.com.br', $subject, $message, $headers);
  header("Location: http://www.joanabrum.com.br/index.html");
  exit();
}
?>
