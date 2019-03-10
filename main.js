let projectListHTML = '';
for (i = 2; i<=7;i++){
        projectListHTML += `<div class="project"><a href="${i}/index.html"><div class="caption">Day ${i}
        </div><img src="${i}/${i}.png"></a></div>`;
}

const projectListDiplay = document.querySelector('.projects');
projectListDiplay.innerHTML = projectListHTML;