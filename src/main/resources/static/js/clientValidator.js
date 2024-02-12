
const formInputs = [
    {
        name: "companyName",
        rule: /^.{1,50}$/
    },
    {
        name: "websiteUri",
        rule: /^.{1,100}$/
    },
    {
        name: "phoneNumber",
        rule: /^[0-9]{9,12}$/
    },
    {
        name: "streetAddress",
        rule: /^.{1,50}$/
    },
    {
        name: "city",
        rule: /^.{1,50}$/
    },
    {
        name: "state",
        rule: /^.{1,2}$/
    },
    {
        name: "zipCode",
        rule: /^.{1,5}$/
    },
];

formInputs.forEach((formInput) => {
    document.getElementsByName(formInput.name)[0].addEventListener("change", function() {validateChange(formInput)});
});

function validateChange(formInput){
    let inputElement = document.getElementsByName(formInput.name)[0];
    let inputGroup = inputElement.parentElement;

    if (inputElement.value.match(formInput.rule)) {
        inputGroup.classList.remove("has-error");
        if (!document.getElementsByClassName("has-error")[0]) 
            document.querySelector("input[name='Submit']").disabled = false;
        return true;
    } else {
        inputGroup.classList.add("has-error");
        document.querySelector("input[name='Submit']").disabled = true;
        return false;
    }
}