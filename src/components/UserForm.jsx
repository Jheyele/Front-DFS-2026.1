import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, saveUser, updateUser } from "../services/ApiService";

export function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
  });
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (id) {
      await updateUser(id, form);
    } else {
      await saveUser(form);
    }
    navigate("/users");
  };

  const getUser = async () => {
    const { data } = await getUserById(id);
    setForm(data);
  };

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, []);

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography>
            {" "}
            {id ? "Atualização de Usuario" : "Cadastro de Usuarios"}{" "}
          </Typography>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            label="Senha"
            fullWidth
            type={show ? "text" : "password"}
            margin="normal"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => setShow(!show)}>
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              },
            }}
          />

          <TextField
            label="Telefone"
            fullWidth
            margin="normal"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <FormControlLabel
            label="Admin"
            control={
              <Switch
                checked={form.isAdmin}
                onChange={(e) =>
                  setForm({ ...form, isAdmin: e.target.checked })
                }
              />
            }
          />
          <Box>
            <Button variant="contained" onClick={handleSubmit}>
              {" "}
              Salvar{" "}
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
