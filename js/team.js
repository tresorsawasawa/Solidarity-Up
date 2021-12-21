// const menu = document.querySelector('.menu');
// const close = document.querySelector('.close-menu');
const membersList = document.querySelector('.team-members');
const navItem = document.querySelectorAll('.nav-item .nav-item a');

const teamMemberData = [
  {
    id: 1,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
];

teamMemberData.forEach((member) => {
  membersList.innerHTML += `<li class="member">
                    <div class="card-img">
                      <img class="profile-img" src=${member.profilePicture} alt="Profile Pic"> 
                      <img class="bg-img" src="./images/bg-grid.png" alt="Background-grid Pic"> 
                    </div>
                    <div class="card-info">
                      <h2>${member.names}</h2>
                      <h3>${member.about}</h3>
                      <p>${member.work}</p>
                    </div>
                  </li> `;
});

