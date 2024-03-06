import { Box, Button, ButtonProps, IconButton, Typography, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: 30,
  maxWidth: 375,
  width: '100%',
  margin: '0 auto',
  height: 422,
  padding: '26px 24px 40px 24px',
}))

export const Header = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
}))

export const MonthYear = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const Month = styled(Typography)(() => ({
  fontSize: 34,
  fontWeight: 800,
}))

export const Year = styled(Typography)(() => ({
  fontSize: 16,
  opacity: 0.5,
}))

export const WeekDays = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  justifyItems: 'center',
  marginBottom: 10,
  opacity: '0.5',
  gap: 5,
}))

export const WeekDay = styled(Typography)(() => ({
  display: 'grid',
  fontWeight: 700,
}))

export const CalendarDays = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  justifyItems: 'center',
  gap: 5,
}))

interface DayProps extends ButtonProps {
  isSelected?: boolean
  isDisabled?: boolean
  today?: boolean
  sameMonth?: boolean
}

export const Day = styled(Button, {
  shouldForwardProp: (prop) =>
    !['isDisabled', 'isSelected', 'today', 'sameMonth'].includes(prop.toString()),
})<DayProps>(({ isDisabled, sameMonth, today, isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  borderRadius: '50%',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  fontWeight: 600,
  color: 'white',
  opacity: sameMonth ? 0.5 : isDisabled ? 0.5 : 1,
  border: today ? '1px solid' : 'none',
  minWidth: 0,
  background: isSelected ? 'white' : 'none',
}))

export const IconsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const LeftIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  border: '1px solid white',
  borderRadius: '40%',
  maxWidth: 40,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const RightIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  border: '1px solid white',
  maxWidth: 40,
  width: '100%',
  borderRadius: '40%',
  marginLeft: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
