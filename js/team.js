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
  const card = document.createElement('li');
  card.className = 'members-item';
  card.innerHTML = `<div class="card-img">
                      <img class="profile-img" src=${member.profilePicture} alt="Profile Pic"> 
                      <img class="bg-img" src="./images/bg-grid.jpg" alt="Background-grid Pic"> 
                    </div>
                    <div class="card-info">
                      <h2>${member.names}
                      <h3>${member.about}
                      <p>${member.work}></p>
                    </div>
                  `;
});
