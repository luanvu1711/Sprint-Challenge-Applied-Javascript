// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let header = document.createElement('div');
    header.classList.add('header');

    let span1 = document.createElement('span');
    span1.classList.add('date');
    span1.textContent = 'SMARCH 28,2019';

    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98°';

    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);

    return header;
}

let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());