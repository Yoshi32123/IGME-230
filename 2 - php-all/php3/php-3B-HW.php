<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>About you!</title>
</head>
<body>
<h1>About you!</h1>
<?PHP
	$server =  $_SERVER["SERVER_NAME"];
	$ip =  $_SERVER["REMOTE_ADDR"];
	$ua =  $_SERVER["HTTP_USER_AGENT"];
    $ipa = $_SERVER["SERVER_ADDR"];
    $ss = $_SERVER["SERVER_SOFTWARE"];
    $rtime = $_SERVER["REQUEST_TIME"];
	echo "<p>The server is: $server</p>";
	echo "<p>Your IP address is: $ip</p>";
	echo "<p>Your browser is: $ua</p>";
    echo "<p>Your server IP address is: $ipa</p>"; // IP address
    echo "<p>Your server software is: $ss</p>"; // Server software
    echo '<p>Server request time is: ' . date('H:i:s', $rtime) . '</p>'; // Server "request time"
?>
</body>
</html>