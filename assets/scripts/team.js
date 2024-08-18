const teamMembers = [
    {
        id: 1,
        name: "LeRoux",
        role: "Captain",
        photo: "../assets/images/l-image.png",
        country: "The Bahamas, Monaco, Brazil",
        favoriteFood: "Curry",
        languages: ["English", "Russian", "Portuguese", "Spanish", "French"],
        skills: {
            OSINT: 100,
            ASINT: 100,
            Cybersecurity: 80,
            "Digital Forensics": 70,
            GEOINT: 100,
            "Data Analysis": 85
        },
        socialMedia: {
            linkedin: "vance-poitier",
            medium: "VEEXH"
        }
    },
    {
        id: 2,
        name: "Souf6X",
        role: "Founder",
        photo: "../assets/images/s-image.png",
        country: "Algeria",
        favoriteFood: "Tacos",
        languages: ["Arabic", "French", "English"],
        skills: {
            OSINT: 100,
            ASINT: 85,
            Cybersecurity: 90,
            "Digital Forensics": 85,
            GEOINT: 100,
            "Data Analysis": 85
        },
        socialMedia: {
            linkedin: "boudjenane-soufiane-65117b188",
            medium: "souf6x"
        }
    },
    {
        id: 3,
        name: "Stray",
        role: "Founder",
        photo: "../assets/images/s-image3.png",
        country: "Unknown",
        favoriteFood: "Unknown",
        languages: ["Unknown"],
        skills: {
            OSINT: 100,
            ASINT: 100,
            Cybersecurity: 100,
            "Digital Forensics": 100,
            GEOINT: 100,
            "Data Analysis": 100
        }
    },
    {
        id: 4,
        name: "Vizer",
        role: "Founder",
        photo: "../assets/images/v-image.png",
        country: "Viet Nam",
        favoriteFood: "Phở",
        languages: ["Vietnamese", "English"],
        skills: {
            OSINT: 100,
            ASINT: 70,
            Cybersecurity: 80,
            "Digital Forensics": 70,
            GEOINT: 100,
            "Data Analysis": 60
        },
        socialMedia: {
            github: "vjz3r",
            linkedin: "vjz3r"
        }
    },
    {
        id: 5,
        name: "Meadow",
        role: "La Casa Crew",
        photo: "../assets/images/m-image.png",
        country: "Germany",
        favoriteFood: "Dal",
        languages: ["German", "English", "French", "Russian, Luxembourgish"],
        skills: {
            OSINT: 80,
            ASINT: 80,
            Cybersecurity: 80,
            "Digital Forensics": 80,
            GEOINT: 80,
            "Data Analysis": 80
        },
        socialMedia: {
            twitter: "m3ad0w_"
        }
    },
    {
        id: 6,
        name: "PretendNotToBe",
        role: "La Casa Crew",
        photo: "../assets/images/p-image.png",
        country: "Classified",
        favoriteFood: "Ramen",
        languages: ["English", "Mandarin", "Cantonese"],
        skills: {
            OSINT: 100,
            ASINT: 80,
            Cybersecurity: 75,
            "Digital Forensics": 70,
            GEOINT: 100,
            "Data Analysis": 75
        },
        socialMedia: {
            medium: "PretendNotToBe"
        }
    },
    {
        id: 7,
        name: "Gorbash",
        role: "La Casa Crew",
        photo: "../assets/images/g-image.png",
        country: "Great Britain",
        favoriteFood: "Pizza, Kebab or Curry washed down with a bo'oh'o'wa'eh",
        languages: ["English (barely)"],
        skills: {
            OSINT: 100,
            ASINT: 70,
            Cybersecurity: 80,
            "Digital Forensics": 80,
            GEOINT: 100,
            "Data Analysis": 70
        },
        socialMedia: {
            twitter: "g0rba5h"
        }
    },
    {
        id: 8,
        name: "Joey",
        role: "La Casa Crew",
        photo: "../assets/images/j-image.png",
        country: "Chile",
        favoriteFood: "Panuozzo porchetta",
        languages: ["Russian", "Spanish", "English", "Italian"],
        skills: {
            OSINT: 100,
            ASINT: 60,
            Cybersecurity: 100,
            "Digital Forensics": 100,
            GEOINT: 80,
            "Data Analysis": 60
        },
        socialMedia: {
            twitter: "joaquinbyte",
            linkedin: "joaquiniglesiasm"
        }
    },
    {
        id: 9,
        name: "Mr.Midnight",
        role: "La Casa Crew",
        photo: "../assets/images/mm-image.png",
        country: "Germany, China",
        favoriteFood: "Steak",
        languages: ["German", "English", "Chinese", "Mandarin"],
        skills: {
            OSINT: 100,
            ASINT: 75,
            Cybersecurity: 100,
            "Digital Forensics": 75,
            GEOINT: 75,
            "Data Analysis": 60
        },
        socialMedia: {
            github: "MrMidnight7331",
            twitter: "MrMidnight53",
            youtube: "@mrmidnight7331"
        }
    },
    {
        id: 10,
        name: "Frank",
        role: "La Casa Crew",
        photo: "../assets/images/f-image.jpg",
        country: "Netherlands, Finland",
        favoriteFood: "Beef Pho Soup",
        languages: ["Dutch", "English"],
        skills: {
            OSINT: 100,
            ASINT: 80,
            Cybersecurity: 70,
            "Digital Forensics": 80,
            GEOINT: 100,
            "Data Analysis": 60
        },
        socialMedia: {
            linkedin: "frank-diepmaat",
            twitter: "franklyvhs",
            website: "frank.today"
        }
    },
    {
        id: 11,
        name: "7069wrk",
        role: "La Casa Crew",
        photo: "../assets/images/7-image.png",
        country: "United States",
        favoriteFood: "Whatever doesn't eat me first",
        languages: ["English", "Many variations of the same"],
        skills: {
            OSINT: 100,
            ASINT: 100,
            Cybersecurity: 100,
            "Digital Forensics": 100,
            GEOINT: 100,
            "Data Analysis": 100
        },
        socialMedia: {
            twitter: "7069wrk"
        }
    },
    {
        id: 12,
        name: "C.O.A",
        role: "La Casa Crew",
        photo: "../assets/images/c-image.png",
        country: "Classified",
        favoriteFood: "Classified",
        languages: ["Classified"],
        skills: {
            OSINT: 100,
            ASINT: 100,
            Cybersecurity: 100,
            "Digital Forensics": 100,
            GEOINT: 100,
            "Data Analysis": 100
        }
    },
    {
        id: 13,
        name: "matroyshka62",
        role: "La Casa Crew",
        photo: "../assets/images/m-image2.png",
        country: "United Kingdom",
        favoriteFood: "My next meal",
        languages: ["Latin", "Ancient Greek", "French", "Italian", "German", "English"],
        skills: {
            OSINT: 100,
            ASINT: 60,
            Cybersecurity: 60,
            "Digital Forensics": 60,
            GEOINT: 100,
            "Data Analysis": 60
        }
    },
    {
        id: 14,
        name: "BigFluffySheep",
        role: "La Casa Crew",
        photo: "../assets/images/sh-image.png",
        country: "Canada",
        favoriteFood: "Jagerschnitzel",
        languages: ["English", "French", "German", "Klingon"],
        skills: {
            OSINT: 100,
            ASINT: 75,
            Cybersecurity: 75,
            "Digital Forensics": 75,
            GEOINT: 75,
            "Data Analysis": 75
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('member-popup');
    const closePopup = document.querySelector('.close-popup');
    const teamCards = document.querySelectorAll('.team-member-card');

    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const memberId = card.getAttribute('data-member-id');
            const member = teamMembers.find(m => m.id === parseInt(memberId));
            if (member) {
                showPopup(member);
            }
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

function showPopup(member) {
    const popup = document.getElementById('member-popup');
    const popupContent = document.querySelector('.popup-content');
    
    let socialMediaHTML = '';
    if (member.socialMedia) {
        socialMediaHTML = '<div class="social-media-container">';
        if (member.socialMedia.twitter) {
            socialMediaHTML += `
                <a href="https://x.com/${member.socialMedia.twitter}" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <img src="../assets/icons/x-30.png" alt="X (Twitter)" class="social-icon-img">
                </a>`;
        }
        if (member.socialMedia.linkedin) {
            socialMediaHTML += `
                <a href="https://www.linkedin.com/in/${member.socialMedia.linkedin}/" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <img src="../assets/icons/linkedin.svg" alt="LinkedIn" class="social-icon-img">
                </a>`;
        }
        if (member.socialMedia.medium) {
            socialMediaHTML += `
                <a href="https://medium.com/@${member.socialMedia.medium}" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <img src="../assets/icons/medium.svg" alt="Medium" class="social-icon-img">
                </a>`;
        }
        if (member.socialMedia.github) {
            socialMediaHTML += `
                <a href="https://github.com/${member.socialMedia.github}" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <img src="../assets/icons/github.svg" alt="GitHub" class="social-icon-img">
                </a>`;
        }
        if (member.socialMedia.youtube) {
            socialMediaHTML += `
                <a href="https://www.youtube.com/${member.socialMedia.youtube}" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <img src="../assets/icons/youtube.svg" alt="YouTube" class="social-icon-img">
                </a>`;
        }
        if (member.socialMedia.website) {
            socialMediaHTML += `
                <a href="https://${member.socialMedia.website}" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <img src="../assets/icons/info.svg" alt="Personal Website" class="social-icon-img">
                </a>`;
        }
        socialMediaHTML += '</div>';
    }

    popupContent.innerHTML = `
        <div class="popup-header">
            <h2>${member.name}</h2>
            <span class="close-popup">&times;</span>
        </div>
        <div class="popup-body">
            ${socialMediaHTML}
            <div class="popup-info">
                <p><strong>Role:</strong> ${member.role}</p>
                <p><strong>Country:</strong> ${member.country}</p>
                <p><strong>Favorite Food:</strong> ${member.favoriteFood}</p>
                <p><strong>Languages:</strong> ${member.languages.join(', ')}</p>
            </div>
            <div class="chart-container">
                <canvas id="skills-chart"></canvas>
            </div>
        </div>
    `;

    popup.style.display = 'block';

    // Create chart after popup is visible
    setTimeout(() => createSkillsChart(member.skills), 0);

    // Re-attach event listener for close button
    const closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

function createSkillsChart(skills) {
    const ctx = document.getElementById('skills-chart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.skillsChart instanceof Chart) {
        window.skillsChart.destroy();
    }
    
    window.skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(skills),
            datasets: [{
                label: 'Skills',
                data: Object.values(skills),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)',
                        circular: true
                    },
                    pointLabels: {
                        color: 'white',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0,
                        stepSize: 20,
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 12
                    }
                }
            }
        }
    });
}