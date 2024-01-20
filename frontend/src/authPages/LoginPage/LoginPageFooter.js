import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import RedirectInfo from '../../shared/components/Redirectinfo';
import { useHistory } from "react-router-dom";
import { Tooltip  } from '@mui/material';

const getFormNotValidMessage=()=>{
    return 'Enter correct e-mail address and password should contains betweeen 6 to 12 characters';

};

const getFormValidMessage=()=>{
    return 'Press to log in!';

};

const LoginPageFooter=({ handleLogin, isFormValid })=>{
    const history=useHistory();

         const handlePushToRegisterPage=()=> {
            history.push("/register");
         };
        

    return (
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormNotValidMessage()}
        >
         <div>
         <CustomPrimaryButton
         label="Log in"
         additionalStyles={{ marginTop: "30px" }}
         disabled={!isFormValid}
         onClick={handleLogin}
         />
         </div>
         </Tooltip>
        <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
        />
         </>
    );
};
export default LoginPageFooter;