import React, {Component} from 'react'

export default class Login extends Component{
    render(){
        return(
            <div class="modal-dialog">
                <div class="loginmodal-container">
                    <h1>{window.FlaskText}</h1>
                    <form action="/" method="POST">
                        <input id="username" name="username" type="text" placeholder="Username"></input>
                        <input id="password" name="password"type="password" placeholder="Password"></input>
                        <input type="submit" value="login"></input>
                    </form>
                </div>
            </div>
        );
    }
}