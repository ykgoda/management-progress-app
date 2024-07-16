import {UserIcon, UserName, HeaderItems} from '../../index'
import * as Auth from 'next-auth'
import styled from 'styled-components'
import {signOut} from 'next-auth/react';

type Props = {
    user:Auth.User;
}

const UserPageHeader : React.FC<Props> = ({user}) => {
    return(
        <SUserPageHeader>
            <SUserPageHeaderContainer>
                <HeaderItems />
                <SUserHeaderInfo>
                    <UserIcon user={user}></UserIcon>
                    <UserName user={user}></UserName>
                    <button onClick={() => signOut()}>Sign Out</button>
                </SUserHeaderInfo>
            </SUserPageHeaderContainer>
        </SUserPageHeader>
    )
}

export default UserPageHeader;

const SUserPageHeader = styled.div`
    background-color: #fff;
    height: 8vh;
`

const SUserPageHeaderContainer = styled.div`
    width:95%;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items: center;
`

const SUserHeaderInfo = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
