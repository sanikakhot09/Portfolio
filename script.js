/*
<!--
function showAlert() {
    alert("Thanks for reaching out!");
}
    */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView();
}
function showProjectDetails(project) {
    const details = document.getElementById("project-details");
    let content = "";

    if (project === "portfolio") {
        content = `
            <h3>My Portfolio</h3>
            <p>This project is a responsive portfolio website built with HTML, CSS, and JavaScript. 
            It highlights my skills, projects, and includes a contact form. 
            The design focuses on simplicity and modern UI.</p>
        `;
    } else if (project === "medical") {
        content = `
            <h3>Medical Website</h3>
            <p>This project is a healthcare platform developed using ASP.NET and C#. 
            It allows patients to book appointments, view medical records, and connect with doctors. 
            The system emphasizes security and user-friendly navigation.</p>
        `;
    }

    details.innerHTML = content;
    details.style.display = "block";
}
// Simple form validation
function submitForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("formMessage");

    message.style.color = "green";
    message.innerText = "Thank you, " + name + "! Your message has been sent.";
    return false;
}
