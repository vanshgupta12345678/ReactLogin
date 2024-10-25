import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const [credentials, setCredentials] = useState({
        Email: '',
        Password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent defassssult form submission

        try {
            const response = await fetch('https://store-data-3c945-default-rtdb.firebaseio.com/UserData.json');
            const data = await response.json();

            // Convert data into an array for easier checking
            const users = Object.values(data);

            // Check if user exists with matching email and password
            const user = users.find(user => 
                user.Email === credentials.Email &&
                user.Password === credentials.Password
            );
// hello changes
            if (user) {
                alert("Login successful");
                navigate("/welcome"); // Navigate to a welcome page or dashboard
            } else {
                alert("Invalid login credentials");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Error Occurred");
        }
    };

    return (
        <div className="body">
            <div className="container">
                <div style={{ border: '2px solid white', borderRadius: '10px' }}>
                    <form onSubmit={handleSubmit}>
                        <h1 className="h1">LOGIN</h1>
                        <label className="label">Email</label><br />
                        <input 
                            type="email" 
                            className="input" 
                            name="Email" 
                            value={credentials.Email} 
                            onChange={handleChange} 
                            required // Optional: ensures the field is filled
                        /><br />
                        <label className="label">Password</label><br />
                        <input 
                            type="password" 
                            className="input" 
                            name="Password" 
                            value={credentials.Password} 
                            onChange={handleChange} 
                            required // Optional: ensures the field is filled
                        /><br />
                        <button className="butn" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
