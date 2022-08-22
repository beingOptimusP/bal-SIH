import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import mainTheme from './muiTheme';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/prajjwaljogdand/bal",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApolloProvider>
  </React.StrictMode>
);

