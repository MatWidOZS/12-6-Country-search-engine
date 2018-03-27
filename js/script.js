$(function() {

	var url = 'https://restcountries.eu/rest/v1/name/',
		countriesList = $('#countries'),
		regionList = $;

	$('#search').click(searchCountries);
	$('#country-name').keypress(function(enter) {
		if(enter.which == 13) {
			searchCountries();
		}
	});

	function searchCountries() {
		var countryName = $('#country-name').val();

		if(!countryName.length) countryName = 'Poland';

		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	function showCountriesList(resp) {
		countriesList.empty();

		resp.forEach(function(item) {
			// $('<li>').text(item.name).appendTo(countriesList); //basic search

			var divCountry = $('<div>').addClass('country-container');
			var newLine = $('<li>').appendTo(countriesList);
			var flag = item.alpha2Code;
			var divRow = $('<div>').addClass('row');
			var colLeft = $('<div>').addClass('col-md-2 col-left');
			var colRight = $('<div>').addClass('col-md-2 col-right');
			var square = '\xB2';

			divCountry.appendTo(newLine);
				$('<img>').attr('src', "http://www.geonames.org/flags/x/" + flag.toLowerCase() + ".gif").appendTo(divCountry).addClass('image');
				$('<h1>').text(item.name + ", " + item.altSpellings).appendTo(divCountry);
				$('<h3>').text('Additional info:').appendTo(divCountry);
				colLeft.appendTo(divCountry);
					$('<h4>').text('Capital :').appendTo(colLeft);
					$('<h4>').text('Area :').appendTo(colLeft);
					$('<h4>').text('Currency :').appendTo(colLeft);
					$('<h4>').text('Population :').appendTo(colLeft);
					$('<h4>').text('Region :').appendTo(colLeft);
				colRight.appendTo(divCountry);
					$('<h4>').text(item.capital || 'no data').appendTo(colRight);
					$('<h4>').text(item.area + ' km' + square).appendTo(colRight);
					$('<h4>').text(item.currencies[0]).appendTo(colRight);
					$('<h4>').text(item.population).appendTo(colRight);
					$('<h4>').text(item.region).appendTo(colRight);
		});
	}

	$('#form').click(function(event) {
		event.preventDefault();
	});

});

//https://restcountries.eu/