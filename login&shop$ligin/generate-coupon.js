document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-coupon');
    const couponDetails = document.getElementById('coupon-details');
    const couponCodeElement = document.getElementById('coupon-code');
    const couponPercentageElement = document.getElementById('coupon-percentage');
    const copyButton = document.getElementById('copy-coupon');

    generateButton.addEventListener('click', function() {
        const discountPercentage = document.getElementById('discount-percentage').value;
        if (discountPercentage < 1 || discountPercentage > 100) {
            alert('Please enter a valid discount percentage between 1 and 100.');
            return;
        }

        // Generate a random coupon code
        const couponCode = 'COUPON-' + Math.random().toString(36).substr(2, 8).toUpperCase();

        // Display coupon details
        couponCodeElement.textContent = couponCode;
        couponPercentageElement.textContent = discountPercentage;
        couponDetails.classList.remove('hidden');

        // Store the coupon code and percentage in localStorage for validation later
        localStorage.setItem('couponCode', couponCode);
        localStorage.setItem('discountPercentage', discountPercentage);
    });

    copyButton.addEventListener('click', function() {
        const couponCode = document.getElementById('coupon-code').textContent;
        navigator.clipboard.writeText(couponCode).then(() => {
            alert('Coupon code copied to clipboard!');
        });
    });
});
