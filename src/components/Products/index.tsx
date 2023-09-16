'use client';
import { styled } from '@mui/material';
import { Project } from 'app/types';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Text } from 'components/Typography';

import { SlideCardProducts } from './slideCardProjects';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/globals.css';
import 'swiper/css/autoplay';

const StyledSection = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '560px',
  paddingTop: '100px',
  maxWidth: '1280px',
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    padding: '0 16px'
  }
}));
export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Niver Fut',
      subTitle: 'Siga seu Ritmo',
      description: 'Toda semana um CUPOM novo é desbloqueado',
      image: '/images/projects/banner.webp',
      techs: 'PRIMEIRACOMPRA'
    },
    {
      id: 2,
      title: '70% de desconto!',
      subTitle: 'Produtos com até',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      image: '/images/projects/banner.webp',
      techs: 'PRIMEIRACOMPRA'
    }
  ];

  return (
    <StyledSection id="projetos" gap={6}>
      <Swiper
        pagination={true}
        loop={true}
        className="mySwiper"
        modules={[Pagination, Autoplay]}
        speed={2500}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id}>
            <SlideCardProducts project={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  );
};

export default Projects;
