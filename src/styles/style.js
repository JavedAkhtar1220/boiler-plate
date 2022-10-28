import { styled } from "@mui/material";

export const MainContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const FooterContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    backgroundColor: "#1875d2",
    height: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));