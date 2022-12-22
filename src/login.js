import React from 'react';


function App() {
  return (
    <div class="login-page">
    <div class="form">
      <form class="login-form" method="post" action="/login">
        <input type="text" name="username" placeholder="username"/>
        <input type="password"  name="password" placeholder="password"/>
        <button>login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  </div>
  );
}

export default App;


