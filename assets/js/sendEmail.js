function sendMail(contactForm) {
    emailjs.send ("gmail", "nanny", { //method emailjs.send has 3 aguments, gmail, nanny and form (form consists of 3 parameters)
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then( //then method is for the promise
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("ERROR", error);
        });  
}