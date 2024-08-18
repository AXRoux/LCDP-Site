// Title and story translations
const translations = [
    {
        title: "La Casa de Papel",
        story: [
            "En los rincones sombríos de internet, un grupo de entusiastas del OSINT se unió...",
            "Unidos por su pasión por descubrir verdades ocultas, formaron La Casa de Papel...",
            "A medida que sus habilidades crecían, también lo hacía su reputación en la comunidad de inteligencia...",
            "Desde humildes comienzos, se convirtieron en maestros del OSINT, ASINT y más allá...",
            "Ahora, se alzan como un equipo de élite, listos para asumir las misiones de inteligencia más desafiantes..."
        ]
    },
    {
        title: "Money Heist",
        story: [
            "In the shadowy corners of the internet, a group of OSINT enthusiasts came together...",
            "United by their passion for uncovering hidden truths, they formed Money Heist...",
            "As their skills grew, so did their reputation in the intelligence community...",
            "From humble beginnings, they rose to become masters of OSINT, ASINT, and beyond...",
            "Now, they stand as an elite team, ready to take on the most challenging intelligence missions..."
        ]
    },
    {
        title: "Dom z papieru",
        story: [
            "W mrocznych zakamarkach internetu zebrała się grupa entuzjastów OSINT...",
            "Zjednoczeni pasją odkrywania ukrytych prawd, stworzyli Dom z papieru...",
            "Wraz z rozwojem umiejętności rosła ich reputacja w społeczności wywiadowczej...",
            "Od skromnych początków stali się mistrzami OSINT, ASINT i nie tylko...",
            "Teraz stoją jako elitarny zespół, gotowy podjąć się najtrudniejszych misji wywiadowczych..."
        ]
    },
    {
        title: "La Casa Di Carta",
        story: [
            "Negli angoli oscuri di Internet, un gruppo di appassionati di OSINT si è riunito...",
            "Uniti dalla passione per scoprire verità nascoste, hanno formato La Casa Di Carta...",
            "Con la crescita delle loro abilità, è cresciuta anche la loro reputazione nella comunità dell'intelligence...",
            "Da umili inizi, sono diventati maestri di OSINT, ASINT e oltre...",
            "Ora sono un team d'élite, pronto ad affrontare le missioni di intelligence più impegnative..."
        ]
    },
    {
        title: "Haus des Geldes",
        story: [
            "In den dunklen Ecken des Internets fand sich eine Gruppe von OSINT-Enthusiasten zusammen...",
            "Vereint durch ihre Leidenschaft, verborgene Wahrheiten aufzudecken, gründeten sie das Haus des Geldes...",
            "Mit wachsenden Fähigkeiten stieg auch ihr Ruf in der Geheimdienstgemeinschaft...",
            "Von bescheidenen Anfängen wurden sie zu Meistern in OSINT, ASINT und darüber hinaus...",
            "Jetzt stehen sie als Eliteteam bereit, die herausforderndsten Geheimdienstmissionen anzunehmen..."
        ]
    },
    {
        title: "بيت الورق",
        story: [
            "في الزوايا المظلمة للإنترنت، اجتمعت مجموعة من المتحمسين لـ OSINT...",
            "متحدين بشغفهم لكشف الحقائق الخفية، شكلوا بيت الورق...",
            "مع نمو مهاراتهم، نمت سمعتهم في مجتمع الاستخبارات...",
            "من بدايات متواضعة، ارتقوا ليصبحوا خبراء في OSINT وASINT وما بعدهما...",
            "الآن، يقفون كفريق نخبة، مستعدين لمواجهة أصعب مهمات الاستخبارات..."
        ]
    },
    {
        title: "Бумажный дом",
        story: [
            "В темных уголках интернета собралась группа энтузиастов OSINT...",
            "Объединенные страстью к раскрытию скрытых истин, они создали Бумажный дом...",
            "По мере роста их навыков росла и их репутация в разведывательном сообществе...",
            "Начав с малого, они стали мастерами OSINT, ASINT и не только...",
            "Теперь они стоят как элитная команда, готовая взяться за самые сложные разведывательные задачи..."
        ]
    },
    {
        title: "A Casa de Papel",
        story: [
            "Nos cantos sombrios da internet, um grupo de entusiastas de OSINT se reuniu...",
            "Unidos pela paixão de descobrir verdades ocultas, eles formaram A Casa de Papel...",
            "À medida que suas habilidades cresciam, também crescia sua reputação na comunidade de inteligência...",
            "De humildes começos, eles se tornaram mestres em OSINT, ASINT e além...",
            "Agora, eles se destacam como uma equipe de elite, pronta para enfrentar as missões de inteligência mais desafiadoras..."
        ]
    }
];

let currentIndex = 0;

function animateTitleAndStory() {
    const titleElement = document.getElementById('title-animation');
    const storySection = document.querySelector('.story-section');

    try {
        gsap.to(titleElement, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                currentIndex = (currentIndex + 1) % translations.length;
                const currentTranslation = translations[currentIndex];

                titleElement.textContent = currentTranslation.title;
                storySection.innerHTML = '';

                currentTranslation.story.forEach((part, index) => {
                    const storyPart = document.createElement('p');
                    storyPart.className = 'story-part';
                    storyPart.textContent = part;
                    storyPart.style.transitionDelay = `${index * 0.5}s`;
                    storySection.appendChild(storyPart);
                });

                gsap.to(titleElement, {opacity: 1, duration: 0.5});
                animateOnScroll();
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        // Handle the error gracefully
    }
}

setInterval(animateTitleAndStory, 10000);

// Skillsets content
const skillsets = [
    { name: "OSINT", description: "Open Source Intelligence Gathering and Analysis" },
    { name: "ASINT", description: "All-Source Intelligence: Integrating intelligence from Multiple Sources" },
    { name: "CyberSecurity", description: "Protecting Systems, Networks, and Programs from Digital Attacks" },
    { name: "Digital Forensics", description: "Investigating and Analyzing Digital Evidence" },
    { name: "GEOINT", description: "Geospatial Intelligence and Analysis" },
    { name: "Data Analysis", description: "Extracting Insights from Complex Datasets" }
];

function createSkillsetsSections() {
    const skillsetsSection = document.querySelector('.skillsets-section');
    skillsets.forEach((skillset, index) => {
        const skillsetElement = document.createElement('div');
        skillsetElement.className = 'skillset-item';
        skillsetElement.innerHTML = `
            <h3>${skillset.name}</h3>
            <p>${skillset.description}</p>
        `;
        skillsetsSection.appendChild(skillsetElement);
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.story-part, .skillset-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementTop < screenPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    animateTitleAndStory();
    createSkillsetsSections();
    animateOnScroll();
});

// Particle effect in the background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#BF0904' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 1, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
    }
});