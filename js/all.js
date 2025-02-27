
function openLoginModal(event) {
    event.preventDefault(); 
    document.getElementById('loginModal').style.display = "block";
}


function closeLoginModal() {
    document.getElementById('loginModal').style.display = "none";
}


function openSignupModal(event) {
    event.preventDefault(); 
    document.getElementById('signupModal').style.display = "block";
    closeLoginModal(); 
}


function closeSignupModal() {
    document.getElementById('signupModal').style.display = "none";
}


function openForgotPasswordModal(event) {
    event.preventDefault(); 
    document.getElementById('forgotPasswordModal').style.display = "block";
    closeLoginModal(); 
}


function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = "none";
}   


async function loginUser(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        username: email, 
        password: password
    };

    try {

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });

        const result = await response.json();
        if (response.status === 200) {
            alert(result.message); 
            closeLoginModal(); 
            
            localStorage.setItem('isLoggedIn', 'true');

            
         
           
       
            
        } else {
            localStorage.setItem('isLoggedIn', 'false');
            alert(result.error); 

            
        
        }
        
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again.');
    }
}


function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    
}

function closeLoginModal() {
    console.log('Closing login modal...');
    document.getElementById('loginModal').style.display = 'none';
}

window.onload = function() {
    
    const loginButton = document.getElementById('loginButton');

    if (localStorage.getItem('isLoggedIn') === 'true') {
        loginButton.innerText = 'Logout';

        loginButton.onclick = function() {    
            if (confirm("Are you sure you want to log out?")) {
                localStorage.setItem('isLoggedIn', 'false'); 
               
                loginButton.innerText = 'Login';
                alert("You have logged out successfully!"); 
                location.reload();
                localStorage.clear();

                 
                
            }
              

        };

        
    } else {
        loginButton.innerText = 'Login';
        loginButton.onclick = function() {
            openLoginModal(); // Open login modal
            

        };
        
    }

    
};


async function signupUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const signupData = {
        username: username,
        password: password,
        email: email,
        phoneNumber: '' 
    };

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData)
        });

        const result = await response.json();
        if (response.status === 201) {
            alert(result.message); 
            closeSignupModal(); 
            
        } else {
            alert(result.error); 
        }
    } catch (error) {
        console.error('Error signing up:', error);
        alert('An error occurred. Please try again.');
    }
}


async function resetPassword(event) {
    event.preventDefault(); 

    const email = document.getElementById('forgotEmail').value;

    const resetData = {
        email: email
    };

    try {
        const response = await fetch('http://localhost:3000/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resetData)
        });

        const result = await response.json();
        if (response.status === 200) {
            alert('Password reset link has been sent to your email.');
            closeForgotPasswordModal(); 
        } else {
            alert(result.error); 
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        alert('An error occurred. Please try again.');
    }
}


window.onclick = function(event) {
    if (event.target === document.getElementById('loginModal')) {
        closeLoginModal();
    }
    if (event.target === document.getElementById('signupModal')) {
        closeSignupModal();
    }
    if (event.target === document.getElementById('forgotPasswordModal')) {
        closeForgotPasswordModal();
    }
};


function checkLoginAndRedirect() {
    
    if (localStorage.getItem('isLoggedIn') === 'true') {
        
        window.location.href = 'shoppingcart.html';
    } else {
       
        alert('You must be logged in to access the shopping cart.');
        window.location.href = 'home.html'; 
    }
}
