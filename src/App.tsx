
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { store } from './store';
import One from './components/one';
import Second from './components/second';
const theme = createTheme();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" Component={One} />
            <Route path="/about" Component={Second} />
           
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

