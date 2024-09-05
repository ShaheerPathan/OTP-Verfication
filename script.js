const inputs = document.querySelectorAll('.inp input');
const verifyButton = document.querySelector('button');


function verifyOTP() {
    let otp = '';
    inputs.forEach(input => {
        otp += input.value;
    });

    if (otp.length === inputs.length) {
        alert('Verified.');
    } else {
        alert('Please enter the complete OTP.');
    }
}

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
        if (e.key === 'Enter') {
            verifyOTP();
        }
    });
});

verifyButton.addEventListener('click', () => {
    verifyOTP();
});
