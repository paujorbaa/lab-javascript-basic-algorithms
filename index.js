// Iteration 1: Names and Input
let hacker1 = "John"
console.log("The driver's name is " + hacker1)
let hacker2 = "Bobby"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
// 3.1
let result = "";

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}

// 3.2
console.log(result)

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
} 

// 3.3
let minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else if (i === minLength - 1) {
    if (hacker1.length === hacker2.length) {
      console.log("What?! You both have the same name?");
    } else if (hacker1.length < hacker2.length) {
      console.log("The driver's name goes first.");
    } else {
      console.log("Yo, the navigator goes first, definitely.");
    }
  }
}


// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nunc eros. Nulla pretium feugiat tellus. Vivamus dictum dapibus pellentesque. Vivamus sodales auctor metus, in posuere mi suscipit vel. Donec hendrerit sem eget mauris venenatis feugiat. Cras feugiat sapien sed magna elementum, tristique eleifend velit luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque in nunc vel est sodales sagittis. Morbi nec efficitur nisi. In quis purus nunc. Mauris euismod sollicitudin mattis. Integer sapien lectus, iaculis sit amet nulla non, commodo volutpat est. Curabitur at sapien eget libero aliquet volutpat. Curabitur consectetur quam at feugiat dictum. Maecenas iaculis enim in posuere dictum. Aenean id laoreet sapien. Praesent tincidunt risus ac facilisis iaculis. Donec sollicitudin dolor eget risus viverra ornare. Proin feugiat est non urna efficitur malesuada. Morbi sit amet justo sed odio mattis fermentum. Integer quis justo pharetra, congue nibh vel, tincidunt nulla. Suspendisse vel dui sed velit tempor imperdiet at quis massa. Morbi sit amet libero congue, fermentum lorem eu, porttitor leo. Cras consectetur pharetra ultricies. Nullam eleifend ante non tincidunt consectetur. Nulla facilisi. Proin aliquam metus augue, in iaculis elit tincidunt non. Vestibulum commodo diam sit amet accumsan porta. Sed nec nisl venenatis, vehicula nulla in, elementum arcu."

const count = (longText) => longText.trim().split(/\s+/).length;

console.log(count(longText))

const et="et"

const countEt = (longText.match(/\bet\b/g) || []).length;

console.log(countEt);

// Bonus 2

phraseToCheck = "Amor, Roma";

let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {  
    cleanPhrase += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanPhrase.length; i++) {
  let j = cleanPhrase.length - 1 - i;
  if (i >= j) {
    break; 
  }
  if (cleanPhrase[i] !== cleanPhrase[j]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It is a palindrome!");
} else {
  console.log("Not a palindrome.");
}