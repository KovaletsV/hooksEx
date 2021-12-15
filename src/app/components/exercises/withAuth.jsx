import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = () => {
        localStorage.setItem("user", "1");
        setIsAuth(Boolean(localStorage.getItem("user")));
    };

    const handleLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(Boolean(localStorage.getItem("user")));
    };
    return (
        <>
            <CardWrapper>
                <Component
                    {...props}
                    isAuth={isAuth}
                    onLogin={handleLogin}
                    onLogOut={handleLogOut}
                />
            </CardWrapper>
        </>
    );
};

export default withAuth;
