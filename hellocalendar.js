
$(document).ready(function(){

	var today = new Date();
	var month = today.getMonth()+1;
	var year = today.getFullYear();

	drawCalendar(year, month);

	$('#btn1').on('click', function(){
		if(month>1){
			month--;
		}else{
			month = 12;
			year--;
		}
		drawCalendar(year, month);
	});

	$('#btn2').on('click', function(){
		if(month<12){
			month++;
		}else{
			month = 1;
			year++;
		}
		drawCalendar(year, month);
	});


}); //end of document ready function (DOM)

//function

function drawCalendar(year, month){

	var weekday =  ['sun','mon','tue','wed','thu','fri','sat'];
	var month_name =  ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

	var days = create_days(year, month);

	var s = '<table><tr><td colspan="7" class="title">' + year + '年 ' + month_name[month-1] +'</td></tr><tr>';
	for(var i in weekday){
		s += '<td class="weekday">'+weekday[i]+'</td>';
	} s += '</tr>';
	
	for(var i=0;i<days.length;i++){
  		if (i%7==0) s += '<tr>';
  		s+= get_memories(month, days[i]);
  		if (i%7==6) s += '</tr>';
	}


	s += '</table>';

	$('#cal').html(s);
}

function create_days(year, month){

	var days = [];
	
	var d = new Date(year,month-1);
	var n = d.getDay();
	var d2 = new Date(year, month, 0);
	var last_day = d2.getDate();

	if(n != 0){for(var i=0;i<n;i++){days.push('');}}
	for(var i=1;i<=last_day;i++){days.push(i);}
	while(days.length%7 !=0){days.push('');}

	return days;


}

function get_memories(month, date){

	for(var i=0; i<kinenbi.length;i++){
		if(month==kinenbi[i][0]){
			if(date==kinenbi[i][1]){
				if(kinenbi[i][2].includes('BD')){
					return '<td class="birthday">'+date+'<br/>'+'<span class="k">'+kinenbi[i][2]+'</span>'+'</td>';
				}else{
					return '<td class="kinenbi">'+date+'<br/>'+'<span class="k">'+kinenbi[i][2]+'</span>'+'</td>';
				}
				
			}
		}
	}
	return '<td>'+date+'</td>';
}


