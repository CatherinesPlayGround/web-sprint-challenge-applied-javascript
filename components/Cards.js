// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const card = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(art => {
const dataKeys =Object.keys(art.data.articles) 
     for (let i = 0; i <dataKeys.length; i++) { //loops through object
     const type = dataKeys[i]; 
     art.data.articles[`${type}`].forEach(article => {
     card.appendChild(articleMaker(article))
})
}
});


function articleMaker(obj){

//Creating DOM Elements
	const  	cardDiv 		= document.createElement('div');	
	const  	headlineDiv	= document.createElement('div');	//   <div class="headline">{Headline of article}</div>
	const  	authorDiv		= document.createElement('div');	//   <div class="author">
	const  	imgDiv		= document.createElement('div');	//     <div class="img-container">
	const  	imgLink		= document.createElement('img');	//       <img src={url of authors image} />
													//	  </div>
	const  	nameSpan		= document.createElement('span');	//     <span>By {author's name}</span>
													//   </div>
													// </div>
//Adding Structure
									// <div class="card">
	cardDiv.appendChild(headlineDiv);       //   <div class="headline">{Headline of article}</div>
	cardDiv.appendChild(authorDiv);         //   <div class="author">
	authorDiv.appendChild(imgDiv);          //     <div class="img-container">
	imgDiv.appendChild(imgLink);            //       <img src={url of authors image} /> 
									//	  </div>
	authorDiv.appendChild(nameSpan);        //     <span>By {author's name}</span>
									//   </div>
									// </div>

//Adding Classes
     cardDiv.classList.add('card');		//<div class="card">
     headlineDiv.classList.add('headline');	//<div class="headline">
     authorDiv.classList.add('author');		//<div class="author">
     imgDiv.classList.add('img-container');	//<div class="img-container">

//Adding Content
	headlineDiv.textContent 	= obj.headline; 	//<div class="headline">{Headline of article}</div>
     //not sure why these img are not populating on server, links look good in inspect.
     imgLink.src			= obj.authorPhoto;	//<img src={url of authors image} />
	nameSpan.textContent	= obj.authorName;	//<span>By {author's name}</span>

// Add a listener for click events so that when a user clicks on a card
     cardDiv.addEventListener('click', ()=>{
          console.log(obj.headline);
     })
//Test/Return
	//console.log(cardDiv);
	return cardDiv;
}

