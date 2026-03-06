import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, Paper, TextField, Typography, MenuItem, IconButton } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';


const OfferCreate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    level: 'Iniciante',
    description: '',
    userId:''
  });

  useEffect(() => {
    const userIdStorage = localStorage.getItem('userId');

    if (!userIdStorage){
        alert("O seu login expirou, entre novamente.");
        navigate('/login');
    } else{
        setFormData({...formData, userId: userIdStorage});
    }
  },[navigate])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post("https://squad10.onrender.com/offers", formData)

        if (response.status === 201 || response.status === 200){
            alert("Oferta cadastrada com sucesso");
            navigate("/offers");
        }

    } catch (error) {
        alert("Erro ao cadastrar oferta, tente novamente.")
    }
  };

return (
    <Box 
      display="flex" 
      flexDirection="column"
      minHeight="100vh" 
      sx={{ backgroundColor: '#f5f7fa', py: 4 }}
    >
      <Container maxWidth="sm">
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Nova Oferta
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box component="form" onSubmit={handleSubmit}>
            
            <TextField
              label="Título da Oferta"
              name="title"
              fullWidth
              required
              margin="normal"
              placeholder="Ex: Consultoria em React"
              value={formData.title}
              onChange={handleChange}
            />

            <TextField
              label="Categoria"
              name="category"
              fullWidth
              required
              margin="normal"
              placeholder="Ex: Programação, Design..."
              value={formData.category}
              onChange={handleChange}
            />

            <TextField
              select
              label="Nível da Oferta"
              name="level"
              fullWidth
              margin="normal"
              value={formData.level}
              onChange={handleChange}
            >
              <MenuItem value="Iniciante">Iniciante</MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </TextField>

            <TextField
              label="Descrição Detalhada"
              name="description"
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
              placeholder="Descreva o que você está oferecendo..."
              value={formData.description}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              startIcon={<SaveIcon />}
              sx={{ mt: 4, py: 1.5, fontWeight: 'bold', borderRadius: 2 }}
            >
              Salvar Oferta
            </Button>
            
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default OfferCreate;