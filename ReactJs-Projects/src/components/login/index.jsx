import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";


function LoginComponent(){
    
    const[loginFormData, setLoginFormData] = useState({
        email : '',
        password : ''
    })

    return (
        <div>
            <h1>Login Page/Component</h1>
            <CommonForm 
            formData={loginFormData} 
            setFormData={setLoginFormData} 
            formControls={loginFormElements}
            />
        </div>
    );
}

export default LoginComponent;