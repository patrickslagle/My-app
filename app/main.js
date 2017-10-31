window.onload = () => {
  /**
   * Almost all of your code should go here. You can render both HTML elements & create all JavaScript logic.
   * If you want to add HTML simply by creating HTML tags, you need to do that in your 'Index.html' file.
   * Don't be confused by any terminology I utilize in the sample code, CONST/LET is the same thing as VAR for variables
   * Below is an example of how to create an element, give it an ID and render it to the page...
   */

  // Retrieving the pre-built first element in your HTML page.
  const container = document.getElementById('container');
  /* This next block of code creates an H1 tag */
  const sampleh1 = document.createElement('h1');
  sampleh1.innerHTML = 'Your First Application';
  container.appendChild(sampleh1);
  /* This next block of code creates a div tag */
  const sampleDiv = document.createElement('div');
  sampleDiv.setAttribute('id', 'test');
  container.appendChild(sampleDiv);


  const sampleArray = ['darrick', 'chris', 'patrick'];
  const sampleImageCache = {
    darrick: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
    chris: 'https://thumb7.shutterstock.com/display_pic_with_logo/64778/634117829/stock-photo-two-fidget-spinners-634117829.jpg',
    patrick: 'http://images6.fanpop.com/image/photos/36500000/Patrick-is-a-boss-patrick-star-spongebob-36522145-295-450.jpg',
  };

  /*
   * This next block of code loops through the array I defined in Line 9 &
   * and creates an Image for each item that matches the URL in the cache by key
  */
  for (let i = 0; i < sampleArray.length; i += 1) {
    let sampleImage = document.createElement('img');
    sampleImage.src = sampleImageCache[sampleArray[i]];
    sampleImage.setAttribute('class', 'img');
    sampleDiv.appendChild(sampleImage);
  }

  let count = 0;
  const sampleDiv2 = document.createElement('div');
  sampleDiv2.setAttribute('id', 'counter');
  container.appendChild(sampleDiv2);

  const sampleh2 = document.createElement('h2');
  sampleh2.innerHTML = count;
  sampleDiv2.appendChild(sampleh2);

  const addButton = document.createElement('button');
  const subtractButton = document.createElement('button');
  addButton.setAttribute('class', 'button');
  subtractButton.setAttribute('class', 'button');
  addButton.innerHTML = '++';
  subtractButton.innerHTML = '--';

  /**
   * This is an ES6 Arrow Function ... the syntax you are familiar with is as follows:
   * addButton.onClick = function () {
   *     // etc etc etc
   * }
   */
  addButton.onclick = () => {
    count += 1;
    sampleh2.innerHTML = count;
  };
  subtractButton.onclick = () => {
    count -= 1;
    sampleh2.innerHTML = count;
  };

  sampleDiv2.appendChild(addButton);
  sampleDiv2.appendChild(subtractButton);
}
