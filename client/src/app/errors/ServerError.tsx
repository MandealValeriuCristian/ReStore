import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError(){
    const history = useHistory();
    const {state} = useLocation<any>();
    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                <Typography variant="h3" gutterBottom color='error'>{state.error.title}</Typography>
                <Divider />
                <Typography>{state.error.detail || 'Internal server error'} </Typography>
                </>
            ) : (
                <Typography variant="h5" gutterBottom>Server error</Typography>
            )}
            <Button variant='contained' onClick={() => history.push('/catalog')}>Go back to the store</Button>
        </Container>
    )
}