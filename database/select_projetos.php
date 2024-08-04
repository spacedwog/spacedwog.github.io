<?php
$servername = "spacedwog.mysql.uhserver.com";
$username = "spacedwog";
$password = "KIMERAbeta12@";
$dbname = "spacedwog";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT nome_projeto, tipo_projeto FROM projetos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Nome do Projeto: " . $row["nome_projeto"]. " - Tipo do Projeto" . $row["tipo_projeto"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>