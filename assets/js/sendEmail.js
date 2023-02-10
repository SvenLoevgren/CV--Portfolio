function sendMail(contactForm) {
    emailjs.send("service_dhbb9pk", "template_6e1jo6f", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value

    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your project request has been sent. We will get back to you soon!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("There was an error sending your project request. Please try again later.");
        }
    );
    return false;  // To block from loading a new page
}
