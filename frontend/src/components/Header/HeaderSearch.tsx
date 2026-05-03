import { Group, Button, TextInput, Box, Container, Text, UnstyledButton, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconShoppingCart, IconPackage, IconUserCircle, IconLayoutGrid } from '@tabler/icons-react';

export function HeaderSearch() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const headerHeight = isMobile ? 54 : 70; // Фиксированная высота для выравнивания

  return (
    // Внешний Box дает красный фон на всю ширину
    <Box bg="#ff0036" style={{borderRadius:8, marginBottom: 10, marginTop: 10}}>
      <Container size="lg" px={isMobile ? 8 : 'md'}>
        <Group h={headerHeight} justify="space-between" wrap="nowrap" gap={isMobile ? 8 : 'md'}>
          
          {/* 1. Логотип */}
          {!isMobile && (
            <Text c="white" fw={900} style={{ fontSize: '22px', letterSpacing: '-1px', cursor: 'pointer', flexShrink: 0 }}>
              AliExpress
            </Text>
          )}

          {/* 2. Каталог */}
          <HeaderAction icon={<IconLayoutGrid size={20} stroke={2.5} />} label="Каталог" isMobile={isMobile} />

          {/* 3. Поиск */}
          <TextInput
            placeholder="ланчбокс"
            size="md"
            radius="md"
            style={{ flex: 1 }}
            styles={{
              root: { alignSelf: 'center' },
              input: { 
                paddingRight: isMobile ? '40px' : '90px',
                height: isMobile ? '38px' : '44px',
                border: 'none',
                fontSize: '14px'
              },
              section: { width: 'auto', paddingRight: 4 }
            }}
            rightSection={
              <Button 
                color="#b5f045" 
                c="black" 
                radius="xl" 
                h={isMobile ? 32 : 36}
                px={isMobile ? 10 : 20}
                fw={700}
                style={{ fontSize: isMobile ? '11px' : '13px' }}
              >
                Найти
              </Button>
            }
          />

          {/* 4. Правое меню */}
          <Group gap={0} h="100%" wrap="nowrap" style={{ flexShrink: 0 }}>
            <HeaderAction icon={<IconPackage size={22} />} label="Заказы" isMobile={isMobile} />
            <HeaderAction icon={<IconShoppingCart size={22} />} label="Корзина" isMobile={isMobile} />
            <HeaderAction icon={<IconUserCircle size={22} />} label="Войти" isMobile={isMobile} />
          </Group>

        </Group>
      </Container>
    </Box>
  );
}

function HeaderAction({ icon, label, isMobile }: { icon: React.ReactNode; label: string; isMobile: boolean }) {
  return (
    <UnstyledButton
      h="100%" // Кнопка занимает ВСЮ высоту хедера
      px={isMobile ? 8 : 12}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.2s ease',
        // Убираем фоновый цвет по умолчанию, чтобы не было "квадратов"
      }}
      // Используем инлайновые стили для ховера, так как ты работаешь без CSS модулей сейчас
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <Center c="white">
        {icon}
      </Center>
      {!isMobile && (
        <Text c="white" style={{ fontSize: '11px', marginTop: '4px' }} fw={600}>
          {label}
        </Text>
      )}
    </UnstyledButton>
  );
}