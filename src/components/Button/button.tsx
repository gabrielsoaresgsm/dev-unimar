/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';

import { CircularProgress } from '@mui/material';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { NextImage } from 'app/utils/utils';

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  loading?: boolean;
  color?: 'primary' | 'secondary';
  icon?: ReactNode;
  outlinedStyled?: boolean;
  containedStyled?: boolean;
  width?: number | string;
  onClick?: () => void;
}

const DefaultButton = styled(
  ({ outlinedStyled, containedStyled, ...props }: ButtonProps) => (
    <MuiButton {...props} />
  )
)(({ outlinedStyled, containedStyled, loading, width, theme }) => ({
  color: '#FFF',
  width: width || '180px',
  textAlign: 'center',
  transition: '0.5s ease all',
  fontWeight: 600,
  borderRadius: 6,
  height: 36,
  [theme.breakpoints.down('sm')]: {
    height: theme.spacing(4),
    fontSize: '12px',
    width: width || '140px'
  },
  background:
    'var(--purplestyled, linear-gradient(135deg, #9655CD 0%, #56178C 100%))',
  position: 'relative',
  '& > .MuiCircularProgress-root': {
    position: 'absolute'
  },
  textTransform: 'none',

  ...(outlinedStyled && {
    backgroundColor: 'transparent',
    border: `1.8px solid #fff`,
    background: 'transparent',

    '&:hover': {
      border: `1.8px solid rgba(140, 48, 244, 1)`
    },
    ...(loading && {
      border: 'none'
    })
  }),

  ...(containedStyled && {
    background:
      'var(--purplestyled, linear-gradient(135deg, #9655CD 0%, #56178C 100%))',
    transition: 'background-color 1s',
    '&:hover': {
      transition: 'background-color 1s',

      background:
        'var(--purplestyled, linear-gradient(135deg, #9655CD 0%, #56178C 80%))'
    },
    ...(loading && {
      border: 'none'
    })
  })
}));

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  icon,
  ...rest
}) => {
  return (
    <DefaultButton disabled={loading} {...rest} startIcon={icon}>
      {children}
      {loading && <CircularProgress size={24} />}
    </DefaultButton>
  );
};
