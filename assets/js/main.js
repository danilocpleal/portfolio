
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo 
    photo.alt = profileData.name 

    const nome = document.getElementById('profile.name')
    nome.innerText = profileData.nome


    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const mail = document.getElementById('profile.mail')
    mail.innerText = profileData.mail
    mail.href = `mailto:${profileData.mail}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`).join('');
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language  => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
         <li> 
            <h3 ${project.github ? 'class="title github"' : ''}>${project.nome}</h3>
            <a href="${project.url}" target="_blanck">${project.url}</a>
        </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience');

    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
         <li> 
            <h3 class="title">${experience.nome}</h3>
            <p class="period">${experience.period}</p>
            <p class="text">${experience.description}</p>
        </li>
        `
    }).join('')
}

function updateAcademicEducation(profileData){
    const academicEducation = document.getElementById('profile.academicEducation');

    academicEducation.innerHTML = profileData.academicEducation.map(academic => {
        return `
         <li> 
            <h3 class="title">${academic.nome}</h3>
            <p class="period">${academic.period}</p>
        </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateAcademicEducation(profileData)
})()