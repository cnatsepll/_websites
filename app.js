const sections = document.getElementById('main-grid').getElementsByTagName('section');
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener('click', pageSelect, false);
homeBtn.pageId = 'home';
const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener('click', pageSelect, false);
aboutBtn.pageId = 'about';
const servicesBtn = document.getElementById("servicesBtn");
servicesBtn.addEventListener('click', pageSelect, false);
servicesBtn.pageId = 'services';
const workBtn = document.getElementById("workBtn");
workBtn.addEventListener('click', pageSelect, false);
workBtn.pageId = 'work';
const resourcesBtn = document.getElementById("resourcesBtn");
resourcesBtn.addEventListener('click', pageSelect, false);
resourcesBtn.pageId = 'resources';

$(document).ready(function() {
    var hash = window.location.hash.substring(1);
    if (hash) {
        historyHandler(hash);
     }
});

$(window).on('hashchange', function() {
    const jump =  location.hash.substring(1);
    historyHandler(jump);
});

function historyHandler(e){
    for(let i = 0; i < sections.length; i++){
        const page = sections[i];
        const pageId = e;
        if(page.id !== pageId){
            page.classList.add('hiddenElement');
            page.classList.remove('page-grid');
        } else {
            page.classList.remove('hiddenElement');
            page.classList.add('page-grid');
        }
    }
}

function pageSelect(e){
    for(let i = 0; i < sections.length; i++){
        const page = sections[i];
        const pageId = e.target.pageId;
        if(page.id !== pageId){
            page.classList.add('hiddenElement');
            page.classList.remove('page-grid');
        } else {
            page.classList.remove('hiddenElement');
            page.classList.add('page-grid');
        }
    }
}




