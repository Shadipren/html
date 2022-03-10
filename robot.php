<?php

    $conn = mysqli_connect("localhost", "root", "", "pern01", "3308");

    if (!$conn) { 
        echo "<p>Database connection failed</p>"; 
    
    }

    $stmt = mysqli_prepare($conn, "select * from robot");
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if($result) {
        $row = mysqli_fetch_assoc($result);
        echo "<td>".$row["speed"] . "m/h</td>" . "<td>".$row["status"] . "</td>" . "<td>".$row["position"] . "</td>";
    }

?>