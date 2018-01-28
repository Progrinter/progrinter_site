<?php
    $tipo = $_POST['tipo'];
    $cep = $_POST['cep'];
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $from = $_POST['email'];
    $to = "contatoa@progrinter.com";
    $subject = $_POST['motivo'];
    $conteudo = $_POST['mensagem'];
    $headers = "De: " . $from;
    
    $message = "Mensagem do tipo " . $tipo . "; Nome: " . $nome . ", CEP: " . $cep . " e Telefone: " . $telefone . " relata o seguinte problema: " . $conteudo;
    mail($to, $subject, $message, $headers);
    header("Location:index.html");
?>