// import './App.css';
// import Messages from "../messages/messages";
// import ColorChanger from "../colorChanger/color-changer";
// import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
// import {useState} from "react";
//
// function App() {
//
//     const [selectedColor, setColorValue] = useState('');
//     const [selectedProperty, setPropertyValue] = useState('');
//
//     return (
//         <div className='App'>
//             <Router>
//                 <div>
//                     <div>
//                         <nav className='navigation'>
//                             <Link className='link' to="/messages">Messages</Link><br/>
//                             <Link className='link' to="/color-changer">Color Changer</Link><br/>
//                         </nav>
//                     </div>
//                     <Routes>
//                         <Route path="/messages" element={
//                             <Messages selectedColor={selectedColor}
//                                       selectedProperty={selectedProperty}/>
//                         }/>
//                         <Route path="/color-changer" element={
//                             <ColorChanger selectedColor={selectedColor}
//                                           setColorValue={setColorValue}
//                                           selectedProperty={selectedProperty}
//                                           setPropertyValue={setPropertyValue}/>
//                         }/>
//                     </Routes>
//                 </div>
//             </Router>
//         </div>
//     );
// }
//
// export default App;
