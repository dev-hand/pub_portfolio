import Home from './pages/Home/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import { Layout } from './components/layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
