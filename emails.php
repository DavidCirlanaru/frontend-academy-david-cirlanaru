<?php

//clear empty spaces before and after mail input
$email = trim($_POST['email']);

//check if the input is empty and validate the email
if (!empty($email) && 
    preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^",$email)) {
    //read the json file
    $content = file_get_contents('emails.json');
    // convert in a string array 
    $content = json_decode($content, true);

    //add the new email at the beginning of the array
    array_unshift($content, $email);

    //add the new item in the json file 
    file_put_contents('emails.json', json_encode($content));
    
    die(json_encode(['success' => true]));
}

die(json_encode(['success' => false]));

?>