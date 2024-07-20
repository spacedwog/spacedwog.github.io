<?php
    //include_once "conexao.php";
    $servername = "spacedwog.mysql.uhserver.com";
    $username = "spacedwog";
    $password = "6z2h1j3k9F!";
    $dbname = "spacedwog";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    $name = filter_input(INPUT_POST, 'name');
    $email = filter_input(INPUT_POST, 'email');
    $subject = filter_input(INPUT_POST, 'subject');
    $message = filter_input(INPUT_POST, 'message');

    # Executa a query desejada
    $comando = "INSERT INTO mensagem";
    $campos = "(nome, email, subject, message)";
    $values = "VALUES('$name', '$email', '$subject', '$message')";
    $query = $comando. $campos. $values;

    if (mysqli_query($conn, $query)) {
      echo "New record created successfully";
    }
    else {
      echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
    
    mysqli_close($conn);
?>