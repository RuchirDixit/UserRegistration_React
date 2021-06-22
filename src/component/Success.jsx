import React from 'react';

export function Success() {

    const token = localStorage.getItem("token");
    return(
        <div className="container">
            <h1>Login successful.</h1>
        </div>
    );
}