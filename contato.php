<?php
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $empresa = $_POST['empresa'];
    $from = $_POST['email'];
    $to = "contatoa@progrinter.com";
    $subject = $_POST['motivo'];
    $conteudo = $_POST['mensagem'];
    $headers = "De: " . $from;

    $message = "Nome: " . $nome .", Empresa: " . $empresa . ", Telefone: " . $telefone . ", Mensagem: " . $conteudo;
    mail($to, $subject, $message, $headers);
    header("Location:index.html");
?>