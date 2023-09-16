'use client';
import { Link } from 'react-scroll';

import { Box, Stack, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

import {
  Contato,
  Habilidades,
  Sobre,
  Projetos
} from '../../../public/images/icons/svg';
import { Button } from '../Button/button';
import MenuMobile from './mobile.header';
import { NavItem } from './nav.item';

const StyledHeader = styled('header')({
  position: 'fixed',
  width: '100vw',
  zIndex: 999,
  borderBottom: '2px solid rgba(255, 255, 255, 0.10)',
  borderRadius: '10px',
  height: '80px'
});

const StyledVidro = styled('div')`
  background: rgba(24, 22, 27, 0.1);
  backdrop-filter: blur(30px);
  height: 100%;
`;

const StyledBody = styled(Box)({
  height: '80px',
  maxWidth: '1280px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px'
});

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Produtos',
    icon: <Habilidades color="#fff" />,
    href: '/'
  },
  {
    label: 'Painel Admin',
    icon: <Projetos color="#fff" />,
    href: '/admin'
  }
];

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <StyledHeader>
      <StyledVidro>
        <StyledBody>
          <Box></Box>
          {isMobile ? (
            <MenuMobile />
          ) : (
            <>
              <Stack direction="row" spacing={8}>
                {NAV_ITEMS.map((item) => (
                  <NavItem {...item} icon={item.icon} />
                ))}
              </Stack>
              <Button outlinedStyled width={150}>
                Carrinho
              </Button>
            </>
          )}
        </StyledBody>
      </StyledVidro>
    </StyledHeader>
  );
};

export default Header;
