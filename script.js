const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.content-container');

/* Active id tab */
let active = 1;

const panelData = [
   `
   <h1>Lorem, ipsum.</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit illo nesciunt nobis rerum!</p>
   <h2>Lorem, ipsum dolor.</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil illum reprehenderit labore rem, odit provident temporibus excepturi facere officia, deserunt enim architecto doloremque neque doloribus nisi dolore consectetur esse! Nobis expedita repellendus quo?</p>
   <h4>Lorem ipsum dolor sit.</h4>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum excepturi earum? Modi ex commodi ducimus, quae sit nostrum consequatur nesciunt! Eius assumenda, fuga necessitatibus quos, qui nesciunt inventore aliquam odio quam temporibus ducimus.</p>
   <h2>Lorem, ipsum dolor.</h2>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error debitis natus aperiam provident modi tenetur? Excepturi quae quibusdam recusandae cum perspiciatis molestias cumque, facilis distinctio ipsum aliquam fugiat qui! Iure error magnam omnis.</p>
   <h4>Lorem, ipsum dolor.</h4>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum velit voluptate, suscipit dolore nemo? Labore rerum assumenda aut! Quod officia explicabo exercitationem architecto, blanditiis temporibus fugiat vel nostrum nulla, autem fugit aperiam maxime.</p>
   `,
   `
   <h1>Lorem, ipsum.</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur esse fugiat quia provident, ipsum placeat odit illum molestias sit beatae eos quam excepturi.</p>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta?</p>
   <img src="/imgs/fasb9osp2h751 (2).jpg" alt="img">
   <img src="/imgs/fc1efbda616c9238c49d1476e593c582 (2).jpg" alt="img">
   <img src="/imgs/image (2).jpg" alt="img">   
   `,
   `
   <h1>Lorem, ipsum dolor.</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, mollitia quae. <b>ipsum</b> Lorem, ipsum dolor.</p>
   <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
   </ul>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque.</p>
   `
];

/* Sets menu content to inital page, this will serve to set the contaiers inner html to the panel that matches */

container.innerHTML = `
   <div class ="panel">
      ${panelData[active]}
   </div>
`;

/* loops through tabs */
for (let i = 0; i < tabs.length; i++) {
   tabs[i].addEventListener('click', () => {
      /* sets active to current tab index */
      active = i;
      /* resets menu content on tab click */
      container.innerHTML = `
         <div class ="panel">
            ${panelData[active]}
         </div>
      `;
      /* Remove transition */
      container.style.transition = "none";
      /* Hides the container */
      container.style.opactiy = "0";
      /* Loop through tabs again to reset active css on clicked tab by removing class*/
      for (let i = 0; i < tabs.length; i++) {
         /* This removes the class */
         tabs[i].classList.remove('active');
      }
      /* This wil add active class to clicked tab */
      tabs[i].classList.add('active');
      /* Waits 100ms before running the code inside */
      setTimeout(() => {
         container.style.transition = "300ms";
         /* Shows container */
         container.style.opactiy = "1";
      }, 100);
   });
}