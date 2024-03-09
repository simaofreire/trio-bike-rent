import { Box, IconButton, Typography, styled } from '@mui/material'

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
  lineHeight: '50px',
}))

interface DayProps {
  sameMonth?: boolean
  types?: string
}

export const Day = styled(Box, {
  shouldForwardProp: (prop) => !['types', 'sameMonth'].includes(prop.toString()),
})<DayProps>(({ theme, types, sameMonth }) => {
  const isDisabled = types === 'disabled'
  const isRange = types === 'range'
  const isSelected = types === 'selected'
  const isToday = types === 'today'

  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    opacity: sameMonth ? 1 : isDisabled ? 0.5 : 1,
    border: isToday ? '1px solid' : 'none',
    width: '100%',
  }

  const dynamicStyles = {
    color: isSelected ? theme.palette.primary.main : 'inherit',
    backgroundColor: isSelected ? 'white' : isRange ? '#C1CFF2' : 'transparent',
  }

  return {
    ...baseStyles,
    ...dynamicStyles,
    borderRadius: '50%',

    '&:hover': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.main,
      transition: '0.3s ease-in',
    },
  }
})

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
  '&:hover': {
    background: theme.palette.primary.dark,
    transition: '0.3s ease-in-out',
  },
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
  '&:hover': {
    background: theme.palette.primary.dark,
    transition: '0.3s ease-in-out',
  },
}))
