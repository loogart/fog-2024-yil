AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    // Assuming jsonData is loaded from your JSON file
    const jsonData = {
        
        "inclusion": [
            {
                "name": "Jessica Fisher",
                "pronouns": "She/They",
                "image": "images/photos/jessica-fisher.png",
                "title": "OUTSaskatoon's Gender-Based Violence Education Coordinator",
                "description": "Jess Fisher (White Eagle Woman Coming with Compassion) is a queer, Two Spirit, Métis and French/Irish/Scottish/German settler woman who calls Treaty 6 and Homeland of the Métis Nation in Saskatchewan home. They work to address the barriers 2SLGBTQ+ people face when accessing care. She provides training and consultation to healthcare, education, and support service providers about delivering safer, more affirming care to 2SLGBTQ+ people. She is passionate about helping build a world where everyone can feel safe in being who they are.",
                "website": "https://www.outsaskatoon.ca/",
                "twitter": "",
                "linkedin": "",
                "instagram": ""
    
            },
            {
                "name": "Ashley Sheppard",
                "pronouns": "She/Her",
                "image": "images/photos/ashley-sheppard.png",
                "title": "Canadian Centre for Diversity and Inclusion",
                "description": "Ashley Sheppard is a Mi'kmaw woman from Qalipu First Nation with a passion for creating inclusive learning environments. She has spent the last two years developing and leading a youth education initiative called See Different, a free certification program and national network for youth in Canada offered both online and in-person, in English and French. The program is dedicated to training and supporting a new generation of compassionate leaders who recognize and seek to address systemic barriers to inclusion in Canadian society.",
                "website": "https://www.seedifferent.ca",
                "twitter": "",
                "linkedin": "",
                "instagram": ""
            },
            {
                "name": "Cong Chen",
                "pronouns": "He/Him",
                "image": "images/photos/cong-chen.png",
                "title": "Changemaker, Halifax",
                "description": "Cong has dedicated nearly a decade to international education and immigrant support. As Chairman of Culture and Education for the Chinese Society of Nova Scotia and a Board Member of the Chinese Art and Culture Centre, he has significantly contributed to fostering cultural understanding and unity. In 2023, he led a significant project as the Community Safety Education Coordinator with the Halifax Regional Municipality to develop and implement a comprehensive safety training program tailored to diverse community groups.",
                "website": "",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/congchencanada/",
                "instagram": "https://www.instagram.com/congnotkong/"
            },
            {
                "name": "Chiyi Tam",
                "pronouns": "She/Her",
                "image": "images/photos/chiyi-tam.png",
                "title": "Managing Director, Toronto Chinatown Land Trust",
                "description": "Chiyi is an urban planner and anti-displacement organizer practicing in Tkaronto's Kensington-Chinatown neighbourhood. She is currently a visiting expert with the School of Cities’ as an Early Career Canadian Urban Leader. She was the first staff and executive director of the Kensington Market Community Land Trust. She helped found the Toronto Chinatown Land Trust in 2023, with an aim to take properties off the speculative real estate market and hold resources and assets for working-class people towards economic and racial justice.",
                "website": "https://chinatownlandtrust.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/chiyitam/",
                "instagram": "https://www.instagram.com/chinatownlandtrust/"
            },
            {
                "name": "Kate Haiyun Mossop",
                "pronouns": "She/Her",
                "image": "images/photos/kate-mossop.png",
                "title": "Director of Community Programs, University Settlement",
                "description": "Kate focuses on newcomer integration, education, social policy, and grassroots civic engagement. Her background in public service and direct support for equity-deserving urban populations underscores her leadership, strategic planning, program development, and commitment to good. Kate's Chinese-Canadian heritage fuels her passion for aiding immigrants and racialized communities. She organized the annual Grange Festival, attracting more than 4,000 community members to the heart of downtown Toronto.",
                "website": "https://universitysettlement.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/kate-haiyun-mossop-a7b97b1bb/",
                "instagram": ""
            },
            {
                "name": "Tanya James",
                "pronouns": "She/Her",
                "image": "images/photos/tanya-james.png",
                "title": "Chroma: Pride, Inclusion, Equality Inc.",
                "description": "Tanya is a proud Maritimer relishing the opportunity to work towards equality and inclusion of the 2SLGBTQIA+ community on a local level. She has been working for Chroma since 2021. Last year, she helped spearhead Chroma's Legal ID Change Navigation project, a program designed to help community members overcome barriers to changing their legal name and sex designation to match their chosen name and gender.",
                "website": "https://chromanb.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/tanya-james-rd-76568a181/",
                "instagram": "https://www.instagram.com/fieldforestforage/"
            },
            {
                "name": "Olivia Charlebois",
                "pronouns": "She/Her",
                "image": "images/photos/olivia-charlebois.png",
                "title": "Program Manager, Propel Impact",
                "description": "Olivia has held various program management, project management and consulting roles for development finance institutions (DFI), funds, foundations, social enterprises and non-profit organizations. Olivia has advised leadership teams on strategy, spearheaded transformative projects, influenced organizational direction, and successfully managed innovative development projects. At Propel, she spearheaded the creation and implementation of an impact consulting service offering for social entrepreneurs immigrating to Canada.",
                "website": "https://www.propelimpact.com/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/charlebois-olivia/",
                "instagram": ""
            },
            {
                "name": "Rekha Pavanantharajah",
                "pronouns": "She/Her",
                "image": "images/photos/rekha-pavanantharajah.png",
                "title": "Director, Grants and Community Initiatives, Vancouver Foundation",
                "description": "Rekha Pavanantharajah is a second-generation settler of Sri Lankan Tamil descent. Her background is in Sociology, and as a Tamil woman and a child of refugee parents, justice and equity are core to her values. In October, she engaged in a conversation with her senior leaders about standing in solidarity with Palestinians under attack, and she is proud to say that he helped spearhead a temporary task force called “The Solidarity Team” to help support the organization to advance critical actions in response to the crisis.",
                "website": "https://www.vancouverfoundation.ca",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/rekha-pavanantharajah-12877218a/?originalSubdomain=ca",
                "instagram": ""
            },    
            {
                "name": "Anoodth Naushan",
                "pronouns": "She/Her",
                "image": "images/photos/anoodth-naushan.png",
                "title": "Thought Leader",
                "description": "Anoodth Naushan is an award-winning thought leader, researcher, policy advisor, and community advocate who enjoys supporting people and projects to advance gender, racial, and economic justice. She holds a Masters in Social Policy and Social Research and has worked at the intersection of policy and program design, community capacity building, and systems change for over a decade. Her diverse experience spans Canada and the UK's non-profit and higher education sectors.",
                "website": "",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/anoodth-naushan/",
                "instagram": ""
            },   
            {
                "name": "Dani Gomez-Ortega",
                "pronouns": "She/Her",
                "image": "images/photos/dani-gomez-ortega.png",
                "title": "Senior Manager, Global Diversity, Equity, and Inclusion, McCain Foods",
                "description": "Dani Gomez-Ortega is an inclusion advocate with a passion for empowering others to create more inclusive spaces. Dani has provided diversity and inclusion training and support to audiences across various sectors for 10 years. She is also an MBA candidate at the Ted Rogers School of Management. Dani helps drive inclusion in 55 countries in her current role. Dani's work and commitment to inclusion are shaped by her lived experience as a Latinx, immigrant transgender woman with an invisible disability.",
                "website": "https://www.mccain.com/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/dgomezor/",
                "instagram": ""
            },        
            {
                "name": "Jillisa Brown",
                "pronouns": "She/Her",
                "image": "images/photos/jilisa-brown.png",
                "title": "Executive Director, Table of Impact Investment Practitioners",
                "description": "Jillisa's passion for the development of people and communities was the launchpad of her journey as a community leader, mentor, and coach. Her work in decolonizing systems that exclude equity-seeking communities has helped to lay the groundwork for change within the social finance and social innovation ecosystems. Jillisa focuses on building capacity engulfed in inclusion, diversity, equity, and access specializing in Anti-Black Racism. She also helped TIIP's team develop its role in the governance of the Federal Government's Social Finance Fund.",
                "website": "",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/jillisabrown",
                "instagram": "https://www.instagram.com/fundingimpact/"
            }  
        ]
    };

    populateCards(jsonData.inclusion);
});

