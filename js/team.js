const teamMemberData = [
  {
    id: 1,
    names: 'Tresor Sawasawa',
    profilePicture: './images/profile1.JPG',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit..',
  },
  {
    id: 2,
    names: 'Warren Buffett',
    profilePicture: './images/profile2.JPG',
    about: 'The chairman and CEO of Berkshire Hathaway.',
    work: 'Buffett calls his philanthropy “the easiest deed in the world” because “the giving is painless and may well lead to a better life for both you and your children.”.',
  },
  {
    id: 3,
    names: 'Bill Gates',
    profilePicture: './images/profile3.jpeg',
    about: 'Bill Gates the cofounder of Microsoft',
    work: 'Bill Gates now focuses most of his time on philanthropy, running the Bill & Melinda Gates Foundation alongside his wife.',
  },
  {
    id: 4,
    names: 'Hansjörg Wyss',
    profilePicture: './images/profile4.jpeg',
    about: ' The founder and the former president and chairman of Synthes USA.',
    work: 'Between 2004 and 2008, Businessweek estimated that Wyss personally donated nearly US$277 million.',
  },
  {
    id: 5,
    names: ' Jon Huntsman Sr.',
    profilePicture: './images/profile5.jpg',
    about: 'the founder and executive chairman of Huntsman Corporation.',
    work: 'Survived of prostate and mouth cancer as result of his charitable donations have been to colleges and cancer-research centers.',
  },
  {
    id: 6,
    names: 'Mark Zuckerberg',
    profilePicture: './images/profile6.jpeg',
    about: 'Facebook founder and CEO.',
    work: 'Mark Zuckerberg is one of the youngest self-made billionaires in the world. The social-media mogul has signed the Giving Pledge and promises to donate at least half of his wealth in his lifetime.',
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
      seeMore.innerHTML = '<span class="btn-detail">HIDE</span><span><i class="fa fa-chevron-up fa-2x mx-3"></i></span>';
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
    seeMore.innerHTML = '<span class="btn-detail">MORE</span><span><i class="fa fa-chevron-down fa-2x mx-3"></i></span>';
    state = true;
  }
});
