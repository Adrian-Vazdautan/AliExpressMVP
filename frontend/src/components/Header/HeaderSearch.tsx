import { Group, Button, TextInput, Box, Container, Text, Stack, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconShoppingCart, IconPackage, IconUserCircle, IconLayoutGrid } from '@tabler/icons-react';

export function HeaderSearch() {
  // Проверяем, мобильное ли это устройство (обычно всё, что меньше 768px)
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container size="lg" px={isMobile ? 4 : 0} py={isMobile ? 4 : 8}>
      <Box 
        bg="#ff0036" 
        py={isMobile ? 4 : 6} 
        px={isMobile ? 8 : 16}
        style={{ borderRadius: isMobile ? '8px' : '12px' }} 
      >
        <Group justify="space-between" wrap="nowrap" gap={isMobile ? 4 : 'md'}>
          
          {/* 1. Логотип - на мобилках можно сократить или оставить только иконку */}
          {!isMobile && (
            <Text c="white" fw={900} style={{ fontSize: '22px', letterSpacing: '-1px', cursor: 'pointer' }}>
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
              input: { 
                paddingRight: isMobile ? '45px' : '90px', // Меньше отступ для маленькой кнопки
                height: isMobile ? '36px' : '44px',
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
                h={isMobile ? 30 : 36}
                px={isMobile ? 12 : 20}
                fw={700}
                style={{ fontSize: isMobile ? '11px' : '13px' }}
              >
                {isMobile ? '🔍' : 'Найти'}
              </Button>
            }
          />

          {/* 4. Правое меню */}
          <Group gap={isMobile ? 2 : 4} wrap="nowrap">
            <HeaderAction icon={<IconPackage size={22} />} label="Заказы" isMobile={isMobile} />
            <HeaderAction icon={<IconShoppingCart size={22} />} label="Корзина" isMobile={isMobile} />
            <HeaderAction icon={<IconUserCircle size={22} />} label="Войти" isMobile={isMobile} />
          </Group>

        </Group>
      </Box>
    </Container>
  );
}

function HeaderAction({ icon, label, isMobile }: { icon: React.ReactNode; label: string; isMobile: boolean }) {
  const baseRed = 'rgba(0, 0, 0, .1)';
  const hoverRed = 'rgba(200, 30, 30, 1)';

  return (
    <UnstyledButton
      p={isMobile ? 4 : 6}
      style={{
        borderRadius: '8px',
        backgroundColor: baseRed,
        transition: 'background-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: isMobile ? '40px' : '65px'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverRed)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = baseRed)}
    >
      <Stack gap={0} align="center">
        <Box c="white" style={{ height: isMobile ? 20 : 22, display: 'flex', alignItems: 'center' }}>
          {icon}
        </Box>
        {/* Скрываем текст на мобилках, чтобы сэкономить место */}
        {!isMobile && (
          <Text c="white" style={{ fontSize: '10px', marginTop: '1px' }} fw={600}>
            {label}
          </Text>
        )}
      </Stack>
    </UnstyledButton>
  );
}