import React from 'react';


function App() {
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p class="message">Already registered? <a href="./login">Sign In</a></p>
                </form>

            </div>
        </div>
    );
}

export default App;


