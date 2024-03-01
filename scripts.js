AOS.init();

// Autoplay hero video
function playVideo() {
    var video = document.getElementById("myVideo");
    video.play();
}

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
                "title": "Project Director, Courage to Act",
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
            },
            {
                "name": "Sancho Angulo",
                "pronouns": "He/Him",
                "image": "images/photos/sancho-angulo.png",
                "title": "Engagement Advisor, Treasury Board of Canada Secretariat",
                "description": "Sancho Angulo is an autistic Filipino-Canadian public servant, neurodiversity advocate, and privacy professional. He is Co-Chair and founder of Infinity - The Network for Neurodivergent Public Servants, an interdepartmental network supporting neurodivergent employees across the Government of Canada, encompassing more than 900 members across 70 federal institutions. A certified privacy professional through the International Association of Privacy Professionals, Sancho serves as a Co-Chair of Ottawa's IAPP KnowledgeNet chapter.",
                "website": "",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/sanchoa/",
                "instagram": "https://www.instagram.com/sanchoangulo/"
            }
        ],
        "youth": [
            {
                "name": "Stella Igweamaka",
                "pronouns": "She/Her",
                "image": "images/photos/stella-igweamaka.png",
                "title": "Senior Execution Consultant, Servus Credit Union",
                "description": "Stella Igweamaka is passionate about using research and storytelling for impactful change. Through a recent project conducted in collaboration with Black Canadian Women in Action on the Adultification of Black Girls in Canada, she was able to shine a spotlight on the deeply ingrained biases that affect Black girls' lives. At her workplace, Stella established a BIPOC employee resource group, and she holds an MBA from the University of Lagos, Nigeria.",
                "website": "https://www.bcwinaction.ca/black-girls-empowerment",
                "twitter": "https://twitter.com/StellaIgweamaka",
                "linkedin": "https://www.linkedin.com/in/stella-igweamaka",
                "instagram": "https://www.instagram.com/stella_igweamaka"
    
            },
            {
                "name": "Reanna Merasty",
                "pronouns": "She/Her",
                "image": "images/photos/reanna-merasty.png",
                "title": "Changemaker, Winnipeg",
                "description": "Reanna Merasty is a proud Nihithaw woman from Barren Lands First Nation. Reanna strives to empower and inspire Indigenous youth across Canada to pursue architecture and design. Reanna is the Chair of the Welcoming Winnipeg Committee, a Sessional Instructor at the University of Manitoba, and the Manitoba Regional Director with the Royal Architecture Institute of Canada Board. Through this advocacy work, Reanna was named the 2023 Youth-First Nations Indspire Award Laureate.",
                "website": "",
                "twitter": "https://twitter.com/rmerasty",
                "linkedin": "https://www.linkedin.com/in/reanna-merasty/",
                "instagram": "https://www.instagram.com/rmerasty/"
            },
            {
                "name": "Qumangaapik Pairngu Arnatsiaq",
                "pronouns": "He/Him",
                "image": "images/photos/qumangaapik-pairngu-arnatsiaq.png",
                "title": "Acting Recreation Director, Municipality of Igloolik",
                "description": "With the help of the Recreation and Parks Association of Nunavut, Quamangaapik was able to escort three young leaders to Toronto for youth camp training called “Get Happy Summer Day Camp.” Upon their return, he and the leaders delivered a quality camp five days a week for youth in Igloolik. Earlier this year, after additional training in Winnipeg, so Quamangaapik, along with four others, spearheaded an after school program called the Winter Youth Program, delivered three times weekly. He has worked in youth recreation for six years.",
                "website": "https://www.facebook.com/igloolik.ca/",
                "twitter": "https://twitter.com/QArnatsiaq",
                "linkedin": "",
                "instagram": "https://www.instagram.com/qumangaapikarnatsiaq/"
            },
            {
                "name": "Aicha Toure",
                "pronouns": "She/Her",
                "image": "images/photos/aicha-toure.png",
                "title": "Director of African Programs, Journalists for Human Rights",
                "description": "Aicha Touré is a feminist with a bilingual Master’s degree in Public Policy and International Affairs. Her work is informed by a strong commitment to decolonial praxis as a means of creating a more equitable global society. She oversees projects that seek to promote good governance practices and enhance access to human rights, especially for women and girls. She is one of the founders of Griot’s Table, a culinary storytelling company that creates immersive, multi-sensory Afro-culinary experiences that seek to reclaim and amplify Black history.",
                "website": "https://jhr.ca/",
                "twitter": "https://x.com/Uppity_African",
                "linkedin": "https://www.linkedin.com/in/aicha-toure-mpp-a56229122/",
                "instagram": "https://www.instagram.com/the_uppity_african/"
            },
            {
                "name": "Niroja Thiru",
                "pronouns": "She/Her",
                "image": "images/photos/niroja-thiru.png",
                "title": "Graduate Program Manager, Small Economy Works",
                "description": "A Tamil-Canadian settler, Niroja arrived in Toronto as a refugee from Sri Lanka with her family during the civil war. Her educational and professional experiences have intersected between teaching, advanced learning, and entrepreneurial environments. In 2019 a co-op placement opportunity brought her to Fort Providence, NWT. She began working as the Youth Engagement Coordinator, leading youth programming, then transitioned to working with Small Economy Works - to provide entrepreneurial leadership training to youth in the Arctic.",
                "website": "https://www.smalleconomyworks.com/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/nirojathiru/",
                "instagram": ""
            },
            {
                "name": "Cheyenne Stonechild",
                "pronouns": "She/Her",
                "image": "images/photos/cheyenne-stonechild.png",
                "title": "International Institute for Child Rights and Development",
                "description": "Cheyenne Stonechild (Nêhiyaw and Irish) is a member of the Muscowpetung First Nation. Raised in Vancouver, the child welfare system sparked a passion to help create needed change. She has hosted and presented at conferences on select topics, including at the Continuing Legal Education Society of BC, the Canadian Bar Association, and the World Indigenous Peoples Conference on Education. She managed the 4 the Generation Project and was a member of the International Institute for Child Rights and Development from 2018 to 2020.",
                "website": "https://www.iicrd.org",
                "twitter": "",
                "linkedin": "",
                "instagram": ""
            },
            {
                "name": "Eldon Holder",
                "pronouns": "He/Him",
                "image": "images/photos/eldon-holder.png",
                "title": "Vice-President of Social Impact & Stakeholder Engagement for Aspire For Higher ",
                "description": "Eldon is an HR professional with more than 14 years of experience in grassroots development, skilled trades recruitment and project management. Whether it is hosting workshops to equip youth with skills to secure gainful employment or connecting communities across Canada to create positive impact - he wants to build a more equitable country. Eldon has been awarded the One Young World Global Ambassador for Canada, the United Way Community Builders Award, and the ON Black History Society UN International Decade award.",
                "website": "https://aspireforhigher.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/eldonholder/",
                "instagram": "https://www.instagram.com/eldonholderjr/"
            }
        ],
        "tech": [
            {
                "name": "Linh Kim",
                "pronouns": "She/Her",
                "image": "images/photos/linh-kim.png",
                "title": "Digital moment",
                "description": "Through her work with Digital Moment, Linh Kim contributes to lowering the bar to digital education to help young people from all walks of life develop an understanding of technology, the sustainable development goals, and the role of youth in shaping the future. She has a passion for storytelling and creative multimedia production, utilizing them as tools to raise awareness on the importance of education, empowerment, and the need to include youth voices in decisions concerning their future.",
                "website": "https://digitalmoment.org/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/linh-kim-3b35b7177/",
                "instagram": ""
            },
            {
                "name": "Marine-Celeste Kiromera",
                "pronouns": "She/Her",
                "image": "images/photos/marine-celeste-kiromera.png", 
                "title": "Manager of Learning and Impact, Equality Fund",
                "description": "In her role, Marine-Celeste leads the development of Monitoring, Evaluation and Learning systems for the fund’s Global Grantmaking Program, applying feminist and community-centered approaches to the design of data collection tools, analysis, and co-creation of learning spaces. Marine-Celeste was also part of the core team that led the design and implementation of the Equality Fund’s first two participatory grantmaking processes.",
                "website": "https://equalityfund.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/marine-celeste-kiromera/",
                "instagram": ""
            },
            {
                "name": "Robyn Schwarz",
                "pronouns": "She/Her",
                "image": "images/photos/robyn-schwarz.png", 
                "title": "Fund Development, Advocacy, and Communications Lead at Porchlight Counselling and Addiction Services",
                "description": "Robyn is a community-builder and grant writer. She combines academic expertise with lived experience to support non-profits with their fund development, communications, advocacy, and EDI needs. In the last year, she has implemented a community-centric fundraising model at Porchlight Counselling and Addiction Services which led to a 170 per cent increase in donations. Robyn often shares her experiences with late-diagnosed ADHD and reproductive care in order to advocate for equity within the healthcare system.",
                "website": "https://fcccnd.com/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/robyn-schwarz-8390ab31/",
                "instagram": ""
            },
            {
                "name": "Kayt Render",
                "pronouns": "She/Her",
                "image": "images/photos/kayt-render.png", 
                "title": "National Director, Community Impact, United Way Centraide Canada",
                "description": "Kayt has played a central role in shaping national strategies that drive community investment, fundraising, learning and capacity building, and global relationships. Kayt has led several initiatives, including the Europe and Middle East Refugee Settlement Initiative, the COVID-19 Emergency Community Support Fund and the Community Services Recovery Fund. Her vision and dedication have been instrumental in establishing the National Community Investment Data Framework and the Canadian Women United philanthropy program.",
                "website": "https://www.unitedway.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/kayt-render",
                "instagram": ""
            },
            {
                "name": "Samantha Tweet",
                "pronouns": "She/Her",
                "image": "images/photos/samantha-tweet.png", 
                "title": "Operations Manager, Animikii",
                "description": "Samantha is proud to be born and raised on Vancouver Island. She is Coast Salish and a member of the Snuneymuxw First Nation. Samantha has a foundation in business and more than 10 years of experience providing executive support in the Indigenous space. She is currently working on the Edmonton School District’s virtual school software platform, which will help address the inequality gap in education and empower Indigenous and racialized students to be in control of their own schooling.",
                "website": "https://animikii.com/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/samantha-tweet-0653b7a3/",
                "instagram": ""
            }
        ],
        "climate": [
            {
                "name": "Wren Laing",
                "pronouns": "She/Her",
                "image": "images/photos/wren-laing.png",
                "title": "Investment Director, McConnell Foundation",
                "description": "Wren is working to create positive social and environmental change through innovative, impact-driven finance. She created and is in charge of the implementation of the foundation’s new investment strategy, which commits to transitioning the $650 million endowment to 100 per cent impact investments by 2028. Prior to McConnell, Wren was an Investment Director at Big Society Capital, where she co-led BSC’s impact property investment work, helping to demonstrate the role private capital can play in tackling the housing affordability crisis.",
                "website": "https://www.mcconnellfoundation.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/wren-laing",
                "instagram": ""
            },
            {
                "name": "Alexandra Thomson",
                "pronouns": "She/Her",
                "image": "images/photos/alexandra-thomson.png",
                "title": "Director of Youth Programs at Indigenous Clean Energy",
                "description": "Alexandra is a Nakota wįyą mixed with French descent, belonging to Cega’Kin First Nation. She holds a Bachelor of Science in Chemical Engineering from the University of Saskatchewan and has a passion for advancing Indigenous resurgence in the climate and energy landscape. Alexandra provides strategic leadership and guidance to both the ImaGENation and Generation Power programs at ICE, ensuring Indigenous young people have access to resources and opportunities that align with their values for a shared energy future.",
                "website": "https://indigenouscleanenergy.com/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/alexandrapaigethomson/",
                "instagram": "https://www.instagram.com/xandrahpaige/"
            }
        ],
        "health":[
            {
                "name": "Sebastian Muermann",
                "pronouns": "He/Him",
                "title": "Government Relations & Membership Manager, Imagine Canada",
                "image": "images/photos/sebastian-muermann.png",
                "description": "Sebastian's work focuses on improving the health and working environment for thousands of registered charities and nonprofits. His work has successfully influenced federal legislation and CRA regulations affecting charitable partnerships and non-profit reporting. This year, he led the organization of the inaugural Non-profit Budget Coalition, and an advocacy day for the non-profit sector on Parliament Hill. He also serves on the board of Results Canada, and supports the Disability Without Poverty National Partners Table.",
                "website": "",
                "twitter": "https://twitter.com/smuermann",
                "linkedin": "https://www.linkedin.com/in/sebastianmuermann/",
                "instagram": ""
            },
            {
                "name": "Micheal McOuat",
                "pronouns": "He/Him",
                "title": "Volunteer Alberta",
                "image": "images/photos/micheal-mcouat.png",
                "description": "Born and raised in a small town in Northern Alberta, Micheal is a proud queer Metis boy. Micheal tries to embed a human-centered approach to strengthen IDEAS and Reconciliation in his work. At work, he has been updating the policies of Volunteer Alberta to incorporate intersectionality, reconciliation, and healing-informed care and create a history of what steps Volunteer Alberta has done towards Reconciliation. He also strongly believes in the importance of fun and play as a way to break free from colonial and corporate ideologies.",
                "website": "https://volunteeralberta.ab.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/company/volunteeralberta",
                "instagram": "https://www.instagram.com/YouthVolAb/"
            },
            {
                "name": "Sera Kazmi",
                "pronouns": "She/Her",
                "title": "Family Service Toronto",
                "image": "images/photos/sera-kazmi.png",
                "description": "Sera, a recent immigrant to Canada, has a background in developing global community mental health programs. With experience spanning rural and urban areas of India, the Middle East, and Canada, she focuses on amplifying marginalized voices in her program development. Recognized by UNICEF in Dubai, UAE, and the winner of Adecco's CEO one-month UAE campaign, she oversees the Violence Against Women, and Seniors and Caregivers Support Services teams at her workplace.",
                "website": "https://familyservicetoronto.org/",
                "twitter": "https://twitter.com/sera_kazmi",
                "linkedin": "https://www.linkedin.com/in/serakazmi/",
                "instagram": "https://www.instagram.com/serakazmi/"
            },
            {
                "name": "Lydia Phillip",
                "pronouns": "She/They",
                "title": "Content Strategist, Impact Organizations of Nova Scotia",
                "image": "images/photos/lydia-phillip.png",
                "description": "Lydia is passionate about transformative change and has been recognized nationally for her work and leadership. A gifted storyteller, published writer and researcher, she uses her voice to inspire, create thought-provoking work, and shape a more just future. She is currently leading IONS’ Beyond Decent Work campaign, which provides creative, innovative resources, tools, and pathways to welcome and empower people in our sector. She has the privilege of living near water in Mi'kmaki, the unceded territory of the Mi'kmaw People.",
                "website": "https://ions.ca/",
                "twitter": "",
                "linkedin": "https://www.linkedin.com/in/lydia-phillip/",
                "instagram": ""
            }
        ]    

    };
    populateSection('inclusion', jsonData.inclusion, 'bg-blue');
    populateSection('youth', jsonData.youth,'bg-yellow');
    populateSection('tech', jsonData.tech,'bg-red');
    populateSection('climate', jsonData.climate,'bg-green');
    populateSection('health', jsonData.health,'bg-white');
});

