import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f58980',
      dark: 'rgb(171, 95, 89)',
      light: '#f7a099',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#f50057',
      light: '#f73378',
      dark: '#ab003c',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d83131',
      light: '#df5a5a',
      dark: '#972222',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02',
      light: '#f08934',
      dark: '#a54b01',
      contrastText: '#ffffff',
    },
    info: {
      main: '#f5c2bc',
      light: '#ffe8e5',
      dark: '#f5b1ab',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      light: '#57975b',
      dark: '#205723',
      contrastText: '#ffffff',
    },
    divider: 'rgba(0,0,0,0.12)',
    background: {
      paper: '#ffffff',
      default: '#ffe0e0',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
