const personalBtn = document.getElementById('personalBtn') as HTMLButtonElement;
const experienceBtn = document.getElementById('experienceBtn') as HTMLButtonElement;
const skillsBtn = document.getElementById('skillsBtn') as HTMLButtonElement;

const personalSection = document.getElementById('personalSection') as HTMLDivElement;
const experienceSection = document.getElementById('experienceSection') as HTMLDivElement;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;
const resumePreview = document.getElementById('resumePreview') as HTMLDivElement;

const nextToExperience = document.getElementById('nextToExperience') as HTMLButtonElement;
const nextToSkills = document.getElementById('nextToSkills') as HTMLButtonElement;
const submitResume = document.getElementById('submitResume') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

const resetActiveButton = () => {
    personalBtn.classList.remove('active');
    experienceBtn.classList.remove('active');
    skillsBtn.classList.remove('active');
};

const switchSection = (activeSection: HTMLDivElement) => {
    personalSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    resumePreview.style.display = 'none';  
    activeSection.style.display = 'block';
};

const generateResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const linkedIn = (document.getElementById('linkedIn') as HTMLInputElement).value;
    const portfolio = (document.getElementById('portfolio') as HTMLInputElement).value;

    const job1 = (document.getElementById('job1') as HTMLInputElement).value;
    const company1 = (document.getElementById('company1') as HTMLInputElement).value;
    const duration1 = (document.getElementById('duration1') as HTMLInputElement).value;
    const desc1 = (document.getElementById('desc1') as HTMLTextAreaElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');
    const softSkills = (document.getElementById('softSkills') as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');

    const degree1 = (document.getElementById('degree1') as HTMLInputElement).value;
    const school1 = (document.getElementById('school1') as HTMLInputElement).value;
    const graduation1 = (document.getElementById('graduation1') as HTMLInputElement).value;

    resumeOutput.innerHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Location: ${location}</p>
            <p>LinkedIn: <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            <p>Portfolio: <a href="${portfolio}" target="_blank">${portfolio}</a></p>
        </div>
        <hr>
        <h3>Work Experience</h3>
        <p><strong>${job1}</strong> at ${company1} (${duration1})</p>
        <p>${desc1}</p>
        <hr>
        <h3>Skills</h3>
        <p><strong>Technical Skills:</strong> ${skills}</p>
        <p><strong>Soft Skills:</strong> ${softSkills}</p>
        <hr>
        <h3>Education</h3>
        <p><strong>${degree1}</strong> from ${school1} (${graduation1})</p>
    `;

    switchSection(resumePreview);
};

personalBtn.addEventListener('click', () => {
    resetActiveButton();
    personalBtn.classList.add('active');
    switchSection(personalSection);
});

experienceBtn.addEventListener('click', () => {
    resetActiveButton();
    experienceBtn.classList.add('active');
    switchSection(experienceSection);
});

skillsBtn.addEventListener('click', () => {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});

nextToExperience.addEventListener('click', () => {
    resetActiveButton();
    experienceBtn.classList.add('active');
    switchSection(experienceSection);
});

nextToSkills.addEventListener('click', () => {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});

submitResume.addEventListener('click', (event) => {
    event.preventDefault(); 
    generateResume();      
});
