import React, { useState, useEffect } from "react";
import "../styles/HomeMain.css";
import background from '../assets/background.svg';
import mailclosed from '../assets/mailclosed.svg';
import mailopened from '../assets/mailopened.svg';
import mailmessage from '../assets/mailmessage.svg';

export default function HomeMain() {
    const [mailStep, setMailStep] = useState("closed");

    useEffect(() => {
        const openedTimeout = setTimeout(() => setMailStep("opened"), 200);
        const messageTimeout = setTimeout(() => setMailStep("message"), 1000);
        return () => {
            clearTimeout(openedTimeout);
            clearTimeout(messageTimeout);
        };
    }, []);

    return (
        <div className="main">
            <div className="main-bg">
                <img src={background} className="main-bg-img" alt="background"/>
            </div>
            <div className="main-mail">
                <img
                    src={mailclosed}
                    className={`main-mail-img mail-rotated ${mailStep === "closed" ? "visible" : "hidden"}`}
                    alt="mail closed"
                />
                <img
                    src={mailopened}
                    className={`main-mail-img mail-rotated ${mailStep === "opened" ? "visible" : "hidden"}`}
                    alt="mail opened"
                />
                <img
                    src={mailmessage}
                    className={`main-mail-img mail-rotated ${mailStep === "message" ? "visible" : "hidden"}`}
                    alt="mail message"
                />
            </div>
        </div>
    );
}
