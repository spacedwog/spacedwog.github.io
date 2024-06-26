<?php
    include_once "conexao.php";

    # Seleciona o banco de dados 
    mysqli_select_db( $database ) or die( 'Erro na seleção do banco' );

    # Executa a query desejada 
    $query = "SELECT id_projeto, nome_projeto, tipo_projeto FROM projetos"; 
    $result_query = mysqli_query( $query ) or die(' Erro na query:' . $query . ' ' . mysqli_error() ); 

    # Exibe os registros na tela 
    while ($row = mysqli_fetch_array( $result_query )) { print $row[id_projeto] . " -- " . $row[nome_projeto] . " -- " . $row[tipo_projeto]; }

?>