module.exports = function toReadable (number) {
    const numbersUpToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
          dozens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
          hundreds = ['', 'one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
  
      // make new array for split numbers to digit
    const numArray = number.toString().split('');
  
    if(number == 0){
      return 'zero';
    }else if (number < 20) {
      return numbersUpToTwenty[number];
    } else if (number >= 20 && number < 100) {
          //we can use digits for convert numbers up to hundred
      return `${dozens[numArray[0]]} ${numbersUpToTwenty[numArray[1]]}`.trim();
    } else if (number >= 100) {
      if (number % 100 == 0) {
              // find all whole hundreds
        return hundreds[number / 100]
      }
          // concat to last numbers for find them human readable value
      const dozensOfHundreds = +numArray[1].concat(numArray[2]).toString();
  
          // use recursion for find readable value up to 100
      return `${hundreds[numArray[0]]} ${toReadable(dozensOfHundreds)}`.trim();
    }
  }