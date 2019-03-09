let projectListHTML = '';
for (i = 2; i<=7;i++){
        projectListHTML += `<li><a href="${i}/index.html">Day ${i}</a></li>`;
}

const projectListDiplay = document.querySelector('.projects-list');
projectListDiplay.innerHTML = projectListHTML;