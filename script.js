var personalBtn = document.getElementById('personalBtn');
var experienceBtn = document.getElementById('experienceBtn');
var skillsBtn = document.getElementById('skillsBtn');
var personalSection = document.getElementById('personalSection');
var experienceSection = document.getElementById('experienceSection');
var skillsSection = document.getElementById('skillsSection');
var resumePreview = document.getElementById('resumePreview');
var nextToExperience = document.getElementById('nextToExperience');
var nextToSkills = document.getElementById('nextToSkills');
var submitResume = document.getElementById('submitResume');
var resumeOutput = document.getElementById('resumeOutput');
var resetActiveButton = function () {
    personalBtn.classList.remove('active');
    experienceBtn.classList.remove('active');
    skillsBtn.classList.remove('active');
};
var switchSection = function (activeSection) {
    personalSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    resumePreview.style.display = 'none';
    activeSection.style.display = 'block';
};
var generateResume = function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var linkedIn = document.getElementById('linkedIn').value;
    var portfolio = document.getElementById('portfolio').value;
    var job1 = document.getElementById('job1').value;
    var company1 = document.getElementById('company1').value;
    var duration1 = document.getElementById('duration1').value;
    var desc1 = document.getElementById('desc1').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var softSkills = document.getElementById('softSkills').value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var degree1 = document.getElementById('degree1').value;
    var school1 = document.getElementById('school1').value;
    var graduation1 = document.getElementById('graduation1').value;
    resumeOutput.innerHTML = "\n        <div class=\"resume-header\">\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <p>Location: ").concat(location, "</p>\n            <p>LinkedIn: <a href=\"").concat(linkedIn, "\" target=\"_blank\">").concat(linkedIn, "</a></p>\n            <p>Portfolio: <a href=\"").concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a></p>\n        </div>\n        <hr>\n        <h3>Work Experience</h3>\n        <p><strong>").concat(job1, "</strong> at ").concat(company1, " (").concat(duration1, ")</p>\n        <p>").concat(desc1, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <p><strong>Technical Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Soft Skills:</strong> ").concat(softSkills, "</p>\n        <hr>\n        <h3>Education</h3>\n        <p><strong>").concat(degree1, "</strong> from ").concat(school1, " (").concat(graduation1, ")</p>\n    ");
    switchSection(resumePreview);
};
personalBtn.addEventListener('click', function () {
    resetActiveButton();
    personalBtn.classList.add('active');
    switchSection(personalSection);
});
experienceBtn.addEventListener('click', function () {
    resetActiveButton();
    experienceBtn.classList.add('active');
    switchSection(experienceSection);
});
skillsBtn.addEventListener('click', function () {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});
nextToExperience.addEventListener('click', function () {
    resetActiveButton();
    experienceBtn.classList.add('active');
    switchSection(experienceSection);
});
nextToSkills.addEventListener('click', function () {
    resetActiveButton();
    skillsBtn.classList.add('active');
    switchSection(skillsSection);
});
submitResume.addEventListener('click', function (event) {
    event.preventDefault();
    generateResume();
});