function populateCards(items) {
    const container = document.querySelector('.row.flex-wrap');
    container.innerHTML = ''; // Clear existing content

    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3';
        col.innerHTML = `
            <div class="card bg-darker" data-bs-toggle="modal" data-bs-target="#exampleModal" data-aos="fade-up" data-aos-duration="1000" style="cursor: pointer;">
                <img src="${item.image}" class="card-img-top bg-blue" alt="...">
                <div class="card-body text-white">
                    <h4 class="card-title bio-name">${item.name}</h4>
                    <p class="small text-white mb-0 bio-title">${item.title}</p>
                </div>
            </div>
        `;

        col.querySelector('.card').addEventListener('click', function() {
            populateModal(item);
            // Here you can also adjust the modal image's background color if needed
        });

        container.appendChild(col);
    });
}

function populateModal(item) {
    const modalImage = document.querySelector('.modal-body img');
    const modalName = document.querySelector('.modal-body .bio-name');
    const modalPronouns = document.querySelector('.modal-body .bio-pronouns');
    const modalTitle = document.querySelector('.modal-body .bio-title');
    const modalDescription = document.querySelector('.modal-body .bio');
    const modalWebsite = document.querySelector('.modal-body .bio-website');
    const modalTwitter = document.querySelector('.modal-body .bio-twitter');
    const modalLinkedin = document.querySelector('.modal-body .bio-linkedin');
    const modalInstagram = document.querySelector('.modal-body .bio-instagram');

    modalImage.src = item.image;
    modalName.textContent = item.name;
    modalPronouns.textContent = item.pronouns;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;

    // modalWebsite.href = item.website || '#';
    // modalTwitter.href = item.twitter || '#';
    // modalLinkedin.href = item.linkedin || '#';
    // modalInstagram.href = item.instagram || '#';

    // Adjust the modal image's background color to match the card's
    // This assumes the card's background color is known and static.
    // If it's dynamic, you'll need to pass it as an argument or manage it differently.
    modalImage.parentElement.style.backgroundColor = 'var(--bg-blue)'; // Adjust the variable as per your CSS

    // Social links
    const setSocialLink = (selector, url) => {
        const element = document.querySelector(selector);
        if (url) {
            element.href = url;
            element.style.display = 'inline-block';
        } else {
            element.style.display = 'none';
        }
    };
    setSocialLink('.bio-website', item.website);
    setSocialLink('.bio-twitter', item.twitter);
    setSocialLink('.bio-linkedin', item.linkedin);
    setSocialLink('.bio-instagram', item.instagram);
}
