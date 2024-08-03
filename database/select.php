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
        $query = "SELECT id_projeto, nome_projeto, tipo_projeto FROM projetos WHERE id_projeto = ?";
        $result_query = mysqli_query( $query ) or die(' Erro na query:' . $query . ' ' . mysqli_error() );

        $stmt = $mysqli->prepare($sql);
        $stmt->bind_param("s", $_GET['q']);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($id_projeto, $nome_projeto, $tipo_projeto);
        $stmt->fetch();
        $stmt->close();
        
        echo "<table>";
        echo "<tr>";
        echo "<th>ID do Projeto</th>";
        echo "<td>" . $id_projeto . "</td>";
        echo "<th>Nome do Projeto</th>";
        echo "<td>" . $nome_projeto . "</td>";
        echo "<th>Tipo do Projeto</th>";
        echo "<td>" . $tipo_projeto . "</td>";
        echo "</tr>";
        echo "</table>";
    }
    mysqli_close($conn);
?>