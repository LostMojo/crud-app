
const personValidationRules = [
    {
        name: "firstName",
        rule: /^.{1,50}$/,
        ruleDescription: "First name is required with a maximum length of 50."
    },
    {
        name: "lastName",
        rule: /^.{1,50}$/,
        ruleDescription: "Last name is required with a maximum length of 50."
    },
    {
        name: "emailAddress",
        rule: /^[a-z0-9._%+-]+@[a-z0-9.-]+$/,
        ruleDescription: "Email is required, must contain an @"
    },
    {
        name: "streetAddress",
        rule: /^.{1,50}$/,
        ruleDescription: "Street address is required with a maximum length of 50."
    },
    {
        name: "city",
        rule: /^.{1,50}$/,
        ruleDescription: "City is required with maximum length of 50."
    },
    {
        name: "state",
        rule: /^.{2}$/,
        ruleDescription: "State is required with length 2."
    },
    {
        name: "zipCode",
        rule: /^.{5}$/,
        ruleDescription: "Zip code is required with length 5."
    },
];

const validateChange = (validationRule) => {
    const inputElement = document.getElementsByName(validationRule.name)[0];
    const inputGroup = inputElement.parentElement;

    if (inputElement.value.match(validationRule.rule)) {
        inputGroup.classList.remove("has-error");
        removeErrorMessage(inputElement);
        if (!document.getElementsByClassName("has-error")[0]) 
            document.querySelector("input[name='Submit']").disabled = false;
        return true;
    } else {
        inputGroup.classList.add("has-error");
        displayErrorMessage(validationRule, inputElement);
        document.querySelector("input[name='Submit']").disabled = true;
        return false;
    }
}

const displayErrorMessage = (validationRule, inputElement) => {
    inputName = validationRule.name;

    if (document.getElementById(`${inputName}-error`))
        return

    const inputGroup = inputElement.parentElement;

    const errorMessageElement = document.createElement("div");
    errorMessageElement.id = `${inputName}-error`;
    errorMessageElement.classList.add("text-danger");
    
    const errorMessageText =  document.createTextNode(validationRule.ruleDescription);
    errorMessageElement.appendChild(errorMessageText);

    inputGroup.appendChild(errorMessageElement);
}

const removeErrorMessage = (inputElement) => {
    const errorMessageElement = document.querySelector(`#${inputElement.name}-error`);
    if (errorMessageElement)
        errorMessageElement.remove();
}

function addValidateFormListeners(validatorRules) {
    validatorRules.forEach((validatorRule) => {
        document.getElementsByName(validatorRule.name)[0].addEventListener("change",  () => validateChange(validatorRule));
    });
}


addValidateFormListeners(personValidationRules);