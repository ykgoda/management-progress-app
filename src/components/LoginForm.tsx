import {FormItem, PrimaryButton} from '../index';
import styled from 'styled-components';
import autoprefixer from 'autoprefixer';
import {useSession, signIn, signOut} from 'next-auth/react';

type Props = {
    className? : string,
}

const LoginForm : React.FC<Props> = ({className}) => {
    return (
        <SLoginForm>
            <FormItem content='ログイン' type='text' placeholder='aaa@example.com' />
            <FormItem content ='パスワード' type='password' placeholder='' />
            <PrimaryButton style={{margin: '10px auto',display: 'block'}} onClick={() => signIn('credentials',{userId:'aiueo',password:'12345'})}>ログイン</PrimaryButton>
        </SLoginForm>
    )
}

const SLoginForm = styled.div`
    margin:40px auto 0;
`

export default LoginForm;