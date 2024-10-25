// // import React, { useState } from "react";
// // import "../Components/Signup.css"
// // export function Signup()
// // {
// //     const[user,setuser]=useState(
// //         {
// //             Name:'',Email:'',Number:'',Password:'',Dob:''
// //         }
// //     )
// //     let name,value;
// //     const data=(e)=>{

// //         name=e.target.name;
// //         value=e.target.value;
// //         setuser({...user,[name]:value});
// //         console.log(user);


// //     }
// //     const getdata=()=>{
// //         const{Name,Email,Number,Password,Dob}=user;
// // // e.preventDefault();
// // const options={
// //     method:'POST',
// //     headers:{
// //         'Content-Type':'application/json'
// //     },
// //     body:JSON.stringify({

// //     })

// // }
// // const res=fetch(
// //     'https://store-data-3c945-default-rtdb.firebaseio.com/UserData.json',
// //     options

// // )
// // console.log(res);
// // if(res){
// //     alert("Message Sent")
// // }
// // else{
// //     alert("Error Occured")
// // }
// //     }
// //     return(
    
// //         <div className="body">
// //         <div className="container">
// //             <div style={{border:'2px solid white',borderRadius:'10px'}}>
// //             <form>
// //                 <h1 className="h1">SIGNUP</h1>
// //         <label className="label">UserName</label><br/>
// //         <input type="text" className="input" name="Name" value={user.Name} onChange={data}/><br/>
// //         <label className="label">Mobile Number</label><br/>
// //         <input type="number" className="input" name="Number" value={user.Number} onChange={data}/><br/>
// //         <label className="label">Email</label><br/>
// //         <input type="email" className="input" name="Email" value={user.Email} onChange={data}/><br/>
// //         <label className="label">password</label><br/>
// //         <input type="password" className="input" name="Password" value={user.Password} onChange={data}/><br/>
// //          <label className="label">DOB</label><br/>
// //         <input type="date" className="input" name="Dob" value={user.Dob} onChange={data}/><br/>
// //         <button className="butn" onClick={getdata}>Signup</button>
// // </form>
// // </div>


// //         </div>
// //         </div>
        
// //     )
// // }import React, { useState } from "react";
// import "../Components/Signup.css";
// import React, { useState } from "react";
// export function Signup() {
//     const [user, setUser] = useState({
//         Name: '',
//         Email: '',
//         Number: '',
//         Password: '',
//         Dob: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission

//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user) // Send the user data
//         };

//         try {
//             const response = await fetch(
//                 'https://store-data-3c945-default-rtdb.firebaseio.com/UserData.json',
//                 options
//             );
//             if (response.ok) {
//                 alert("Message Sent");
//                 setUser({ Name: '', Email: '', Number: '', Password: '', Dob: '' }); // Clear the form
//             } else {
//                 alert("Error Occurred");
//             }
//         } catch (error) {
//             console.error("Fetch error:", error);
//             alert("Error Occurred");
//         }
//     };

//     return (
//         <div className="body">
//             <div className="container">
//                 <div style={{ border: '2px solid white', borderRadius: '10px' }}>
//                     <form onSubmit={handleSubmit}>
//                         <h1 className="h1">SIGNUP</h1>
//                         <label className="label">UserName</label><br />
//                         <input type="text" className="input" name="Name" value={user.Name} onChange={handleChange} /><br />
//                         <label className="label">Mobile Number</label><br />
//                         <input type="number" className="input" name="Number" value={user.Number} onChange={handleChange} /><br />
//                         <label className="label">Email</label><br />
//                         <input type="email" className="input" name="Email" value={user.Email} onChange={handleChange} autoComplete="of" /><br />
//                         <label className="label">Password</label><br />
//                         <input type="password" className="input" name="Password" value={user.Password} onChange={handleChange} /><br />
//                         <label className="label">DOB</label><br />
//                         <input type="date" className="input" name="Dob" value={user.Dob} onChange={handleChange} /><br />
//                         <button className="butn" type="submit">Signup</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
import "../Components/Signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function Signup() {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Number: '',
        Password: '',
        Dob: ''
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user) // Send the user data
        };

        try {
            const response = await fetch(
                'https://store-data-3c945-default-rtdb.firebaseio.com/UserData.json',
                options
            );
            if (response.ok) {
                alert("Message Sent");
                setUser({ Name: '', Email: '', Number: '', Password: '', Dob: '' }); // Clear the form
                navigate("/LoginPage"); // Navigate to another page
            } else {
                alert("Error Occurred");
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
                        <h1 className="h1">SIGNUP</h1>
                        <label className="label">UserName</label><br />
                        <input type="text" className="input" name="Name" value={user.Name} onChange={handleChange} /><br />
                        <label className="label">Mobile Number</label><br />
                        <input type="number" className="input" name="Number" value={user.Number} onChange={handleChange} /><br />
                        <label className="label">Email</label><br />
                        <input type="email" className="input" name="Email" value={user.Email} onChange={handleChange} autoComplete="off" /><br />
                        <label className="label">Password</label><br />
                        <input type="password" className="input" name="Password" value={user.Password} onChange={handleChange} /><br />
                        <label className="label">DOB</label><br />
                        <input type="date" className="input" name="Dob" value={user.Dob} onChange={handleChange} /><br />
                        <button className="butn" type="submit">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
