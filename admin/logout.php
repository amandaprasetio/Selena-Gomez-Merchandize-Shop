<?php
    session_start();
    session_destroy();
    unset($_SESSION["id"]);
    unset($_SESSION["username"]);
    unset($_SESSION["password"]);
    header("Location:login.php");
?>