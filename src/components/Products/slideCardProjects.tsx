import { Box, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import { Project } from 'app/types';

import { Text, TextMedium } from 'components/Typography';

import { fadeIn } from 'app/utils/keyframes';
import { NextImage } from 'app/utils/utils';

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: '669px',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  padding: '16px',
  boxSizing: 'border-box',
  background: 'rgba(24, 22, 27, 0.1)',
  borderRadius: '20px',
  backdropFilter: 'blur(30px)',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    left: '-40px',
    padding: '32px'
  }
}));

const StackRelative = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    right: 40
  }
}));

const Item = styled(Box)(() => ({
  animation: `${fadeIn} 0.5s ease-in`,
  transition: '0.5s ease all'
}));

interface SlideCardProjectsProps {
  project: Project;
}

export const SlideCardProducts: React.FC<SlideCardProjectsProps> = ({
  project
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack
      spacing={4}
      key={project.title}
      style={{ padding: isMobile ? 20 : 0 }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
        spacing={isMobile ? 2 : 0}
      >
        {isMobile && (
          <Stack>
            <Text>{project.subTitle}</Text>
            <TextMedium>{project.title}</TextMedium>
          </Stack>
        )}
        <Box
          width={isMobile ? 450 : 580}
          height={isMobile ? 250 : 340}
          style={{
            backgroundColor: '#2B0B3A',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          <NextImage
            src={project.image}
            width={isMobile ? 275 : 550}
            height={isMobile ? 160 : 320}
            alt="Project"
            style={{ borderRadius: '10px', objectFit: 'cover' }}
          />
        </Box>
        <Stack
          direction="column"
          alignItems={isMobile ? 'flex-star' : 'flex-end'}
          spacing={!isMobile ? 4 : 2}
        >
          {!isMobile && (
            <StackRelative>
              <Text>{project.subTitle}</Text>
              <TextMedium>{project.title}</TextMedium>
            </StackRelative>
          )}
          <StyledBox>
            <Text>{project.description}</Text>
          </StyledBox>
          <StackRelative
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextMedium>Cupom</TextMedium>
            <Stack direction="row" spacing={2}>
              <Item>
                {project.techs}
              </Item>
            </Stack>
          </StackRelative>
        </Stack>
      </Stack>
    </Stack>
  );
};
