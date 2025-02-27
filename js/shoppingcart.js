document.getElementById('delivery-form').addEventListener('submit', async function(e) {
    e.preventDefault(); 

    
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const postcode = document.getElementById('postcode').value;
    const phone = document.getElementById('phone').value;

   
    if (!firstName || !lastName || !email || !postcode || !phone) {
        alert('Please fill all required fields');
        return;
    }

    
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        country: document.getElementById('country').value,
        province: document.getElementById('province').value,
        city: document.getElementById('city').value,
        barangay: document.getElementById('barangay').value,
        postcode: postcode,
        phone: phone,
    };

    
    try {
        const response = await fetch('http://localhost:3000/saveAddress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

       
        const result = await response.json();

        if (response.ok) {
            window.location.href = 'shipping.html'; 
        } else {
            alert(result.error || 'Failed to save address');
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred');
    }
});


    
    const countries = [
        { value: 'PH', name: 'Philippines' }
    ];

    const provinces = {
        PH: [
            { value: 'Abra', name: 'Abra' },
            { value: 'Agusan del Norte', name: 'Agusan del Norte' },
            { value: 'Albay', name: 'Albay' },
            { value: 'Antique', name: 'Antique' },
            { value: 'Bataan', name: 'Bataan' },
            { value: 'Batanes', name: 'Batanes' },
            { value: 'Batangas', name: 'Batangas' },
            { value: 'Benguet', name: 'Benguet' },
            { value: 'Biliran', name: 'Biliran' },
            { value: 'Bohol', name: 'Bohol' },
            { value: 'Tarlac', name: 'Tarlac' }  
        ]
    };

    const cities = {
        PH: {
            'Abra': [
                { value: 'Bangued', name: 'Bangued' },
                { value: 'Lagangilang', name: 'Lagangilang' },
                { value: 'Lagayan', name: 'Lagayan' }
            ],
            'Agusan del Norte': [
                { value: 'Butuan City', name: 'Butuan City' },
                { value: 'Cabadbaran City', name: 'Cabadbaran City' },
                { value: 'Buenavista', name: 'Buenavista' }
            ],
            'Albay': [
                { value: 'Legazpi City', name: 'Legazpi City' },
                { value: 'Daraga', name: 'Daraga' },
                { value: 'Camalig', name: 'Camalig' }
            ],
            'Batangas': [
                { value: 'Batangas City', name: 'Batangas City' },
                { value: 'Tanauan City', name: 'Tanauan City' },
                { value: 'Lipa City', name: 'Lipa City' }
            ],
            'Bohol': [
                { value: 'Tagbilaran City', name: 'Tagbilaran City' },
                { value: 'Panglao', name: 'Panglao' },
                { value: 'Dauis', name: 'Dauis' }
            ],
            'Tarlac': [  
                { value: 'Tarlac City', name: 'Tarlac City' },
                { value: 'Capas', name: 'Capas' },
                { value: 'Concepcion', name: 'Concepcion' },
                { value: 'Gerona', name: 'Gerona' },
                { value: 'San Jose', name: 'San Jose' }
            ]
        }
    };

    const barangays = {
        PH: {
            'Abra': {
                'Bangued': [
                    { value: 'Barangay 1', name: 'Barangay 1' },
                    { value: 'Barangay 2', name: 'Barangay 2' }
                ],
                'Lagangilang': [
                    { value: 'Barangay 3', name: 'Barangay 3' },
                    { value: 'Barangay 4', name: 'Barangay 4' }
                ]
            },
            'Agusan del Norte': {
                'Butuan City': [
                    { value: 'Barangay 5', name: 'Barangay 5' },
                    { value: 'Barangay 6', name: 'Barangay 6' }
                ],
                'Cabadbaran City': [
                    { value: 'Barangay 7', name: 'Barangay 7' },
                    { value: 'Barangay 8', name: 'Barangay 8' }
                ]
            },
            'Albay': {
                'Legazpi City': [
                    { value: 'Barangay 9', name: 'Barangay 9' },
                    { value: 'Barangay 10', name: 'Barangay 10' }
                ],
                'Daraga': [
                    { value: 'Barangay 11', name: 'Barangay 11' },
                    { value: 'Barangay 12', name: 'Barangay 12' }
                ]
            },
            'Batangas': {
                'Batangas City': [
                    { value: 'Barangay 13', name: 'Barangay 13' },
                    { value: 'Barangay 14', name: 'Barangay 14' }
                ],
                'Tanauan City': [
                    { value: 'Barangay 15', name: 'Barangay 15' },
                    { value: 'Barangay 16', name: 'Barangay 16' }
                ]
            },
            'Bohol': {
                'Tagbilaran City': [
                    { value: 'Barangay 17', name: 'Barangay 17' },
                    { value: 'Barangay 18', name: 'Barangay 18' }
                ],
                'Panglao': [
                    { value: 'Barangay 19', name: 'Barangay 19' },
                    { value: 'Barangay 20', name: 'Barangay 20' }
                ]
            },
            'Tarlac': {  
                'Tarlac City': [
                    { value: 'Barangay 1', name: 'Barangay 1' },
                    { value: 'Barangay 2', name: 'Barangay 2' },
                    { value: 'Barangay 3', name: 'Barangay 3' }
                ],
                'Capas': [
                    { value: 'Barangay 4', name: 'Barangay 4' },
                    { value: 'Barangay 5', name: 'Barangay 5' },
                    { value: 'Barangay 6', name: 'Barangay 6' }
                ],
                'Concepcion': [
                    { value: 'Barangay 7', name: 'Barangay 7' },
                    { value: 'Barangay 8', name: 'Barangay 8' },
                    { value: 'Barangay 9', name: 'Barangay 9' }
                ]
            }
        }
    };

   
    function populateSelect(selectElement, data) {
        selectElement.innerHTML = '<option value="">Select</option>';
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.name;
            selectElement.appendChild(option);
        });
    }

   
    const countrySelect = document.getElementById('country');
    populateSelect(countrySelect, countries);

    
    countrySelect.addEventListener('change', function () {
        const countryValue = this.value;
        const provinceSelect = document.getElementById('province');
        const citySelect = document.getElementById('city');
        const barangaySelect = document.getElementById('barangay');

       
        citySelect.innerHTML = '<option value="">Select</option>';
        barangaySelect.innerHTML = '<option value="">Select</option>';

        
        if (countryValue && provinces[countryValue]) {
            populateSelect(provinceSelect, provinces[countryValue]);
        }
    });

    
    document.getElementById('province').addEventListener('change', function () {
        const countryValue = document.getElementById('country').value;
        const provinceValue = this.value;
        const citySelect = document.getElementById('city');
        const barangaySelect = document.getElementById('barangay');

        
        barangaySelect.innerHTML = '<option value="">Select</option>';

        
        if (countryValue && provinceValue && cities[countryValue] && cities[countryValue][provinceValue]) {
            populateSelect(citySelect, cities[countryValue][provinceValue]);
        }
    });

   
    document.getElementById('city').addEventListener('change', function () {
        const countryValue = document.getElementById('country').value;
        const provinceValue = document.getElementById('province').value;
        const cityValue = this.value;
        const barangaySelect = document.getElementById('barangay');

        
        barangaySelect.innerHTML = '<option value="">Select</option>';

        
        if (countryValue && provinceValue && cityValue && barangays[countryValue] && barangays[countryValue][provinceValue] && barangays[countryValue][provinceValue][cityValue]) {
            populateSelect(barangaySelect, barangays[countryValue][provinceValue][cityValue]);
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const cartItemsContainer = document.querySelector('.cart-items');
        const checkoutButton = document.getElementById('proceed-to-checkout');
    
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            checkoutButton.style.display = 'none';
            return;
        }
    
        cart.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('cart-item');
            itemCard.innerHTML = `
                <div class="item-cover">
                    <img src="${item.image}" alt="${item.brand} Eyewear">
                </div>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Brand:</strong> ${item.brand}</p>
                <p><strong>Description:</strong> ${item.description}</p>
                <label for="quantity-${item.id}"><strong>Quantity:</strong></label>
                <input type="number" id="quantity-${item.id}" class="quantity" value="1" min="1">
                <button class="remove-from-cart">Remove</button>
            `;
    
            
            itemCard.querySelector('.remove-from-cart').addEventListener('click', () => {
                const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                location.reload();
            });
    
            cartItemsContainer.appendChild(itemCard);
        });
    
        checkoutButton.addEventListener('click', () => {
            const updatedCart = cart.map(item => {
                const quantity = parseInt(document.querySelector(`#quantity-${item.id}`).value, 10);
                return { ...item, quantity: quantity || 1 };  
            });
    
            localStorage.setItem('cart', JSON.stringify(updatedCart)); 
            window.location.href = 'shipping.html';  
        });
    });
    

    

    document.getElementById('delivery-form').addEventListener('submit', (event) => {
        event.preventDefault();
    
        const deliveryDetails = {
            firstName: document.getElementById('first_name').value,
            lastName: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            country: document.getElementById('country').value,
            province: document.getElementById('province').value,
            city: document.getElementById('city').value,
            barangay: document.getElementById('barangay').value,
            postcode: document.getElementById('postcode').value,
            phone: document.getElementById('phone').value,
            subscribe: document.getElementById('subscribe').checked
        };
    
        localStorage.setItem('deliveryDetails', JSON.stringify(deliveryDetails));
        alert('Delivery address saved! Proceeding to shipping...');
        window.location.href = 'shipping.html'; 
    });
    