<?php
    include_once "conexao.php";

    $name = filter_input(INPUT_POST, 'name');
    $email = filter_input(INPUT_POST, 'email');
    $subject = filter_input(INPUT_POST, 'subject');
    $message = filter_input(INPUT_POST, 'message');

    # Seleciona o banco de dados
    mysqli_select_db( $conn ) or die( 'Erro na seleção do banco' );

    # Executa a query desejada
    $comando = "INSERT INTO mensagem";
    $campos = "(nome, email, subject, message)";
    $values = "VALUES('$name', '$email', '$subject', '$message')";
    $query = $comando. $campos. $values;
    $
    $result_query = mysqli_query( $query ) or die(' Erro na query:' . $query . ' ' . mysqli_error() );

    if (mysqli_query($conn, $query)) {
      echo "New record created successfully";
    }
    else {
      echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
    
    mysqli_close($conn);
?>