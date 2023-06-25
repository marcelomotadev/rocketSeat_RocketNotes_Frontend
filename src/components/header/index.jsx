import { Container , Profile , Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";

export function Header(){
  
  const { signOut, user } = useAuth();

  const navigation= useNavigate();

  const avatarURL = user.avatar ? `${ api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;


  function handleSignOut() { 
    navigation('/');
    signOut();
  }

  return (
      <Container>

        <Profile to="/profile">           
          <img src={avatarURL} alt={user.name} />

          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <Logout onClick={handleSignOut}>
          <RiShutDownLine/>
        </Logout>
      </Container>
    );
}