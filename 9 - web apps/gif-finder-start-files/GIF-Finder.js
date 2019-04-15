    // 1
  	window.onload = (e) => {document.querySelector("#search").onclick = getData};

	// 2
	let displayTerm = "";
	
	// 3
	function getData(){
		// 1
		const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?";

		// 2
		// Public API key from here: https:developers.giphy.com/docs
		const GIPHY_KEY = "dc6zaTOxFJmzC";

		// 3
		let url = GIPHY_URL;

		url += "api_key=" + GIPHY_KEY;

		// 4 - parse the user entered term we wish to search
		let term = document.querySelector("#searchterm").value;
		displayTerm = term;

		// 5 - Get rid of any leading and trailing spaces from the form field
		term = term.trim();

		// 6 encode spaces and special characters
		term = encodeURIComponent(term);

		// 7 - if there's no term to search then bail out of the function (return)
		if (term.lenghth < 1) return;

		// 8 - add the search term to the url - the parameter name is 'q'
		url += "&q=" + term;

		// 9 - grab the user chosen search limit from the <select>
		let limit = document.querySelector("#limit").value;
		url += "&limit=" + limit;

		// 10 - update the UI
		document.querySelector("#content").innerHTML = "<b>Searching for " + displayTerm + "</b>";

		// 11 - what the url looks like
		console.log(url);

		console.log(jQuery);
		console.log($); // $ is an alias to the jQuery object

		// 12 - tell jQuery to download the data
		$.ajax({
			dataType: "json",
			url: url,
			data: null,
			success: jsonLoaded // 13 - callback function is called when data arrives
		})
	}

	function jsonLoaded(obj){
		// 14 - just log out the JSON for now
		console.log("obj = " +obj);
		console.log("obj stringified = " + JSON.stringify(obj));

		// 15 - if there are no results, print a message and return
		if (!obj.data || obj.data.length == 0){
			document.querySelector("#content").innerHTML = `<p><i>No results found for '${displayTerm}'</i></p>`;
			$("#content").fadeIn(500);
			return; // bail out
		}

		// 16 - if there is an array of results, loop through them
		let results = obj.data;
		console.log("results.length = " + results.length);
		let bigString = "<p><i>Here are " + results.length + " results for '" + displayTerm + "'</i></p>";

		// 17 - start looping (could also have used for..of loop)
		for (let i = 0; i < results.length; i++){
			let result = results[i];

			// 18 - get the URL to the GIF
			let smallURL = result.images.fixed_width_small.url;
			if (!smallURL) smallURL = "images/no-image-found.png";

			// 19 - get the URL to the Gi[hy web page
			let url = result.url;

			// 20 build a <div> to hold each result
			// ES6 String Templating
			var line = `<div class='result'><img src='${smallURL}' title= '${result.id}' />`;
			line += `<span><a target='_blank' href='${url}'>View on Giphy</a><p>Rating: '${result.rating.toUpperCase()}'</p></span></div>`;

			// 22 - concatenate the line to our big chunk of html
			bigString += line;
		}

		// 23 - throw it into the #content div
		document.querySelector("#content").innerHTML = bigString;

		// 24 - fade it in
		$("#content").fadeIn(500);
	}