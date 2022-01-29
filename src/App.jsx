import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import MessageList from "./components/MessageList/MessageList";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import ChangeMessage from "./components/ChangeMessage/ChangeMessage";
import NewMessage from "./components/NewMessage/NewMessage";

function App() {

    return (
        <div className="App">
            <Navbar/>

            <main>
                <Routes>
                    {
                        <>
                            store.auth ?
                            <>
                                <Route path="/list" element={<MessageList/>}/>
                                <Route path="/change" element={<ChangeColor/>}/>
                                <Route path="/new" element={<NewMessage />}/>
                                <Route path="/message/:id" element={<ChangeMessage />}/>
                            </>
                            :
                            <>
                                <Route path="/login" element={<Auth text="Login" to="Registration"/>}/>
                                <Route path="/registration" element={<Auth text="Registration" to="Login"/>}/>
                                <Route path="*" element={<Navigate to="/login"/>}/>
                            </>
                        </>
                    }


                </Routes>
            </main>

            <Footer/>
        </div>);
}

export default App;
