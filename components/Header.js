// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the npm

function Header() {
	
	//Creating DOM Elements
		const	headerDiv	=	document.createElement('div');	//  <div class="header">
		const	dateSpan	=	document.createElement('span');	//    <span class="date">MARCH 28, 2020</span>
		const	titleH1	=	document.createElement('h1'); 	//    <h1>Lambda Times</h1>
		const	tempSpan	=	document.createElement('span')	//    <span class="temp">98°</span>
														//  </div>

	//Adding Classes
		headerDiv.classList.add('header');		//  <div class="header">
		dateSpan.classList.add('date');		//    <span class="date">MARCH 28, 2020</span>
										//    <h1>Lambda Times</h1>
		tempSpan.classList.add('temp');		//    <span class="temp">98°</span>
										//  </div>

	//Adding Content
											//  <div class="header">
		dateSpan.textContent = 'MARCH 28, 2020'; 	//    <span class="date">MARCH 28, 2020</span>
		titleH1.textContent = 'Lambda Times'; 		//    <h1>Lambda Times</h1>
		tempSpan.textContent = '98°'; 			//    <span class="temp">98°</span>
											//  </div>

	//Adding Structure
											//  <div class="header">
		headerDiv.appendChild(dateSpan);			//    <span class="date">MARCH 28, 2020</span>
		headerDiv.appendChild(titleH1);			//    <h1>Lambda Times</h1>
		headerDiv.appendChild(tempSpan);			//    <span class="temp">98°</span>
											//  </div>
	
	//Testing and Return
	console.log(headerDiv);
	return (headerDiv)

}
const headerCon	= document.querySelector('.header-container')	
headerCon.appendChild(Header());
