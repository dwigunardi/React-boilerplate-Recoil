import React from 'react'
import { useNavigation, useNavigate, useLocation } from 'react-router-dom';

function LoginPage() {
    // let navigate = useNavigation();
    let location = useLocation();
    // let auth = useAuth();
  
    let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username")
  
    //   auth.signin(username, () => {
    //     // Send them back to the page they tried to visit when they were
    //     // redirected to the login page. Use { replace: true } so we don't create
    //     // another entry in the history stack for the login page.  This means that
    //     // when they get to the protected page and click the back button, they
    //     // won't end up back on the login page, which is also really nice for the
    //     // user experience.
    //     navigate(from, { replace: true });
    //   });
    }
  
    return (
      <div>
        <p style={{fontSize:70, color:'black'}}>You must log in to view the page at {from == '/' ? "Home" : null }</p>
  
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  

export default LoginPage