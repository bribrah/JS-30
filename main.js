let projectIndex = new File();
for (i = 1; i<=30;i++){
    projectIndex.src = `${i}.index.html`;
    projectIndex.onerror = function(){
        console.log(`${i} project not found`);
     }
}