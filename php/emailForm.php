<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = "aryan.gharshi@gmail.com";
$email_subject = "New portfolio enquiry";
$email_body = "Message from: $name. \n $message \n email: $email"

mail($email_from, $email_subject, $email_body);
echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
?>