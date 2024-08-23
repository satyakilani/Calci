// script.js

// Select the display input
const display = document.querySelector('input[name="display"]');

// Add event listeners to all buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        // Handle the AC (All Clear) button
        if (value === 'AC') {
            display.value = '';
        }

        // Handle the DE (Delete) button
        else if (value === 'DE') {
            display.value = display.value.slice(0, -1);
        }

        // Handle the equal (=) button
        else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        }

        // Handle other buttons
        else {
            display.value += value;
        }
    });
});
