import { Box, Button, Container, FormControlLabel, Paper, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function UserForm(){
    const [form, setForm] = useState({
        name: "", 
        email: "", 
        password: "", 
        phone: "", 
        isAdmin: false
    })
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (id) {
            await axios.put(`http://localhost:8080/users/${id}`, form);
        } else {
            await axios.post(`http://localhost:8080/users`, form)
        } 
        navigate("/");
    }

    const getUserById = async () => {
        const { data } = await axios.get(`http://localhost:8080/users/${id}`)
        setForm(data);
    }

    useEffect(() => {
        if(id){
            getUserById();
        }
    }, [])

    return(
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography> {id ? "Atualização de Usuario" : "Cadastro de Usuarios"} </Typography>
                <TextField 
                    label="Nome"
                    fullWidth
                    margin="normal"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                />

                <TextField 
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                />

                <TextField 
                    label="Senha"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={form.password}
                    onChange={(e) => setForm({...form, password: e.target.value})}
                />

                <TextField 
                    label="Telefone"
                    fullWidth
                    margin="normal"
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                />

                <FormControlLabel 
                    label="Admin"
                    control={
                        <Switch 
                            checked={form.isAdmin}
                            onChange={(e) => setForm({...form, isAdmin: e.target.checked})}
                        />
                    }
                />
                <Box>
                    <Button variant="contained" onClick={handleSubmit}> Salvar </Button>
                </Box>
                
            </Paper>

        </Container>
    )
}