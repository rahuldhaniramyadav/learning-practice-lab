const sanitizeData = ({firstName, lastName, email, password, age, gender, profilePhoto, about, skills}) => {
    // console.log(firstName, lastName, email, password); 
    return {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        password,
        age,
        gender,
        profilePhoto,
        about,
        skills: skills
    }
};

module.exports = {sanitizeData};
