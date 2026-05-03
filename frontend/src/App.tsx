import { MantineProvider, createTheme, Container, Stack } from '@mantine/core';
import { HeaderSearch } from './components/Header/HeaderSearch';
import { CardsCarousel } from './components/Carousel/CardsCarousel';
import '@mantine/core/styles.css'; 
import '@mantine/carousel/styles.css';
import './App.css';

const theme = createTheme({
  /** Тут можно будет потом настроить свои цвета для AliExpressMVP */
  primaryColor: 'orange', // Сделаем закос под Али
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {/* Хедер без контейнера снаружи, чтобы фон был на всю ширину */}
      
      
      {/* Глобальный контейнер для всего, что ниже хедера */}
      <Container size="xl">
        <HeaderSearch />
        <CardsCarousel />
        {/* Сюда потом добавишь остальной контент */}
      </Container>
    </MantineProvider>
  );
}

export default App;