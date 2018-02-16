<?php
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $empresa = $_POST['empresa'];
    $from = $_POST['email'];
    $to = "paulohenriquepaiva@ymail.com";
    $subject = $_POST['motivo'];
    $conteudo = $_POST['mensagem'];
    $headers = "De: " . $from;
    $message = "Nome: " . $nome ."<br>" . "Empresa: " . $empresa . "<br>" . "Telefone: " . $telefone . "<br>" . "Mensagem: <br>" . $conteudo;

    //echo $message;
    mail($to, $subject, $message, $headers);
    header("Location:index.html");
?>