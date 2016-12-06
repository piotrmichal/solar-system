$(function() {
	var $infoBox = $('aside div');
	var $sun = $('#sun');
	var $solarSystem = $('#solarSystem').html();
	var $home = $('h1');
	var $orbits = $('.orbits');
	var $planets = $('nav li');
	var $name = $('main h3');

	$orbits.on('click', function() {
		$orbits.removeClass('active');
		$(this).addClass('active');
		var $about = $(this).find('div.info').html();
		$infoBox.html($about);
	});

	$sun.on('click', function() {
		$orbits.removeClass('active');
		var $aboutSun = $(this).find('div.info').html();
		$infoBox.html($aboutSun);
	});

	$home.on('click', function() {
		$orbits.removeClass('active');
		$infoBox.html($solarSystem);
	});

	var $planetName;
	var ids;
	$planets.on('click', function(){
		$planetName = $(this).text();
		$name.each(function() {
			if($(this).text() === $planetName){
				var $planetInfo = $(this).parent().html();
				$infoBox.html($planetInfo);
			}
		});
		$orbits.removeClass('active');
		$orbits.each(function() {
			ids = this.id;
			if(this.id === $planetName.toLowerCase()) {
				$(this).addClass('active');
			}
		});
	});

	$planets.on('mouseover', function() {
		$planetName = $(this).text().toLowerCase();
		$orbits.each(function() {
			ids = this.id;
			if(this.id === $planetName) {
				$(this).addClass('hover');
			}
		});
	});
	
	$planets.on('mouseout', function() {
		$orbits.removeClass('hover');
	});
});