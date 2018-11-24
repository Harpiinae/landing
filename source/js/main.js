(function() {
    var openFormButton = document.querySelector('.btn_down');
    var formValid = document.querySelector('.form');

    var contactName = document.querySelector('.contact_name');
    var contactEmail = document.querySelector('.contact_email');
    var contactNumber = document.querySelector('.contact_number');

    var navLink = document.querySelectorAll('.nav_link');

    for(var i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click',function(e) {
            navigation.goto(e.target.dataset.link);
        })
    }

    if(openFormButton) {
        openFormButton.addEventListener('click', function() {
            form.open();
        })
    }

    if(formValid) {
        formValid.addEventListener('submit', function(e) {
            e.preventDefault();
            if(form.isValid()) {
                console.log("All is valid");
            } else {
                console.log("Not all is valid");
            }
        })
    }

    if(contactName) {
        contactName.addEventListener('blur', function() {
            if(validation.isNotEmpty(contactName.value)) {
                console.log("Name is valid");
                contactName.classList.remove('danger');
            } else {
                console.log("Name is not valid");
                contactName.classList.add('danger');
            }
        })
    }

    if(contactEmail) {
        contactEmail.addEventListener('blur', function() {
            if(validation.isEmail(contactEmail.value)) {
                console.log("Email is valid");
                contactEmail.classList.remove('danger');
            } else {
                console.log("Email is not valid");
                contactEmail.classList.add('danger');
            }
        })
    }

    if(contactNumber) {
        contactNumber.addEventListener('blur', function() {
            if(validation.isNumber(contactNumber.value)) {
                console.log("Name is valid");
                contactNumber.classList.remove('danger');
            } else {
                console.log("Email is not valid");
                contactNumber.classList.add('danger');
            }
        })
    }
}());