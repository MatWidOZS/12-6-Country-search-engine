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
			$('<li>').text(item.name).appendTo(countriesList);
		});
	}

});

//https://restcountries.eu/