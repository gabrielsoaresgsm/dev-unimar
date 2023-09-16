'use client';
import { Link } from 'react-scroll';

import {
  Box,
  styled,
  Grid,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';

import { Button } from 'components/Button/button';
import { Text } from 'components/Typography';
import ReusableModal from 'components/Modal/modal';
import { sendSms, sendWhats } from 'services/sendMessage';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '14px',
  maxWidth: '656px',
  width: '656px',
  height: 'auto',
  borderRadius: '14px',
  transition: '.4s linear all',
  background: 'rgba(24, 22, 27, 0.1)',
  backdropFilter: 'blur(30px)',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '484px',
    width: '484px'
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: '390px',
    width: '390px'
  }
}));

export const Card = ({ ...props }) => {
  const { info } = props
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const email = info.Cart.email
  const phone = info.Cart.phone
  const prodcut_name = info.Cart.product_name
  const splitName = email.split("@")

  const body = {
    email: email,
    phone: phone,
    products: [prodcut_name],
  };

  const handleSendSms = async () => {
    try {
      const response = await sendSms(body);
      console.log('SMS enviado com sucesso:', response);
    } catch (error) {
      console.error('Erro ao enviar SMS:', error);
    }
  };

  const handleWhats = async () => {
    try {
      const response = await sendWhats(body);
      console.log('SMS enviado com sucesso:', response);
    } catch (error) {
      console.error('Erro ao enviar SMS:', error);
    }
  };

  return (
    <StyledBox>
      <Grid container rowGap={4}>
        <Grid item xs={12}>
          <Text fontSize={24}>{splitName[0]}</Text>
        </Grid>
        <Grid item xs={12}>
          <Text>
            Email: {email}
          </Text>
        </Grid>

        <Grid item xs={12}>
          <Text>
            Email: {phone}
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={4}>
            <Button onClick={handleSendSms} width={isMobile ? 150 : 180}>Enviar SMS</Button>
            <Button onClick={handleWhats} width={isMobile ? 150 : 180}>Enviar Whats app</Button>
            <ReusableModal
              cod={`Código do produto: ${info.Cart.product_id}`}
              modalTitle={`Produto: ${info.Cart.product_name}`}
              modalContent={`Preço: R$ ${info.Cart.price} `}
              date={`Adicionado no carrinho em: ${info.Cart.date}`}
            />
          </Stack>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default Card;
