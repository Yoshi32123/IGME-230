<!DOCTYPE html5>
<html lang="en">
<head>
	<meta charset="utf-8" />
    <title>Random Facts!</title>
    <style>
        #main {
            width: 600;
            height: 400;
            margin-left: auto;
            margin-right: auto;
            text-indent: 2em;
            border-style: solid;
            border-width: 30px;
            border-color: blueviolet;
            background-color: cornsilk;
        }
        
        #fact {
            font-style: italic;
            font-size: 2em;
            text-align: center;
            color: firebrick;
            margin: 0.5em;
        }
    </style>
</head>
<body>
    <?PHP
        $facts = [
            //1
            "Godzilla has a distinctive roar, which was created by composer Akira Ifukube, who produced the sound by rubbing a resin coated glove along the string of a contrabass and then slowing down the playback.",
            //2      
            "Percy Spencer invented the first microwave oven after World War II from radar technology developed during the war. Named the \"Radarange\", it was first sold in 1946.",
            //3      
            "Considering the absolute threshold, the brightness of a candle flame, and the way a glowing object dims according to the square of the distance away from it, vision scientists conclude that one could make out the faint glimmer of a candle flame up to 30 miles away.",
            //4      
            "In 1858, Rowland Hussey Macy founded Macy's as a dry goods store. Benjamin Altman and Lord & Taylor soon competed with Stewart as New York's earliest department stores, later followed by \"McCreary's\" and, in Brooklyn, \"Abraham & Straus.\"",
            //5      
            "Evaporated milk, also known as dehydrated milk, is a shelf-stable canned milk product with about 60% of the water removed from fresh milk. It differs from sweetened condensed milk, which contains added sugar. Sweetened condensed milk requires less processing since the added sugar inhibits bacterial growth.",
            //6
            "Tic Tac® mints do contain sugar as listed in the ingredient statement. However, since the amount of sugar per serving (1 mint) is less than 0.5 grams, FDA labeling requirements permit the Nutrition Facts to state that there are 0 grams of sugar per serving.",
            //7
            "Venus takes 224.7 Earth days to complete one orbit around the Sun. So a year on Venus is 0.62 as long as an Earth year. One interesting fact about Venus is that a day on Venus is actually longer than a year on Venus. A Venusian day lasts 243 days, and a year is 224 days.",
            //8
            "The ordinary paper that consumers use throughout their everyday life such as newspapers, books, cereal boxes, etc, is primarily made of wood pulp; however, United States currency paper is composed of 75% cotton and 25% linen."
        ];
    
        //int rand(int $0,int $7);
    ?>
    <section id="main">
        <?PHP
        echo "<p>Hi! Welcome to the random facts page!</p>";
        echo "<p>Here is the random fact:</p>";
        ?>
        <section id="fact">
            <p>
            <?PHP
                echo $facts[rand(0,7)];
            ?>
            </p>
        </section>
    </section>
</body>
</html>