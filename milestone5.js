var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var fatherElement = document.getElementById('FatherName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var qualificationElement = document.getElementById('qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('Skills');
    if (profilePictureInput && nameElement && fatherElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var fathername = fatherElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture element//
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var dynamicResume = "\n                <h2>Resume</h2>\n             \n             ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" id=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Father's Name:</strong> ").concat(fathername, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n             <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Qualification:</h3>\n            <p>").concat(qualification, "</p>\n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills:</h3>\n            <p>").concat(skills, "</p>\n        ");
        var dynamicResumeElement = document.getElementById('dynamicResume');
        if (dynamicResumeElement) {
            dynamicResumeElement.innerHTML = dynamicResume;
        }
        else {
            console.error(' Resume element is missing');
        }
    }
    else {
        console.error('No profile picture file selected');
    }
});
