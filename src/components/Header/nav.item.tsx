import { ReactNode } from 'react';

import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
  icon?: ReactNode;
}

const CustomLink = styled('p')({
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'inline-block',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: '-7px',
    left: '0',
    backgroundColor: '#fff',
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out'
  },
  '&:hover:after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left'
  }
});

export const NavItem = ({ label, icon, href }: NavItemProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      {icon}
      <Link href={href} style={{ textDecoration: 'none', color: 'white' }}>
        <CustomLink>{label}</CustomLink>
      </Link>
    </Stack>
  );
};
