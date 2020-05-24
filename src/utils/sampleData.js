const sampleData = {
	birthDetails: {
		dateString: '2020-05-05',
		timeString: '15:05:05',
		lat: 25,
		lng: 70,
		timezone: 5
	},
	birthDetailsExpanded: {
		year: 2020,
		month: 5,
		date: 5,
		hour: 15,
		min: 5,
		sec: 5,
		lat: 25,
		lng: 70,
		timezone: 5
	},
	grahasPosition: {

		Su: { 
			longitude: 21.237012359466505,
			latitude: 0.0002053518174398051,
			distance: 1.0086712894247367,
			longitudeSpeed: 0.9681894317387951,
			latitudeSpeed: -0.000013474527710551535,
			distanceSpeed: 0.00024049507863760575,
			rflag: 65860,
			graha: 'Su',
			isRetrograde: false,
			nakshatra: { name: 'Bharani', pada: 3 },
			rashi: 'Ar' 
		},

		Mo: { 
			longitude: 172.67779396805847,
			latitude: 4.91636672386553,
			distance: 0.002407098560876014,
			longitudeSpeed: 15.063054407651258,
			latitudeSpeed: -0.3891854991554736,
			distanceSpeed: -0.000008041526872714209,
			rflag: 65860,
			graha: 'Mo',
			isRetrograde: false,
			nakshatra: { name: 'Hasta', pada: 4 },
			rashi: 'Vi' 
		},

		Me: { 
			longitude: 21.85436370307817,
			latitude: -0.0171462407503486,
			distance: 1.3230109515151005,
			longitudeSpeed: 2.1638897298760895,
			latitudeSpeed: 0.17597061835688793,
			distanceSpeed: -0.003596676476410021,
			rflag: 65860,
			graha: 'Me',
			isRetrograde: false,
			nakshatra: { name: 'Bharani', pada: 3 },
			rashi: 'Ar' 
		},
		
		Ve: {
			longitude: 56.54951254515609,
			latitude: 4.710463974371201,
			distance: 0.3998012994174667,
			longitudeSpeed: 0.28519805571765716,
			latitudeSpeed: -0.033488853010295506,
			distanceSpeed: -0.00645730954136935,
			rflag: 65860,
			graha: 'Ve',
			isRetrograde: false,
			nakshatra: { name: 'Mrigashira', pada: 1 },
			rashi: 'Ta'
		},

		Ma: {
			longitude: 300.54297026521533,
			latitude: -1.7243806578193743,
			distance: 1.1962657174820874,
			longitudeSpeed: 0.6878323992243554,
			latitudeSpeed: -0.02360790483291124,
			distanceSpeed: -0.007328211892773828,
			rflag: 65860,
			graha: 'Ma',
			isRetrograde: false,
			nakshatra: { name: 'Dhanishta', pada: 3 },
			rashi: 'Aq'
		},

		Ju: {
			longitude: 272.97133481664474,
			latitude: -0.14210814568443875,
			distance: 4.776027652017015,
			longitudeSpeed: 0.02873838747747352,
			latitudeSpeed: -0.0024994888986249906,
			distanceSpeed: -0.015225342337813013,
			rflag: 65860,
			graha: 'Ju',
			isRetrograde: false,
			nakshatra: { name: 'Uttara Aashada', pada: 2 },
			rashi: 'Cp'
		},

		Sa: {
			longitude: 277.7940907686863,
			latitude: -0.11115634321854116,
			distance: 9.737752956169963,
			longitudeSpeed: 0.009263651156424007,
			latitudeSpeed: -0.0015380117980703118,
			distanceSpeed: -0.01623744432683592,
			rflag: 65860,
			graha: 'Sa',
			isRetrograde: false,
			nakshatra: { name: 'Uttara Aashada', pada: 4 },
			rashi: 'Cp'
		},

		Ra: {
			longitude: 67.46107585537935,
			latitude: 2.417547070067896e-15,
			distance: 0.0025695552897999907,
			longitudeSpeed: -0.052992017997940524,
			latitudeSpeed: 1.818760271175542e-51,
			distanceSpeed: 3.4416214492528266e-72,
			rflag: 65858,
			graha: 'Ra',
			isRetrograde: true,
			nakshatra: { name: 'Ardra', pada: 1 },
			rashi: 'Ge' 
		},

		Ke: { 
			graha: 'Ke',
			isRetrograde: true,
			longitude: 247.46107585537936,
			nakshatra: { name: 'Mula', pada: 3 },
			rashi: 'Sg'
		},

		La: {
			graha: 'La',
			longitude: 151.33717452637387,
			isRetrograde: true,
			nakshatra: { name: 'Uttara Phalguni', pada: 2 },
			rashi: 'Vi' }
		}
	}

module.exports = sampleData;