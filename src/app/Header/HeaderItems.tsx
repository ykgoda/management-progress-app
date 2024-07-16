import {HeaderItem} from '../../types/type'
import {styled} from 'styled-components'
import { useState } from 'react';
import {Text} from 'index';

const HeaderItems : React.FC = () => {

    const headerItems: HeaderItem[] = [
        {itemName:'Todo',itemUrl:''},
        {itemName:'ProgressData',itemUrl:''},
        {itemName:'Diary',itemUrl:''},
    ]

    return (
        <SHeaderItems>
            {headerItems.map((item,index) => {
                return (
                    <SHeaderItem>
                        <Text key={index} cursor='pointer'>{item.itemName}</Text>
                    </SHeaderItem>
                )
            })}
        </SHeaderItems>
    ) 
}

export default HeaderItems

const SHeaderItems = styled.div`
    width:50%;
    display: flex;
    // justify-content:space-between;
    height:100%;
    align-items: center;
`

const SHeaderItem = styled.div`
    height:100%;
    display: flex;
    align-items:center;
    padding:0 32px;
    &:hover {
        background: rgba(0,0,0,0.1);
    }
`



