// // // import logo from './logo.svg';
// // // import './App.css';
// // // // import {Ram} from "./Components/RamRaj"
// // // import {Signup} from './Components/Signup';
// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       {/* <Ram/> */}
// // //       <Signup/>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { Signup } from './Components/Signup';
// // import { LoginPage } from './Components/LoginPage'; // Import the other page component
// // import { Welcome } from './Components/Welcome.js';
// // function App() {
// //     return (
// //         <Router>
// //             <Routes>
// //                 <Route path="/" element={<Signup />} />
// //                 <Route path="/LoginPage" element={<LoginPage />} />
// //                 <Route path="/welcome" element={<Welcome />} />
// //             </Routes>
// //         </Router>
// //     );
// // }

// // export default App;
// import React from "react";
// import Props from "./Components/Props";
// export default function App()
// {
//     return(
//         <Props text={{name:'vansh',class:'BCA'}}/>
//     )
// }
import React from "react";
import Button from "./Components/Button";
export default function App()
{
    return(
        <>
        <div className="App">
            <h1>Hello World</h1>
            <Button ><h1 style={{color:'green'}} onClick={()=>{alert('Hello')}}>Vansh</h1></Button>
            <Button><h1>VanshGupta</h1></Button>
            
        </div>
        </>
    )
}