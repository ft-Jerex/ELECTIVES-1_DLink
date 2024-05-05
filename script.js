// ICON MODALS POPUP
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button')

const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const iconModal = document.querySelector(button.dataset.modalTarget)
        openModal(iconModal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.iconModal.active')
    modals.forEach(iconModal => {
        closeModal(iconModal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const iconModal = button.closest('.iconModal')
        closeModal(iconModal)
    })
})

function openModal(iconModal) {
    if (iconModal == null) return
    iconModal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(iconModal) {
    if (iconModal == null) return
    iconModal.classList.remove('active')
    overlay.classList.remove('active')
}

//DROPDOWN MENU
document.addEventListener('DOMContentLoaded', function() {
document.getElementById("userIcon").addEventListener("click", function() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "none") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  });
});


// ADD LINK POP_UP

document.addEventListener('DOMContentLoaded', function() {
    var addLinkBtn = document.getElementById('addLink_btn');
    var closePopupBtn = document.querySelectorAll('.close-popup, .save_btn');
    var popup = document.getElementById('Pop_up');

    addLinkBtn.addEventListener('click', function() {
        popup.style.display = 'flex';

    });

    closePopupBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });
});

//ADD CATEGORY POPUP

document.addEventListener('DOMContentLoaded', function() {
    var addCategoryBtn = document.getElementById('addCategory_btn');
    var closePopupBtn = document.querySelectorAll('.close-popup, .save_btn');
    var popup = document.getElementById('pop-upCategory');

    addCategoryBtn.addEventListener('click', function() {
        popup.style.display = 'flex';

    });

    closePopupBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });
});

function ScrollToLinkpages(){
    alert("Confirmed Save");
    document.getElementById('linkPages').scrollIntoView({behavior: "smooth"});
}

function ScrollToProfileSection(){
    alert("Confirmed Save");
    document.getElementById('profileSection').scrollIntoView({behavior: "smooth"});
}




    //FOR LINK PLACEHOLDER CODES AND FUNCTIONS
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.input_field');
    var clearButtons = document.querySelectorAll('.edit_btn');

    var inputs2 = document.querySelectorAll('.input_field2');
    var clearButtons2 = document.querySelectorAll('.edit_btn2');

    // Add event listeners to clear the input text when focused
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.value = ''; // Clear input value when focused
        });
    });

    // Add event listeners to clear the input text when the button is clicked
    clearButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.parentElement.querySelector('.input_field');
            input.value = ''; // Clear input value when the button is clicked
            input.focus();
        });
    });

    clearButtons2.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.parentElement.querySelector('.input_field2');
            input.focus();
            var textLength = input.value.length;
            input.setSelectionRange(textLength, textLength); // Set cursor position at the end
            
        });
    });

    
});

// FOR THE SELECT CATEGORY SORTER

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".selectCategory").value = "all";
    document.querySelector(".selectCategory").dispatchEvent(new Event("change"));
  });

document.querySelector(".selectCategory").addEventListener("change", function () {
    var value = this.value;

    document.querySelectorAll(".linkPlaceholder").forEach(function (linkPlaceholder) {
      if (value === "all" || linkPlaceholder.classList.contains(value)) {
        linkPlaceholder.classList.add("visible");
      } else {
        linkPlaceholder.classList.remove("visible");
      }
    });
  });


//      PROFILE
//      Color Initials
document.addEventListener("DOMContentLoaded", function() {
    // Select the color input element
    var colorInput1 = document.getElementById("baseColor");
    var colorInput2 = document.getElementById("accentColor");
    var colorInput3 = document.getElementById("buttonColor");

    // Set the initial color to red (#ff0000)
    colorInput1.value = "#617ebd";
    colorInput2.value = "#5a5959";
    colorInput3.value = "white";

});

// FOR THE USER END CATEGORY SORTER


//Heart React

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class 'heart-react'
    var buttons = document.querySelectorAll('.heart-react');

    // Loop through each button and add event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            toggleColor(this); // 'this' refers to the button being clicked
        });
    });

    function toggleColor(button) {
        if (button.classList.contains("clicked")) {
            button.classList.remove("clicked");
        } else {
            button.classList.add("clicked");
        }
    }
});

//Copy React 
// Get all elements with class 'copyButton'
document.addEventListener("DOMContentLoaded", function() {
var copyButtons = document.querySelectorAll('.copy-react');

// Loop through each button and add event listener
copyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var textToCopy = "https://example.com"; // Replace with your link
        copyTextToClipboard(textToCopy);
    });
});

// Function to copy text to clipboard
function copyTextToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Link copied to clipboard: ' + text);
}
});

//Function For select Link Category

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".selectLink").value = "all";
    document.querySelector(".selectLink").dispatchEvent(new Event("change"));
  });

document.querySelector(".selectLink").addEventListener("change", function () {
    var value = this.value;

    document.querySelectorAll(".container").forEach(function (linkPlaceholder) {
      if (value === "all" || linkPlaceholder.classList.contains(value)) {
        linkPlaceholder.classList.add("visible");
      } else {
        linkPlaceholder.classList.remove("visible");
      }
    });
  });

