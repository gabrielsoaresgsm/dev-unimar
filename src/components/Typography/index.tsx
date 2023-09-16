import { ReactNode } from 'react';

import { CssBaselineProps, styled, Typography as MuiTypography } from '@mui/material';


interface TypographyProps {
  children: ReactNode;
  fontWeight?: number;
  style?: CssBaselineProps
  textAlign?: 'right' | 'left' | 'center' | 'inherit' | 'justify';
  fontSize?: number;
  variant?:
  | 'inherit'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';
}

const StyledTitle = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem'
  },
  lineHeight: '120%'
}));

const StyledText = styled(MuiTypography)<TypographyProps>(
  ({ fontWeight, textAlign, theme, fontSize }) => ({
    fontSize: fontSize || '18px',
    color: 'white',
    transition: '0.5s ease all',
    fontWeight: fontWeight ?? 400,
    display: 'inline',
    fontFamily: 'Montserrat',
    textAlign: textAlign,
    lineHeight: '25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  })
);

const StyledTextMedium = styled(MuiTypography)(
  ({ fontSize, fontWeight }: TypographyProps) => ({
    color: 'white',
    fontSize: fontSize ?? '1.5rem',
    fontFamily: 'Space Mono',
    fontWeight: fontWeight ?? 600
  })
);

export const Title = ({ children }: TypographyProps) => {
  return <StyledTitle variant="h2">{children}</StyledTitle>;
};

export const Text = ({ children, ...rest }: TypographyProps) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export const TextMedium = ({ children, variant }: TypographyProps) => {
  return (
    <StyledTextMedium variant={variant ?? 'h2'}>{children}</StyledTextMedium>
  );
};
