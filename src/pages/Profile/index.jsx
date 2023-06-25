import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/input';  
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';

import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

import { Container, Form, Avatar } from "./styles";

export function Profile() {

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar ? `${ api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleUpdate() {
    
    const updated = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    const userupdate = Object.assign( user, updated);
    
    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  
  }

  return (
      <Container>
        <header> 
          <button type='button' onClick={handleBack}>
            <FiArrowLeft size={24}/>
          </button>
        </header>

        <Form>

          <Avatar>
            <img src={avatar}alt="Foto do usuário" />

            <label htmlFor="avatar">
              <FiCamera/>

              <input id='avatar' type='file' onChange={handleChangeAvatar} />
            </label>
          </Avatar>

          <Input placeholder='Nome' type='text' icon={FiUser} value={name} onChange={ e => setName(e.target.value)} />
          <Input placeholder='E-mail' type='text' icon={FiMail} value={email} onChange={ e => setEmail(e.target.value)} />
          <Input placeholder='Senha Atual' type='password' icon={FiLock} onChange={ e => setPasswordOld(e.target.value)} />
          <Input placeholder='Nova Senha' type='password' icon={FiLock} onChange={ e => setPasswordNew(e.target.value)} />

          <Button title='Salvar' onClick={handleUpdate} />
        </Form>
      </Container>
    )
}