"use client"
import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import Card from "components/Card/Card";
import Header from "components/Header/header";
import { Title } from "components/Typography";
import { db } from "./db";

const StyledSection = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
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

export const Admin = () => {
  return (
    <div>
      <Header />
      <StyledSection>
        <Stack spacing={6}>
          <Title>Carrinhos abandonados</Title>
          {db.map((info) => (
            <Card key={info.Cart.session_id} info={info} />
          ))}
        </Stack>
      </StyledSection>
    </div>
  )
}

export default Admin;