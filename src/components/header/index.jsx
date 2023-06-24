import { Container , Profile , Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

export function Header(){
  
  const { signOut } = useAuth();

  function handleSignOut() { 
    signOut();
  }

  return (
      <Container>

        <Profile to="/profile">           
          <img src="https://github.com/marcelomotadev.png" alt="Foto do usuário" />

          <div>
            <span>Bem vindo,</span>
            <strong>Marcelo Mota</strong>
          </div>
        </Profile>

        <Logout onClick={handleSignOut}>
          <RiShutDownLine/>
        </Logout>
      </Container>
    );
}