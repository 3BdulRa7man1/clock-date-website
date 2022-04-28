// created by Abdulrahman Tayel 
// Tuesday, January 12, 2021
// at Home in the livingroom on the couch.

document.addEventListener('DOMContentLoaded',function myClock() {

  // we make a new date opject. 
    var Clock = new Date();

  // here we get hours, minuts and seconds.
    var hours = Clock.getHours();
    var mins = Clock.getMinutes();
    var seconds = Clock.getSeconds();

  // if bigger than 12 it become Pm if less it is Am.
    var AmPm = (hours < 12) ? 'am': 'pm';

  // the hours after 12 Pm become 1 , 2 and like that
    hours = (hours > 12) ? hours - 12 : hours;

  // to just get 2 digits without the 0 if the hours, minutes and seconds is bigger than 2 digits
    hours = ('0' + hours).slice(-2);
    mins = ('0' + mins).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    $time = `${hours}  :  ${mins}  :  ${seconds} ${AmPm}`;

  // here I add the time to its place in the HTML tag
    document.getElementById('clock').innerText = $time;

  // to refresh the time every 1 second
    var t = setTimeout(function(){myClock() }, 1000);

});


document.addEventListener('DOMContentLoaded',function TheDate() {
    var dateOpject = new Date();

    var dayIndex = dateOpject.getDate();
    var dayNum = dateOpject.getDay();
    var day = '';
    switch (dayNum) {
        case 0:
            day = "Sunday";
          break;
        case 1:
            day = "Monday";
          break;
        case 2:
            day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }


    var monthNum = dateOpject.getMonth();
    var month = '';
    var YearMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    switch (monthNum) {
        case 0:
           month = YearMonths[0];
          break;
        case 1:
            month = YearMonths[1];
          break;
        case 2:
            month = YearMonths[2];
          break;
        case 3:
            month = YearMonths[3];
          break;
        case 4:
            month = YearMonths[4];
          break;
        case 5:
            month = YearMonths[5];
          break;
        case 6:
            month = YearMonths[6];
        case 7:
           month = YearMonths[7];
          break;
        case 8:
            month = YearMonths[8];
          break;
        case 9:
            month = YearMonths[9];
          break;
        case 10:
            month = YearMonths[10];
          break;
        case 11:
            month = YearMonths[11];
          break;
      }


    

    var Year = dateOpject.getFullYear();

    theRealDate = day +', '+ '  '+ month + '  '+ dayIndex + ',  '+ Year;
    console.log(theRealDate)
    document.getElementById('date').innerText = theRealDate;
});
