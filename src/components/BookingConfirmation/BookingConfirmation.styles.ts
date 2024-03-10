import { Box, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  borderRadius: 30,
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  height: 343,
}))

export const Image = styled('img')(() => {
  return {
    maxWidth: 185,
    width: '100%',
    objectFit: 'fill',
    borderRadius: 20,
    marginTop: 24,
  }
})
