// =============================
// LOAN QUALIFICATION REQUIREMENTS
// =============================

// Minimum income and credit score required for a duplex loan
// If the applicant qualifies for duplex, they automatically qualify for condo and car loans.
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

// Minimum income and credit score required for a condo loan
// If qualified, the applicant can get a condo and car loan.
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

// Minimum income and credit score required for a car loan
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;


// =============================
// FUNCTION: getLoanMessage
// =============================

// This function checks the applicant's annual income and credit score
// to determine what type of loan they qualify for.
//
// Parameters:
// annualIncome -> the applicant's yearly income
// creditScore  -> the applicant's credit score
function getLoanMessage(annualIncome, creditScore) {

  // First check:
  // Does the applicant qualify for a duplex loan?
  //
  // >= means "greater than or equal to"
  //
  // && means "AND"
  // Both conditions must be TRUE:
  // 1. Credit score must be 700 or higher
  // 2. Income must be 60000 or higher
  if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {

    // return sends this message back to where the function was called
    return "You qualify for a duplex, condo, and car loan.";

  } 
  
  // If duplex condition is false, check condo loan.
  //
  // Requirements:
  // 1. Income must be 45000 or higher
  // 2. Credit score must be 680 or higher
  else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {

    return "You qualify for a condo and car loan.";

  } 
  
  // If duplex and condo conditions are false,
  // check if applicant only qualifies for a car loan.
  //
  // Requirements:
  // 1. Income must be 30000 or higher
  // 2. Credit score must be 650 or higher
  else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {

    return "You qualify for a car loan.";

  } 
  
  // If none of the conditions above are true,
  // the applicant does not qualify for any loan.
  else {

    return "You don't qualify for any loans.";

  }
}


// =============================
// TESTING THE FUNCTION
// =============================

// Applicant 1:
// Income = 85000
// Credit Score = 850
// Passes duplex requirements
const duplexLoanMsg = getLoanMessage(85000, 850);


// Applicant 2:
// Income = 65000
// Credit Score = 690
// Fails duplex but passes condo requirements
const condoLoanMsg = getLoanMessage(65000, 690);


// Applicant 3:
// Income = 45000
// Credit Score = 660
// Fails duplex and condo but passes car requirements
const carLoanMsg = getLoanMessage(45000, 660);


// Applicant 4:
// Income = 25000
// Credit Score = 550
// Does not meet any loan requirements
const noLoanMsg = getLoanMessage(25000, 550);


// =============================
// DISPLAY RESULTS
// =============================

// console.log() prints the returned message in the console
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
