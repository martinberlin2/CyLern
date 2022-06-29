// getBahndeTimeDate.js
// path home: C:\Users\laoch\OneDrive\Dokumente\Meins\Eigenes_F\auticon\Lern\Testautomatisierung\Cy\cypress\LIB
// https://www.geeksforgeeks.org/how-do-you-run-javascript-script-through-the-terminal/

// If called with an invalid date string, ... it returns a Date object whose toString() method returns the literal string Invalid Date.

// 'Mo, 27.06.2022' bei bahn.de 
// Mon Jun 27 2022 15:52:05 GMT+0200 (Mitteleuropäische Sommerzeit)    JS Default 

function now() { //returns: Struct; .date = 'Mo, 27.06.2022' , .time = 15:52 wie auf bahn.de, Zeitpunkt des Aufrufs
   var dateobj = new Date();   //  das gibt today !
   // var B = dateobj.toString();    // Mon Jun 27 2022 15:52:05 GMT+0200 (Mitteleuropäische Sommerzeit)
   var bahndate = dateObjToBahnTimeAndDate(dateobj);
   console.log(bahndate.date)
   console.log(bahndate.time)
   return bahndate
}

function dateObjToBahnTimeAndDate(d) { //returns: Struct; .date = 'Mo, 27.06.2022' , .time = 15:52 wie auf bahn.de, von new Date(...) Objekt
	
	var B = d.toString(); 
	arr = B.split(' ', 5)   // Mon,Jun,27
	let datestr = ''
	// datestr = '' , anhaengen:
	// Mon --> Mo
	let s = arr[0][0] + arr[0][1]
	datestr = datestr + s + ', '
	// Tag unveraendert (führende Null ??)
	s = arr[2]
	datestr = datestr + s + '.'
	// Jun --> 06
	month = d.getMonth() + 1;
	s = month.toString();
	if (month < 10)
		s = '0' + s;
	datestr = datestr + s + '.'
	// Jahr unveraendert
	s = d.getYear() + 1900;
	datestr = datestr + s
	
	// 15:52:05 --> 15:52
	let timestr = '';
	let i = 0;
	while(i<5) {
		timestr = timestr + arr[4][i]
		i++
	}
	// return datestr und timestr 	
	let answer = {}
	answer.date = datestr
	answer.time = timestr
	return answer
}

// let erg = now()
