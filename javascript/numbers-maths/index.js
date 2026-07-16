
// Lesson 2 practice - Maths and number.

// 2, 3, 4 - numbers
// 2.2, 0.4 - floating point numbers(floats)

// Order of operation - Multiple(*), Divide(/), Adding(+) and Subtracting(-)

// Multiple(*), Divide(/) - Same priority (If both present than it will work from left to right)
// Adding(+) and Subtracting(-) - Same priority (If both present than it will work from left to right)

// Bracket operation will perform fisrt ()

// Final order of operation
// 1 ()
// 2 * /
// 3 + -

10 + 10; //20

0.4 + 8.10; //8.50

4 * 2 + 8 * 3 //32

4 * 4 / 8; //2
4 / 4 * 8; //8


4 + 4 * 8; //36
(4 + 4) * 8; //64

0.1 + 0.2 //0.30000000000000004 - it is happned for some of the float not for all the floats
20.95 + 7.99 //28.939999999999998

// why because computer store float different like
// 2 - 10
// 10 - 1010
// 0.2 - 0.020001

// How we can avoid the multiple number after the decimal
// you can calculate the with cents //Convert dollars to cents in JavaScript like

20.95 + 7.99 //28.939999999999998
(2095 + 799) / 100 //28.94 //// 100 cents in 1 dollars 

// how to round the number

Math.round(20.95 + 7.99) // 29

Math.round((20.95 + 7.99) * 100) / 100 // 28.94

// Exercises
// Lesson 2 Exercises - Numbers and Math

// 2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.

// 10 * 1 + 8 * 3 + 5 * 1 //39 

// 2b. You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.

3 * (10 * 1 + 8 * 3 + 5 * 1 ) //117

// 2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each). 

18.50  + 2 * 7.50 //33.5

// 2d. Calculate a 10% tax for the total in exercise 2c.

33.5 + 10 / 100 // 33.6

// 2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, so 20% = 20 / 100 = 0.2).

33.5 + 20 / 100 // 33.7

// Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.

(1899 + price_of_tshirt + toaster ) / 100

// 2f. Calculate the cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuracies.

(1899 + 100 + 200 ) / 100 //21.99

// 2g. Calculate the Total before tax.

18.99 + 10.0 + 20.0 //48.989999999999995
Math.round((18.99 + 10.0 + 20.0) * 100) / 100 // to make it 48.99

// 2h. Calculate the 10% tax exactly. Hint: use Math.round()

Math.round(18.99 + 10.0 + 20.0) * 10/100 // 4.9
Math.round((1899 + 1000 + 2000) * 0.1) / 100

// 2i. Calculate Order total at the bottom.
// Order Summary
// Items (3):
// $47.93
// Shipping & handling:
// $4.99
// Total before tax:
// $52.92
// Estimated tax (10%):
// $5.29
// Order total:
// $58.21
// Finish: after finishing 2i remove the toaster from your cart.

Math.round(47.93 + 4.99 + 52.92 + 5.29)
Math.round(4793 + 499 + 5292 + 529) / 100 //111.13

// 2j. Let's say we want to always round a number down (2.8 => 2) Using Google or an A.I. tool, search for the code to do this.

Math.floor(7.004) //7

// 2k. Let's always round a number up (2.2 => 3). Search how to do this.

Math.ceil(7.004) //8

// Challenge Exercises // We'll use JavaScript to convert temperatures from Celsius (°C) to Fahrenheit (°F). The formula is:
// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit - 32) * 5/9
// 21. The temperature is 25°C. Calculate the temperature in Fahrenheit. (77) 

// Fahrenheit = (Celsius * 9/5) + 32
    Fahrenheit = (25 * 9/5) + 32 // 77

// 2m. The temperature is 86°F. Calculate the temperature in Celsius. (30) 

    Celsius = (Fahrenheit - 32) * 5/9
    Celsius = (86 - 32) * 5/9 //30

// 2n. The temperature is -5°C. Calculate the temperature in Fahrenheit. (23)

    Fahrenheit = (-5 * 9/5) + 32 // 23

