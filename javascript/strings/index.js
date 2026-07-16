
// Lesson 3 practice - strings

// javascript order in left to righ

// syntax rule of string

// in console

'Hello'
const { escape } = require("querystring")

 // Hello

'Rahul' + 'Yadav' //RahulYadav (Concatenation)

typeof 2 //number
typeof 'Hello' //string
typeof '2' //string

'Rahul' + 4 //Rahul4 (Type coercion) - automatic type conversion

'$' + 20.95+ 7.9 //'$20.957.99'
'$' + (20.95+ 7.99) //'$28.939999999999998'

'$' + ((2095+ 799) / 100) //'$28.94'

// how we can show - items(2): $28.94

'items (' + ( 1 + 1) + '): $' + ((2095+ 799) / 100) //'items (2): $28.94'

// \n - create newline chracter

alert('Rahul\nYadav') //show alert popup, text with 2 line Rahul and Yadav in next line 

// chracters are 

//      letter (a, b, c)
//      number (1, 2,)
//      symbol (!, @, #)
//      escape Character (\`, \", \n) - it also count as one character in string

// 3 way to create a string

    //1. with single quote (Preferrable )
    'Rahul' //Rahul

    //2. with double quote 
    "Rahul" //Rahul

        // when to use double quote
        // Issue - 'I'm leaning Javascript' // => Uncaught SyntaxError: Unexpected identifier
        "I'm leaning Javascript" //"I'm leaning Javascript"

        // One more way to do that same
        // Escape character
        // character = 1 letter/number/symbol

            'I\'m leaning Javascript' //"I'm leaning Javascript"
            `I'm leaning Javascript` //"I'm leaning Javascript"

    //3. backtick (below the escpae) - template string (`...`) - Interpolation = insert value directly into a string

        `I'm leaning Javascript` //"I'm leaning Javascript"

        // Interpolation = insert value directly into a string
        'items (' + ( 1 + 1) + '): $' + ((2095+ 799) / 100) //'items (2): $28.94' - concatenation
        `items (${1 + 1}): $' ${(2095+ 799) / 100}`  //"items (2): $' 28.94" - Interpolation

        //Multi line string
        `Rahul
        Yadav` //Rahul\nYadav

// What should we use to create a string?

    // Use '...' by default
    // If we need interpolation, multi-line strings use `...`

// ------------------------------------------------------------------------------------

// Lesson 3 Exercises - Strings

// 3a. Create the text 'My name is: ' as a string.

'My name is: ' //'My name is: '

// 3b. Create your name as a string (for example: 'Simon').

'RY' //'RY'

// 3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is: ______' (replace with your name).

'My name is: ' + 'RY' //'My name is: RY'

// 3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $_____' (replace with the total you calculated).

// Total cost: $_____
'Total cost: $'+ (5 + 3) //'Total cost: $8'


// 3e. Do the same thing as 3d, but use a template string and interpolation.

`Total cost: $${(5 + 3)}` //'Total cost: $8'

// 3f. Display the text from 3e in a popup using alert(...);

alert(`Total cost: $${(5 + 3)}`);

// 3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text:
// 'Total cost: $_____' (hint: calculate in cents to avoid inaccuracies)

'Total cost: $'+ (599 + 295) / 100 //'Total cost: $8.94'

// 3h. Do the same thing as 3g, but use a template string and interpolation.

`Total cost: $${(599 + 295) / 100}` //'Total cost: $8.94'

// 3i. Display the text from 3h in a popup.

alert(`Total cost: $${(599 + 295) / 100}`)

// 3j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.
// Total cost: $8.94
// Thank you, come again!
// OK

alert(`Total cost: $${(599 + 295) / 100}\nThank you, come again! \nOK`)

// Challenge Exercises
// Setup: in the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.
// Items (4): $57.88
// Shipping & handling: $9.98
// Total before tax: $67.86
// Estimated tax (10%): $6.79
// Order total: $74.65
// 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

// Items (4):
'Items ('+ (1 * 2 + 1 * 2) + '): $' + ((2095 * 2) + (799 * 2)) / 100 //'Items (4): $57.88'
`Items (${(1 * 2 + 1 * 2)}): $${((2095 * 2) + (799 * 2)) / 100}` //'Items (4): $57.88'

// 31. Create second line of text: 'Shipping & handling: $9.98' (use math).

'Shipping & handling: $' + (499 + 499) / 100 //'Shipping & handling: $9.98'
`Shipping & handling: $${(499 + 499) / 100}` //'Shipping & handling: $9.98'

// 3m. Create third line: 'Total before tax: $67.86' (use math).

'Total before tax: $' + (((2095 * 2) + (799 * 2)) / 100 + (499 + 499) / 100) //'Total before tax: $67.86
`Total before tax: $${(((2095 * 2) + (799 * 2)) / 100 + (499 + 499) / 100)}` //'Total before tax: $67.86'

'Total before tax: $' + ((2095 * 2 + 799 * 2 + 499 + 499) / 100) //'Total before tax: $67.86


// 3n. Create fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round(...); to calculate the exact number).

'Estimated tax (10%): $' + (Math.round((2095 * 2 + 799 * 2 + 499 + 499) * 0.1) / 100)//'Estimated tax (10%): $6.79'
`Estimated tax (10%): $${(Math.round((2095 * 2 + 799 * 2 + 499 + 499) * 0.1) / 100)}`//'Estimated tax (10%): $6.79'

// Finish: change the cart back to 1 basketball, 1 t-shirt (both free shipping).

'Total before tax: $' + (2095 + 799) / 100 //'Total before tax: $28.94'

