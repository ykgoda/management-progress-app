'use client';
import styled from 'styled-components';
import {LoginForm, UserPage} from '../../index';
import { getCsrfToken, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {
//             csrfToken: await getCsrfToken(context),
//         }
//     }
// }

const Page : React.FC = () => {
    const { data: session} = useSession();

    if(!session){
        return (
            <>
                <SLogin>
                  <SLoginTitle children='management'/>
                  <LoginForm />
                </SLogin>
            </>
        )
    } 
    return (
        <UserPage session={session}/>
    )
}

const SLogin = styled.div`
width:60%;
height: 80vh;
background-color: red;
margin: 40px auto;
`;

const SLoginTitle = styled.header`
color:white;
height:20%;
`;

export default Page;