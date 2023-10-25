const surveyForm = document.getElementById("surveyForm");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupResults = document.getElementById("popupResults");

// data

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var dob = document.getElementById("dob");
var country = document.getElementById("country");
var genderMale = document.getElementById("genderMale");
var genderFemale = document.getElementById("genderFemale");
var profession = document.getElementById("profession");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");



submitBtn.addEventListener("click", function () {
    if (surveyForm.checkValidity()) {
        const formData = new FormData(surveyForm);
        let results = "";

        formData.forEach(() => {
            results += `First Name : ${firstName.value} <br/>`;
            results += `Last Name  : ${lastName.value} <br/>`;
            results += `Date Of Birth : ${dob.value} <br/>`;
            results += `Country : ${country.value} <br/>`;
            if (genderMale.checked) {
                results += `Gender : Male <br/>`;
            } else if (genderFemale.checked) {
                // Female radio button is selected
                results += `Gender : Female <br/>`;
            } 
            results += `profession ${profession.value} <br/>`;
            results += `Email : ${email.value} <br/>`;
            results += `Mobile No : ${mobile.value} <br/>`
        });

        results += "</ul>";
        popupResults.innerHTML = results;
        popup.style.display = "block";

        // Clear the form
        surveyForm.reset();
    } else {
        alert("Please fill in all the required fields.");
    }
});

resetBtn.addEventListener("click", function () {
    surveyForm.reset();
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});
