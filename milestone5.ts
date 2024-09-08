
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const fatherElement = document.getElementById('FatherName') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const qualificationElement = document.getElementById('qualification') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('Skills') as HTMLInputElement;

    if (profilePictureInput && nameElement && fatherElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const fathername = fatherElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const qualification = qualificationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        
      
            //picture element//
     const profilePictureFile = profilePictureInput.files ?.[0]
         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "" ;


            const dynamicResume = `
                <h2>Resume</h2>
             
             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profilePicture">` : ""}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Father's Name:</strong> ${fathername}</p>
            <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Qualification:</h3>
            <p>${qualification}</p>
            <h3>Experience:</h3>
            <p>${experience}</p>
            <h3>Skills:</h3>
            <p>${skills}</p>
        `;


            const dynamicResumeElement = document.getElementById('dynamicResume');
            if (dynamicResumeElement) {
                dynamicResumeElement.innerHTML = dynamicResume;
            } else {
                console.error(' Resume element is missing');
            }
        } else {
            console.error('No profile picture file selected');
        }
    } 
);
