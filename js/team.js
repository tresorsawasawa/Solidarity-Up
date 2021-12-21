const teamMemberData = [
  {
    id: 1,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
  {
    id: 2,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
  {
    id: 3,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
  {
    id: 4,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
  {
    id: 5,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
  {
    id: 6,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci officia mollitia voluptatibus provident praesentium.',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
];
const membersList = document.querySelector('.team-members');
const seeMore = document.querySelector('.see-more .btn');
// const seeMoreText = document.querySelector('.btn .btn-detail');
const seeLess = [teamMemberData[0], teamMemberData[1]];

seeLess.forEach((member) => {
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

let state = true;

seeMore.addEventListener('click', () => {
  if (state) {
    membersList.innerHTML = '';
    teamMemberData.forEach((member) => {
      const allList = membersList;
      allList.innerHTML += `<li class="member">
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
      // seeMoreText.innerText = 'See More';
      seeMore.innerHTML = '<span class="btn-detail">HIDE</span><span><i class="fa fa-chevron-up"></i></span>';
    });
    state = false;
  } else {
    membersList.innerHTML = '';
    seeLess.forEach((member) => {
      const reducedList = membersList;
      reducedList.innerHTML += `<li class="member">
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
    seeMore.innerHTML = '<span class="btn-detail">MORE</span><span><i class="fa fa-chevron-down"></i></span>';
    state = true;
  }
});
