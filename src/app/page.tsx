'use client';
import Image from 'next/image'
import {useRouter} from 'next/navigation';
import { useEffect,useState } from 'react';
import {UserPage, Login} from '../index';

const Home: React.FC = () => {
  // const router = useRouter();
  // const [user, setUser] = useState<string>('');

  // useEffect(()=>{
  //   setUser('aiueo');
  // },[])
  
  return (
    <Login />
  )
}

export default Home;