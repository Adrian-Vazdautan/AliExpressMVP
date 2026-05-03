import { Group, Button, TextInput, Box, Container, Text, Stack, UnstyledButton } from '@mantine/core';
import { IconShoppingCart, IconPackage, IconUserCircle, IconLayoutGrid } from '@tabler/icons-react';

export function HeaderSearch() {
  return (
    <Container size="lg" px={0} py={8}> {/* Уменьшили внешний отступ */}
      <Box 
        bg="#ff0036" 
        py={6} // Уменьшили внутренний вертикальный отступ плашки
        px={16}
        style={{ borderRadius: '12px' }} 
      >
        <Group justify="space-between" wrap="nowrap" gap="md">
          
          {/* 1. Логотип */}
          <Text c="white" fw={900} style={{ fontSize: '22px', letterSpacing: '-1px', cursor: 'pointer' }}>
            AliExpress
          </Text>

          {/* 2. Каталог */}
          <HeaderAction icon={<IconLayoutGrid size={20} stroke={2.5} />} label="Каталог" />

          {/* 3. Поиск (Уменьшили высоту до 40px) */}
          <TextInput
            placeholder="ланчбокс"
            size="md"
            radius="md"
            style={{ flex: 1 }}
            styles={{
              input: { 
                paddingRight: '100px', 
                height: '50px', // Уменьшили высоту с 60px
                border: 'none',
                fontSize: '14px'
              },
              section: { width: 'auto', paddingRight: 10 }
            }}
            rightSection={
              <Button 
                color="#b5f045" 
                c="black" 
                radius="xl" 
                h={42} // Уменьшили кнопку под стать инпуту
                px={30}
                fw={700}
                style={{ fontSize: '13px' }}
              >
                Найти
              </Button>
            }
          />

          {/* 4. Правое меню */}
          <Group gap={4} wrap="nowrap">
            <HeaderAction icon={<IconPackage size={22} />} label="Заказы" />
            <HeaderAction icon={<IconShoppingCart size={22} />} label="Корзина" />
            <HeaderAction icon={<IconUserCircle size={22} />} label="Войти" />
          </Group>

        </Group>
      </Box>
    </Container>
  );
}

function HeaderAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  // Константы цветов для удобства
  const baseRed = 'rgba(0, 0, 0, .1)'; // Красный чуть темнее основного фона
  const hoverRed = 'rgba(200, 30, 30, 1)'; // Еще более темный при наведении

  return (
    <UnstyledButton
      p={6} // Уменьшили паддинги кнопок
      style={{
        borderRadius: '10px',
        backgroundColor: baseRed, // Теперь меню красное, а не серое
        transition: 'background-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '65px' // Уменьшили ширину для компактности
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverRed)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = baseRed)}
    >
      <Stack gap={0} align="center">
        <Box c="white" style={{ height: 22, display: 'flex', alignItems: 'center' }}>
          {icon}
        </Box>
        <Text c="white" style={{ fontSize: '10px', marginTop: '1px' }} fw={600}>
          {label}
        </Text>
      </Stack>
    </UnstyledButton>
  );
}