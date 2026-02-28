import { Avatar, Box, Card, CardContent, Grid, IconButton, Switch, TextField, Typography } from "@mui/material"
import axios from "axios"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PersonAdd } from "@mui/icons-material"

export function UserList(){
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const findUsers = async () => {
        const { data } = await axios.get(`http://localhost:8080/users`)
        setUsers(data);
    }

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir esse usuario?")){
            const response = await axios.delete(`http://localhost:8080/users/${id}`)
            if(response.status == 204){
                findUsers();
            }
        }  
    }

    useEffect(() => {
        findUsers();
    },[])

    const filteredUsers = users.filter((user) =>
        [user.name, user.email].some((field) =>
            field.toLowerCase().includes(search.toLowerCase())
        )
    )

    return(
        <>
            <Typography> Usuarios </Typography>
            <IconButton color="primary" onClick={() => navigate("/save-user")}>
                <PersonAdd />
            </IconButton>
            <TextField 
                label="Buscar..."
                fullWidth
                margin="normal"
                size="small"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Grid container spacing={3} justifyContent="flex-start">
            {filteredUsers.map((user) => (
                <Grid
                key={user.id}
                sx={{flexGrow: 1, flexBasis: 0, maxWidth: 300, minWidth: 250}}
                >
                <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Avatar
                            alt={user.name}
                            src={`https://i.pravatar.cc/150?u=${user.id}`}
                            sx={{ width: 52, height: 52, m: 2}}
                        />
                        <Typography variant="h6">{user.name}</Typography>
                    </Box>
                    <CardContent>
                    <Typography variant="body2" noWrap>{user.email}</Typography>
                    <Typography variant="body2">{user.phone}</Typography>
                    <Typography variant="body2">
                        Admin: <Switch checked={user.isAdmin} />
                    </Typography>
                    </CardContent>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: 8 }}>
                        <IconButton color="primary" onClick={() => navigate(`/user/${user.id}`)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error" onClick={() => handleDelete(user.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </Card>
                </Grid>
            ))}
            </Grid>
        </>
    )
}