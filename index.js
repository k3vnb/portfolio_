
const STORE = [
    {
        projectTitle: 'Art Quiz',
        projectDescription: 'A simple quiz app for testing your art knowledge. Made with vanilla Javascript, jQuery, HTML5, CSS3',
        projectScreenShot: 'img/art_quiz_screenshot1.png',
        githubURL: 'https://github.com/lemurriot/art_quiz',
        liveURL: 'https://lemurriot.github.io/art_quiz/'
    },
    {
        projectTitle: 'Cupcake Catcher',
        projectDescription: 'A classic computer game, made with vanilla Javascript, HTML5, HTML5 Canvas, CSS3',
        projectScreenShot: 'img/cupcake_catcher.png',
        githubURL: 'ghttps://github.com/lemurriot/cupcake_catcher_game',
        liveURL: 'https://lemurriot.github.io/cupcake_catcher_game/'
    },
    {
        projectTitle: 'Krystal Clear Cleaners',
        projectDescription: 'A static site built with React for a commercial cleaning service.',
        projectScreenShot: 'img/krystalclear1.png',
        githubURL: 'https://github.com/lemurriot/krystal-clean',
        liveURL: 'http://krystalclearcleaners.com/'
    }
];

function loadingSpinner(){
    const overlay = document.getElementById("overlay");

    window.addEventListener('load', function(){
        overlay.style.display = 'none';
    });
}


function renderProjectCards(){
    STORE.forEach(project => {
        $('.projects-section-main-content').append(`
        <div class="project-card-outer">
            <div class="project-image-container">
              <img class="project-screenshot" src=${project.projectScreenShot} alt="project screenshot">
                
            </div>
            <div class="project-info-container">
                <div class="project-name">
                    ${project.projectTitle}
                </div>
                <div class="project-description">
                    ${project.projectDescription}
                </div>
                <div class="project-github-link project-link">
                    <a href="${project.githubURL}"><button class="github-btn">Github Link</button></a>
                </div>
                <div class="project-livesite-link project-link">
                    <a href="${project.liveURL}"><button class="live-site-btn">Live Site Link</button></a>
                </div>
            </div>
        </div>
        `)
    })
}

function contactLinkHover(){

    $('.contact-link-container img').hover(function(){
        $(this).parents('.contact-link-container').css('background-color', '#ff000078');
    }, function(){
        $(this).parents('.contact-link-container').css('background-color', 'transparent');
    })
}




$(
    contactLinkHover(),
    renderProjectCards(),
    loadingSpinner()
 )

