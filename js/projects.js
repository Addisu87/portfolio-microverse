const projects = [
  {
    id: 1,
    name: 'Facebook 360',
    experience: ['FACEBOOK', 'Full Stack Dev', '2018'],
    image: '/images/Snapshoot-Portfolio-1.svg',
    description:
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    popDescription:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, possimus cumque? Alias neque dolor vitae tenetur delectus culpa totam repellendus eaque, illo qui recusandae consequatur ratione, blanditiis voluptatem quidem fuga.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    experience: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: '/images/Snapshoot-Portfolio-2.svg',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    popDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, corrupti neque praesentium amet, alias rem et dolorem cum officia ad, laboriosam dignissimos veniam? Consectetur atque veniam corporis harum optio similique?',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 3,
    name: 'Tonic',
    experience: ['CANOPY', 'Back End Dev', 2015],
    image: '/images/Snapshoot-Portfolio-3.svg',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium porro temporibus consequatur veritatis sequi ullam. Optio, id non voluptatum ipsum distinctio sunt cum, obcaecati, eaque soluta iusto cupiditate tempora?',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    experience: ['Uber', 'Lead Developer', 2018],
    image: '/images/Snapshoot-Portfolio-4.svg',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    popDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias, quidem nemo sequi sint officia dignissimos adipisci iusto eos dolore cumque eius est. Iure molestias aut velit magni non autem? ',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    seeLive: '#',
    seeSource: '#',
  },
];

/* Populate object to html elements when the page loads */
for (let i = 0; i < projects.length; i += 1) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projects[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projects[i].experience.length; k += 1) {
    experienceList
      += k === 0
        ? `<li><a href="#" class="canopy">${projects[i].experience[k]}</a></li>`
        : `<li ><a href="#">${projects[i].experience[k]}</a></li>`;
    if (k !== projects[i].experience.length - 1) experienceList += '<li><a href="#"><img src="/images/Counter.png" alt="dot"></a></li>';
  }

  document.querySelector('.project-container').innerHTML += `
    <div class="project-description" id="project-1">
    <img src=${projects[i].image} alt="${projects[i].name}" >
    <div class="project-details">
        <h2>${projects[i].name}</h2>
        <ul class="experience">
          ${experienceList}
        </ul>

        <p>${projects[i].description}</p>
        <ul class="technology">
          ${tech}
        </ul>
      
        <div class="btn-project">
          <button class="btn-see-project"  data-index="${i}">
            See Project
          </button>
        </div>
     </div>  
    </div>
  `;
}

/* Begging of display popup modal */

const popupModal = document.querySelector('#projectPopup');
const displayPopupModal = (i) => {
  let techPop = '';
  let experienceList = '';

  for (let j = 0; j < projects[i].popupTech.length; j += 1) {
    techPop += `<li class="technology"><a href="#">${projects[i].popupTech[j]}</a></li>`;
  }

  for (let k = 0; k < projects[i].experience.length; k += 1) {
    experienceList
      += k === 0
        ? `<li><a href="#" class="canopy">${projects[i].experience[k]}</a></li>`
        : `<li ><a href="#">${projects[i].experience[k]}</a></li>`;
    if (k !== projects[i].experience.length - 1) experienceList += '<li><a href="#"><img src="/images/Counter.png" alt="dot"></a></li>';
  }

  document.querySelector('.projectPopup').innerHTML = `
    <div class="project-item">
      <div class="project-menu" >
        <h2>${projects[i].name}
        <span> <a onclick="closePopupModal()" href="#" class="close">&times;</a></span></h2>
      </div>

      <ul class="experience">
        ${experienceList}
      </ul>
      
      <div class="project-grid">
      <div class="image-container">
        <img src=${projects[i].image} alt="${projects.name}">
      </div>
    

      <div class="content-container">
      <p>${projects[i].popDescription}</p>
    
      <div class="right-side">
        <ul class="technology">
          ${techPop}
        </ul>
        
        <div class="btn-tags">
          <a href="${projects[i].seeLive}" class="btn-see-project">See Live<i class="fa fa-external-link" aria-hidden="true"></i>
          </a>
          <a href="${projects[i].seeSource}" class="btn-see-project">See Source<i class="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  `;
  popupModal.style.display = 'block';
};

const closePopupModal = () => {
  popupModal.style.display = 'none';
};

document.querySelectorAll('.btn-see-project').forEach((element) => element.addEventListener('click', () => {
  displayPopupModal(element.getAttribute('data-index'));
}));

document.querySelectorAll('.close').forEach((element) => element.addEventListener('click', () => {
  closePopupModal(element.getAttribute('data-index'));
}));

/* End of display popup modal */
