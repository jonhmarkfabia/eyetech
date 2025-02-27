const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors()); 




const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'topiecagne',
    database: 'EyeTechEcommerce'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});


app.post('/signup', async (req, res) => {
    const { username, password, email, phoneNumber } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `INSERT INTO Users (Username, Password, Email, PhoneNumber) VALUES (?, ?, ?, ?)`;

        db.query(query, [username, hashedPassword, email, phoneNumber], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: 'Username or email already exists' });
                }
                throw err;
            }
            res.status(201).json({ message: 'User registered successfully!' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM Users WHERE Email = ?`;
    db.query(query, [username], async (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.Password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful!' });
    });
});

app.post('/saveAddress', (req, res) => {
   
    const { first_name, last_name, email, country, province, city, barangay, postcode, phone } = req.body;

    
    if (!first_name || !last_name || !email || !phone || !postcode) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    
    const query = `INSERT INTO DeliveryAddress (FirstName, LastName, Email, Country, Province, City, Barangay, ZipCode, PhoneNumber)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

   
    db.query(query, [first_name, last_name, email, country, province, city, barangay, postcode, phone], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Error saving address' });
        }

        
        res.status(200).json({ message: 'Address saved successfully' });
    });
});


app.post('/api/save-order', (req, res) => {
    const { firstName, lastName, city, province, country, postcode, phone, shippingMethod, paymentMethod, subtotal, shippingFee, totalPrice } = req.body;

    const query = `INSERT INTO Orders (FirstName, LastName, City, Province, Country, Postcode, Phone, ShippingMethod, PaymentMethod, Subtotal, ShippingFee, TotalPrice)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [firstName, lastName, city, province, country, postcode, phone, shippingMethod, paymentMethod, subtotal, shippingFee, totalPrice];

    db.query(query, values, (err) => {
        if (err) {
            console.error('Database error during order save:', err);
            return res.status(500).json({ error: 'Error saving order' });
        }
        res.status(200).json({ message: 'Order saved successfully' });
    });
});





app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
