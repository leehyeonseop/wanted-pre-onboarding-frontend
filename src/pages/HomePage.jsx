import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../axiosInstance';
import { getToken, setToken } from '../localStorage';
import { emailRegExp, passwordRegExp } from '../regExp';

import { Button, Snackbar, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import { Form, Wrapper } from './HomePage.style';

const HomePage = () => {
    const [information, setInformation] = useState({
        email: '',
        password: '',
    });
    const [isLogin, setIsLogin] = useState(true);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleInformation = (e) => {
        const { name, value } = e.target;
        setInformation({
            ...information,
            [name]: value,
        });
    };

    const validation = (regExp, value) => {
        if (value.length === 0) return false;
        return !regExp.test(value);
    };

    const isValid = () => {
        for (let i of Object.values(information)) {
            if (i === '') {
                return true;
            }
        }
    };

    const join = async () => {
        const reqData = {
            email: information.email,
            password: information.password,
        };

        try {
            const response = await axiosInstance.post('auth/signup', reqData);
            response.status === 201 && setOpen(true);
        } catch (error) {
            console.error(error);
            alert('회원가입 실패');
        }
    };

    const login = async () => {
        const reqData = {
            email: information.email,
            password: information.password,
        };

        try {
            const response = await axiosInstance.post('auth/signin', reqData);
            setToken(response.data.access_token);
            navigate('/todo');
        } catch (error) {
            console.error(error);
            alert('아이디와 비밀번호를 확인해주세요.');
        }
    };

    useEffect(() => {
        getToken() && navigate('/todo');
    }, []);

    return (
        <Wrapper>
            <h1>{isLogin ? '로그인' : '회원가입'}</h1>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message="회원가입이 완료되었습니다."
                action={
                    <Button
                        onClick={() => {
                            setIsLogin(true);
                            setOpen(false);
                        }}
                        color="inherit"
                        size="small"
                    >
                        <LoginIcon />
                    </Button>
                }
            />
            <Form>
                <TextField
                    required
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    type="email"
                    error={validation(emailRegExp, information.email)}
                    helperText={
                        validation(emailRegExp, information.email)
                            ? '이메일 형식에 맞게 입력해주세요'
                            : ''
                    }
                    value={information.email}
                    onChange={handleInformation}
                />
                <TextField
                    required
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    error={validation(passwordRegExp, information.password)}
                    helperText={
                        validation(passwordRegExp, information.password)
                            ? '8글자 이상 입력해주세요.'
                            : ''
                    }
                    value={information.password}
                    onChange={handleInformation}
                />
                <Button
                    disabled={
                        isValid() ||
                        validation(emailRegExp, information.email) ||
                        validation(passwordRegExp, information.password)
                    }
                    variant="contained"
                    onClick={isLogin ? login : join}
                >
                    {isLogin ? '로그인' : '회원가입'}
                </Button>
            </Form>
            <button onClick={() => setIsLogin((prev) => !prev)}>
                {isLogin ? '회원이 아니신가요?' : '로그인하기'}
            </button>
        </Wrapper>
    );
};

export default HomePage;
