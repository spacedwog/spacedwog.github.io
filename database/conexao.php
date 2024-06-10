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
    echo "Connected successfully";
    mysqli_close($conn);