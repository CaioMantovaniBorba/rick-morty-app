import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import client from './services/api';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Header toggleTheme={toggleTheme} />
          <Routes />
          <GlobalStyle />
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
