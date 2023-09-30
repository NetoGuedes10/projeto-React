import React from "react"

import People from "./Assets/people.svg"


import { Container, H1, image, ContainerItens, InputLabel, Input, Button } from "./styles.js";

function App() {
    return (
        <Container>
       <image alt="logo-imagem" src={People}/>
       <ContainerItens>    
            <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />


        <InputLabel>Idade</InputLabel>

        <Input placeholder="Idade" />

        <Button>Cadastrar</Button>
            </ContainerItens>
        </Container>

    );
}

export default App;
