<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
</head>
<body>
<?PHP
	$colors = ["red", "green","blue"];
	$links = ["RIT"=>"http://www.rit.edu",
   	"RPI"=>"http://www.rpi.edu",
   	"MCC"=>"http://www.monroecc.edu"];
?>
    
    <ol>
        <?PHP
        // 1 loops through colors printing by ordered list
        foreach($colors as $value){
            echo "<li>$value</li>";
        }
        ?>
    </ol>
    
    <ul>
        <?PHP
        // 2 loops through urls printing by unordered list
        foreach($links as $key => $value){
            echo "<li><a href = $value>$key</a></li>";
        }
        ?>
    </ul>
</body>
</html>