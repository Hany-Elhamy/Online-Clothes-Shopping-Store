function isValidEmail(email) 
{
    if (typeof email !== "string") {
        return false;
      }
    var reg = /^[a-zA-Z][a-zA-Z0-9._-]{4,}@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}$/;
        if(email.match(reg))
        {
        return true;
        }
        else
        {
        return false;
        }
}


console.log(isValidEmail("myEmail1@email.com")); // true
console.log(isValidEmail("my.Email1@e-mail.com")); // true
console.log(isValidEmail("myEmail1@email.c")); // false
console.log(isValidEmail("m@email1.com")); // false
console.log(isValidEmail(1)); // false
console.log(isValidEmail(true)); // false
console.log(isValidEmail("myEmail1@com")); // false
console.log(isValidEmail("my_Email1@e.com")); // true
console.log(isValidEmail("1m@email.com")); // false
console.log(isValidEmail("my!Email@email.com")); // false


function isAgeOfMajority(birthYear, birthMonth, birthDay) {
    if (typeof birthYear !== "number" || birthYear < 1920 || birthYear > 2010) {
      return false;
    }
    if (typeof birthMonth !== "number" || birthMonth < 1 || birthMonth > 12) {
      return false;
    }
    if (typeof birthDay !== "number" || birthDay < 1 || birthDay > 31) {
      return false;
    }
  
    const TODAY = new Date();
    const birthdate = new Date(`${birthMonth}/${birthDay}/${birthYear}`);
  
    // Q1)return values from the date constructor:
    // (invalid date) if the string passed to the constructor is not a valid format
    // (date object) if the string represents a valid date
  
    //Q2) because the date constructor expects a string in that format when creating a date object.
  
    const isLeapYear = (birthYear % 4 == 0 && birthYear % 100 != 0) || birthYear % 400 == 0;
    const lastDayOfMonth = new Date(birthYear, birthMonth, 0).getDate();
    const isBDValid = (birthDay <= lastDayOfMonth) && ((birthMonth != 2) || (birthDay <= 28 + isLeapYear));
  
    if (!isBDValid) {
      return false;
    }

    const ageDiffInDays=(TODAY-birthdate)/(1000*60*60*24);
    // check age is greater than 18 years
    if (ageDiffInDays > 6570) {
      return true;
    } 
    else {
      return false;
    }
  }


console.log(isAgeOfMajority(2005,2,25)); // true – just old enough
console.log(isAgeOfMajority(1997,2,29)); // false – not a leap year
console.log(isAgeOfMajority(2008,5,1)); // false
console.log(isAgeOfMajority(2000,1,1)); // true
console.log(isAgeOfMajority(1980,12,31)); // true
console.log(isAgeOfMajority("1980","12",31)); // false – wrong data type in parameter
  