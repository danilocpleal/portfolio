async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/danilocpleal/main/portfolio/data/profile.json";    
    const response = await fetch(url);

    const profileData = await response.json();
    return profileData;
}
