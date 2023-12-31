
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "../../Assets/avatar.svg";
import Arrow from "../../Assets/arrow.svg";
import Trash from "../../Assets/trash.svg";

import { Container, H1, Image, ContainerItens, Button, User } from "./styles.js";

function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

 function goBackPage(){
   navigate("/");
 }




  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários!</H1>
        <Button>Cadastrar <img alt="seta" src={Arrow} /></Button>
        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name} </p>- <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
        <Button><img alt="seta" src={Arrow} /> Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Users


