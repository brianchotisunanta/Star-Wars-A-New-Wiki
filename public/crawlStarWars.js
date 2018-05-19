// Javascript for Star Wars intro logo on home.html

// var byline = document.getElementById('byline');  	// Find the H2
// bylineText = byline.innerHTML;										// Get the content of the H2
// bylineArr = bylineText.split('');									// Split content into array
// byline.innerHTML = '';														// Empty current content
//
// var span;					// Create variables to create elements
// var letter;
//
// for(i = 0; i < bylineArr.length; i++){									// Loop for every letter
//   span = document.createElement("span");					// Create a <span> element
//   letter = document.createTextNode(bylineArr[i]);	// Create the letter
//   if(bylineArr[i] == ' ') {												// If the letter is a space...
//     byline.appendChild(letter);					// ...Add the space without a span
//   } else {
// 		span.appendChild(letter);						// Add the letter to the span
//   	byline.appendChild(span); 					// Add the span to the h2
//   }
// }


// My jQuery version:
var byLine = $('#byline').html('');
var byLineArray = $('byline').split('');
var emptyByLineArray = $('byline').html('');

var span;
var letter;

for(var i = 0; i < byLineArray; i++) {
  span = $('body').append('span');
  letter = $('body').append(byLineArray[i]);
    if (byLineArray[i] == " ") {
      $('byLine').append('letter');
    }
    else {
      $('span').append('letter');
      $('byLine').append('span');
    }
}
