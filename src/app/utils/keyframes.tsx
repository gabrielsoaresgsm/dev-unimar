import { Box, keyframes, styled } from '@mui/material';

export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const inflar = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

export const blinkCaret = keyframes`
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: #56178C;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AnimateImage = styled(Box)(() => ({
  transition: '0.5s ease all',
  '&:hover': {
    transform: 'scale(1.2)'
  }
}));
