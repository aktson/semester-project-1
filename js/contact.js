const form = document.querySelector(".contact-form");

const successMsgContainer = document.querySelector(".msg-container");



// all span from form
const firstNameSpan = document.querySelector(".first-name-span");
const lastNameSpan = document.querySelector(".last-name-span");
const emailSpan = document.querySelector(".email-span");
const messageSpan = document.querySelector(".message-span");

//event listner for form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    checkLength(firstName, firstNameSpan, 5)
    checkLength(lastName, lastNameSpan, 4)
    checkInputEmail(checkValidEmail(email))
    checkLength(message, messageSpan, 15)

    if (firstName && lastName && email && message) {
        showSuccess("Thank you for your message", successMsgContainer)
        firstNameSpan.innerHTML = "";
        lastNameSpan.innerHTML = "";
        emailSpan.innerHTML = "";
        messageSpan.innerHTML = "";
        form.reset();
    }
})


//show error
function showError(errContainer, msg) {
    errContainer.innerHTML = `<p class = "error">${msg}</p>`
}

//show success
function showSuccess(successMsg, container) {
    container.innerHTML = `<p class = "success">${successMsg}</p>`

}

//check length
function checkLength(input, inputContainer, len) {
    if (input.trim().length >= len) {
        return true;
    }
    else {
        showError(inputContainer, `Input must be atleast ${input} characters `)
    }

}

// check for valid email
function checkValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
// check input value
function checkInputEmail(email) {
    if (!email) {
        showError(emailSpan, "Please enter valid email")
    } else {
        return true;
    }
}