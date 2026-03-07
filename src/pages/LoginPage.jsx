import {
  Login as LoginIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ToastAlert } from "../../utils/ToastAlerta";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/ApiService";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await loginUser({ email });

      login(data);
      ToastAlert("Usuário foi Logado com sucesso!", "sucesso");
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.message === "Usuário não encontrado."
          ? "Este e-mail não está cadastrado em nossa base."
          : "Erro ao conectar com o servidor. Tente novamente mais tarde.";

      ToastAlert(`${errorMessage}`, "sucesso");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{ bgcolor: "primary.main", p: 1, borderRadius: "50%", mb: 2 }}
          >
            <LoginIcon sx={{ color: "white" }} />
          </Box>

          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Entrar
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}>
            <TextField
              label="E-mail"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <TextField
              label="Senha"
              fullWidth
              required
              margin="normal"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShow(!show)} edge="end">
                        {show ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{ mt: 3, mb: 2, py: 1.5, fontWeight: "bold" }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Entrar"
              )}
            </Button>

            <Box textAlign="center" mt={2}>
              <Typography variant="body2" color="textSecondary">
                Não tem uma conta?{" "}
                <Link
                  component={RouterLink}
                  to="/register"
                  fontWeight="bold"
                  underline="hover"
                >
                  Cadastre-se aqui
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
