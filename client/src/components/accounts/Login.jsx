import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled, darkScrollbar } from '@mui/material';
import { API } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider.jsx';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const signupInitiateValues = {
    name: '',
    username: '',
    password: ''
}

const loginInitiateValues = {
    username: '',
    password: ''
}

const Login = ({isUserAuthenticated}) => {
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitiateValues);
    const [login, setLogin] = useState(loginInitiateValues);
    const [error, showError] = useState('');
    const {setAccount} = useContext(DataContext);

    const navigate = useNavigate();


    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name] : e.target.value})
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name] : e.target.value})
    }

    const signupUser = async ()=>{
        console.log("heher")
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitiateValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }   
    
    const loginUser = async () => {
        let response = await API.userLogin(login);
        console.log(login)
        if (response.isSuccess) {
            showError('');
            // console.log("response.isSuccess")
            // console.log(response.isSuccess)
            
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            
            setAccount({username:response.data.username, name: response.data.name});

            isUserAuthenticated(true)
            setLogin(loginInitiateValues);

            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton onClick={()=>loginUser()} variant="contained">Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;