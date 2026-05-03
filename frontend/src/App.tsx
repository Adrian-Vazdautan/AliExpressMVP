import { MantineProvider, createTheme } from '@mantine/core';
import { HeaderSearch } from './components/Header/HeaderSearch';
import '@mantine/core/styles.css'; 
import './App.css';

const theme = createTheme({
  /** Тут можно будет потом настроить свои цвета для AliExpressMVP */
  primaryColor: 'orange', // Сделаем закос под Али
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <HeaderSearch />
      {/* Сюда потом добавим сетку товаров */}
    </MantineProvider>
  );
}

export default App;