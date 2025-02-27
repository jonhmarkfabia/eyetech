document.addEventListener('DOMContentLoaded', () => {
    const glassesList = [
        {
            id:'1',
            image: './asset/leftimg1.png',
            price: 'P 750',
            brand: 'Oakley',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'2',
            image: './asset/leftimg2.png',
            price: 'P 1200',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        
        {
            id:'3',
            image: './asset/leftimg3.png',
            price: 'P 750',
            brand: 'Oakley',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'4',
            image: './asset/leftimg4.png',
            price: 'P 1300',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        
        {
            id:'5',
            image: './asset/rightimg1.png',
            price: 'P 750',
            brand: 'Oakley',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'6',
            image: './asset/rightimg2.png',
            price: 'P 620',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        
        {
            id:'7',
            image: './asset/rightimg3.png',
            price: 'P 750',
            brand: 'Oakley',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'8',
            image: './asset/rightimg4.png',
            price: 'P 1304',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'9',
            image: './asset/black1.png',
            price: 'P 16,500.00',
            brand: 'Venom BRC11',
            description: 'Stylish and durable sunglasses.'
        },
        {
            image: './asset/black2.png',
            price: 'P 16,500.00',
            brand: 'Venom BRC11',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'10',
            image: './asset/black3.png',
            price: 'P 16,500.00',
            brand: 'Venom BRC11',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'11',
            image: './asset/black4.png',
            price: 'P 16,500.00',
            brand: 'Venom BRC11',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'12',
            image: './asset/homepageproduct1.png',
            price: 'P 500',
            brand: 'Ray-Ban',
            description: 'Stylish and durable sunglasses.'
        },
        {
            id:'13',
            image: './asset/homepageproduct2.png',
            price: 'P 750',
            brand: 'Oakley',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'14',
            image: './asset/image1.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'15',
            image: './asset/image2.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'16',
            image: './asset/image3.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Stylish and durable sunglasses.'
        },
        {
            id:'17',
            image: './asset/image4.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Perfect for outdoor adventures.'
        },
        {
            image: './asset/image5.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            image: './asset/image6.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'18',
            image: './asset/image7.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'19',
            image: './asset/image8.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'20',
            image: './asset/image9.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'21',
            image: './asset/image10.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Stylish and durable sunglasses.'
        },
        {
            image: './asset/image11.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Perfect for outdoor adventures.'
        },
        {
            image: './asset/image12.png',
            price: 'P 1,999.95',
            brand: 'Mugler - Spiral 01 M02',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'22',
            image: './asset/left-img (2).png',
            price: 'P 1,999.95',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'23',
            image: './asset/right-img2.png',
            price: 'P 1,999.95',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'24',
            image: './asset/spiral-01-c1_1_2 1.png',
            price: 'P 75',
            brand: 'Oakley',
            description: 'Perfect for outdoor adventures.'
        },
        {
            id:'25',
            image: './asset/SPIRAL-01-CS1_1_1 1.png',
            price: 'P 120',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        },
        {
            id:'26',
            image: './asset/SPIRAL-01-M01_1_1 1.png',
            price: 'P 120',
            brand: 'Gucci',
            description: 'Luxury eyewear for a premium look.'
        }

    ];

    const glassesGrid = document.querySelector('.glasses-grid');

    glassesList.forEach(glasses => {
        const glassesCard = document.createElement('div');
        glassesCard.classList.add('glasses-card');
        glassesCard.innerHTML = `
            <div class="glasses-cover">
                <img src="${glasses.image}" alt="${glasses.brand} Eyewear">
            </div>
            <p><strong>Price:</strong> ${glasses.price}</p>
            <p><strong>Brand:</strong> ${glasses.brand}</p>
            <p><strong>Description:</strong> ${glasses.description}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        glassesCard.querySelector('.add-to-cart').addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            
            cart.push(glasses);
            
          
            localStorage.setItem('cart', JSON.stringify(cart));
            
            alert(`${glasses.brand} has been added to your cart!`);
        });

        glassesGrid.appendChild(glassesCard);
    });
});

