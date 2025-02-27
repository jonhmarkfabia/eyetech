document.addEventListener('DOMContentLoaded', () => {
  
    const deliverySummarySection = document.querySelector('.delivery-summary');
    const deliveryDetails = JSON.parse(localStorage.getItem('deliveryDetails'));

    if (deliveryDetails) {
        deliverySummarySection.innerHTML = `
            <h3>Delivery Address</h3>
            <p><strong>${deliveryDetails.firstName} ${deliveryDetails.lastName}</strong></p>
            <p>${deliveryDetails.city}, ${deliveryDetails.province}, ${deliveryDetails.country}</p>
            <p>Zip/Postcode: ${deliveryDetails.postcode}</p>
            <p>Phone: ${deliveryDetails.phone}</p>
        `;
    } else {
        deliverySummarySection.innerHTML = `
            <h3>Delivery Address</h3>
            <p>No delivery address available. Please provide one during checkout.</p>
        `;
        alert("Please fill up delivery address");
        window.location.href = 'shoppingcart.html';
    }

   
    const cartItemsContainer = document.querySelector('.order-summary');
    const subtotalElement = document.getElementById('subtotal');
    const shippingFeeElement = document.getElementById('shipping-fee');
    const shippingcost = document.getElementById('shipping-cost');
    const totalPriceElement = document.getElementById('total-price');
    const shippingForm = document.getElementById('shipping-form');
    
    const calculateSubtotal = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return subtotal;
        }

        cart.forEach(item => {
            const quantity = item.quantity || 1;
            const price = parseFloat(item.price?.replace(/[^0-9.-]+/g, '')) || 0;
            subtotal += price * quantity;
        });

        return subtotal;
    };

    const updateShippingAndTotal = () => {
        const shippingMethod = document.querySelector('input[name="shipping"]:checked')?.value || 'pickup';
        const shippingFees = { responsible: 150.00, express: 250.00, pickup: 0.00 };
        const shippingFee = shippingFees[shippingMethod];
        
        const subtotal = calculateSubtotal();
        const totalPrice = subtotal + shippingFee;

        subtotalElement.innerText = `P${subtotal.toFixed(2)}`;
        shippingFeeElement.innerText = `Shipping Fee: P${shippingFee.toFixed(2)}`;
        shippingcost.innerText = `P${shippingFee.toFixed(2)}`;
        totalPriceElement.innerText = `P${totalPrice.toFixed(2)}`;
    };

    shippingForm.addEventListener('change', updateShippingAndTotal);
    updateShippingAndTotal();

 
    const paymentButtons = document.querySelectorAll('.payment-methods button');
    const continueButton = document.querySelector('.continue-btn');
    const selectedPaymentElement = document.getElementById('selected-payment');
    let selectedPayment = '';

    const handlePaymentSelection = (paymentMethod) => {
        selectedPayment = paymentMethod;
        selectedPaymentElement.innerText = `You selected: ${paymentMethod}`;
    };

    paymentButtons.forEach(button => {
        button.addEventListener('click', () => handlePaymentSelection(button.innerText));
    });

    const sendOrderToDatabase = async (orderData) => {
        try {
            const response = await fetch('http://localhost:3000/api/save-order', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
    
            if (!response.ok) {
                throw new Error('HTTP error! Status: ' + response.status);
            }
    
            alert('Order successfully saved!');
            window.location.href = 'shoppingcart.html';
            
        } catch (error) {
            alert('Error saving order. Please try again.');
            console.error('Error:', error);
        }
    };
    

    continueButton.addEventListener('click', (event) => {
        if (!selectedPayment || !shippingForm) {
            event.preventDefault();
            alert('Please select both a payment and shipping method before continuing.');
            return;
        }

        const orderData = {
            ...deliveryDetails,
            shippingMethod: document.querySelector('input[name="shipping"]:checked')?.value,
            paymentMethod: selectedPayment,
            subtotal: calculateSubtotal(),
            shippingFee: parseFloat(shippingFeeElement.innerText.replace(/[^0-9.-]+/g, '')) || 0,
            totalPrice: parseFloat(totalPriceElement.innerText.replace(/[^0-9.-]+/g, '')) || 0
        };

        sendOrderToDatabase(orderData);
    });
});
