import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import useAuth from '../../hooks/useAuth';
import * as C from './styles';


const HomePage = () => {

  const {signout} = useAuth();
  const navigate = useNavigate();

  return (
    <C.container>
      <C.title>Home</C.title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.container>
  )
}

export default HomePage;