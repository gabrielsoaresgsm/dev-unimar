'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';

import MenuIcon from '@mui/icons-material/Menu';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  IconButton,
  styled
} from '@mui/material';
import Box from '@mui/material/Box';

import { NextImage } from 'app/utils/utils';

const StyledBody = styled(Box)({
  width: 216,
  background:
    'var(--purplestyled, linear-gradient(135deg, #9655CD 0%, #56178C 80%))',
  position: 'fixed',
  top: 80,
  border:
    'var(--purplestyled, linear-gradient(135deg, #9655CD 0%, #56178C 80%))',
  borderRadius: '0 10px',
  right: 0
});

const NAV_ITEMS = [
  {
    label: 'Inicio',
    icon: '/images/icons/home.svg',
    href: 'introduction'
  },
  {
    label: 'Produtos',
    icon: '/images/icons/sobre.svg',
    href: 'sobre'
  },
  {
    label: 'Administrativo',
    icon: '/images/icons/habilidades.svg',
    href: 'projetos'
  },
  {
    label: 'Carrinho',
    icon: '/images/icons/contato.svg',
    href: 'contato'
  }
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        open &&
        event.target instanceof Element &&
        !event.target.closest('.slide-body')
      ) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(() => {
    document?.addEventListener('click', handleOutsideClick);

    return () => {
      document?.removeEventListener('click', handleOutsideClick);
    };
  }, [open, handleOutsideClick]);

  return (
    <div>
      <IconButton color="inherit">
        <MenuIcon onClick={handleMenuClick} sx={{ fontSize: 35 }} />
      </IconButton>
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <StyledBody className="slide-body">
          <List>
            {NAV_ITEMS.map((menu) => (
              <Link
                activeClass="active"
                to={menu.href}
                key={menu.label}
                smooth={true}
                duration={500}
                offset={0}
              >
                <ListItem key={menu.label}>
                  <ListItemButton>
                    <ListItemIcon>
                      <NextImage
                        src={menu.icon}
                        height={24}
                        width={24}
                        alt="icon"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.label}
                      sx={{ fontFamily: 'Space Mono' }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </StyledBody>
      </Slide>
    </div>
  );
};

export default Menu;
