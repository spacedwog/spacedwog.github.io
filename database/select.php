<?php
    $servername = "spacedwog.mysql.uhserver.com";
    $database = "spacedwog";
    $username = "spacedwog";
    $password = "6z2h1j3k9F!";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else{
        echo "Connected successfully";

        # Seleciona o banco de dados
        mysqli_select_db( $conn ) or die( 'Erro na seleção do banco' );
    
        # Executa a query desejada
        $query = "SELECT id_projeto, nome_projeto, tipo_projeto FROM projetos";
        $result_query = mysqli_query( $query ) or die(' Erro na query:' . $query . ' ' . mysqli_error() );
    
        # Exibe os registros na tela
        while ($row = mysqli_fetch_array( $result_query )) {
            print $row[id_projeto] . " -- " . $row[nome_projeto] . " -- " . $row[tipo_projeto];
            $data = JSON.parse($row);
        }
    }
    mysqli_close($conn);
?>