function populateSection(sectionId, items, bgColorClass) {
    const container = document.querySelector(`#${sectionId} .row.flex-wrap`);
    container.innerHTML = ''; // Clear existing entries

    items.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-6 col-md-4 col-lg-3';
        colDiv.innerHTML = `
            <div class="card bg-darker" data-bs-toggle="modal" data-bs-target="#exampleModal" data-aos="fade-up" data-aos-duration="1000">
                <img src="${item.image}" class="card-img-top ${bgColorClass}" alt="...">
                <div class="card-body text-white">
                    <h4 class="card-title bio-name">${item.name}</h4>
                    <span class="bio-pronouns">${item.pronouns}</span>
                    <p class="small text-white mb-0 bio-title">${item.title}</p>
                </div>
            </div>
        `;

        // Event listener for opening the modal with item details
        colDiv.querySelector('.card').addEventListener('click', () => populateModal(item, bgColorClass));
        container.appendChild(colDiv);
    });
}

function populateModal(item, bgColorClass) {
    const modal = document.querySelector('#exampleModal');
    const modalImage = modal.querySelector('.modal-body img');
    
    // Reset any previous classes and apply the new background color class to the modal's img
    modalImage.className = 'card-img-modal'; // Ensure this is your base class for modal images
    modalImage.classList.add(bgColorClass);
    modalImage.src = item.image;

    modal.querySelector('.modal-body .bio-name').textContent = item.name;
    modal.querySelector('.modal-body .bio-pronouns').textContent = item.pronouns;
    modal.querySelector('.modal-body .bio-title').textContent = item.title;
    modal.querySelector('.modal-body .bio').textContent = item.description;
    modal.querySelector('.modal-body .bio-website').href = item.website || '#';
    modal.querySelector('.modal-body .bio-twitter').href = item.twitter || '#';
    modal.querySelector('.modal-body .bio-linkedin').href = item.linkedin || '#';
    modal.querySelector('.modal-body .bio-instagram').href = item.instagram || '#';

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


