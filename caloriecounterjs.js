const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

document.getElementById('loginbutton').onclick = function () {
    window.location.href = 'LoginPage.html';
};
document.getElementById('signupbutton').onclick = function () {
    window.location.href = 'signuppage.html';
};

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the calorie calculator form submission
    document.getElementById('calorie-calculator').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting the traditional way
        calcDailyCals(); // Call function to calculate daily calories
    });

    // Event listener for the macro calculator form submission
    document.getElementById('macro-calculator').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting the traditional way
        calcCalsFromMacros(); // Call function to calculate calories from macros
    });

    // Event listener for reset buttons to clear results
    document.querySelectorAll('button[type="reset"]').forEach(function (button) {
        button.addEventListener('click', function () {
            let results = document.getElementById('results');
            let mResults = document.getElementById('m-results');
            fadeOut(results, function () {
                results.innerHTML = ''; // Clear the content of results sections
            });
            fadeOut(mResults, function () {
                mResults.innerHTML = ''; // Clear the content of results sections
            });
        });
    });

    // Function to calculate calories from macros
    function calcCalsFromMacros() {
        let carbs = parseInt(document.getElementById('carbs').value) * 4; // Carbs in grams * 4 calories per gram
        let protein = parseInt(document.getElementById('protein').value) * 4; // Protein in grams * 4 calories per gram
        let fat = parseInt(document.getElementById('fat').value) * 9; // Fat in grams * 9 calories per gram

        let result = carbs + protein + fat; // Total calories from macros

        // Update the macro results section
        let mResults = document.getElementById('m-results');
        fadeOut(mResults, function () {
            mResults.innerHTML = '<h3>Estimated Daily Calories: ' + result + '</h3>';
            fadeIn(mResults);
        });
    }

    // Function to calculate daily calories based on user input
    function calcDailyCals() {
        let age = parseInt(document.getElementById('age').value); // User's age
        let sex = document.querySelector('input[name="sex"]:checked').value; // User's sex
        let weight = parseFloat(document.getElementById('weight').value) * 0.453592; // User's weight in pounds converted to kg
        let height = parseFloat(document.getElementById('inches').value); // User's height in inches converted to cm
        let activity = parseFloat(document.getElementById('activity_level').value); // User's activity level factor
        let goal = parseInt(document.getElementById('gain_loss_amount').value); // User's goal calories to gain/lose

        let result;

        // Calculate BMR (Basal Metabolic Rate) based on sex and activity level
        if (sex === 'male') {
            result = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activity;
        } else {
            result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)) * activity;
        }

        result = Math.round(result + goal); // Add goal calories and round the result

        // Call function to calculate daily macros based on the total calories
        calcDailyMacros(result);

        // Update the daily calorie results section
        let results = document.getElementById('results');
        fadeOut(results, function () {
            results.innerHTML = '<h3>Estimated Daily Calories: ' + result + '</h3>';
            fadeIn(results);
        });

        // Function to calculate daily macros (carbs, protein, fat)
        function calcDailyMacros(result) {
            let carbs = (result * 0.4) / 4; // 40% of total calories from carbs
            let protein = (result * 0.3) / 4; // 30% of total calories from protein
            let fat = (result * 0.3) / 9; // 30% of total calories from fat

            // Update the macro input fields with calculated values
            document.getElementById('carbs').value = Math.round(carbs);
            document.getElementById('protein').value = Math.round(protein);
            document.getElementById('fat').value = Math.round(fat);
        }
    }

    // Helper function to fade out an element
    function fadeOut(element, callback) {
        element.style.opacity = 1;
        (function fade() {
            if ((element.style.opacity -= 0.1) < 0) {
                element.style.display = "none";
                if (callback) callback();
            } else {
                requestAnimationFrame(fade);
            }
        })();
    }

    // Helper function to fade in an element
    function fadeIn(element, display) {
        element.style.opacity = 0;
        element.style.display = display || "block";
        (function fade() {
            let val = parseFloat(element.style.opacity);
            if (!((val += 0.1) > 1)) {
                element.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }
});

