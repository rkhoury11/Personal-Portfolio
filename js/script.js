document.getElementById("email").addEventListener("click", function(){
    const myEmail = "rkhoury11@icloud.com";
    const subject = "Contacting from personal website";

    const mailToLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailToLink;
});