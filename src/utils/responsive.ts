import { tokens } from '@/styles/design-tokens'

export const breakpoints = {
  xs: parseInt(tokens.breakpoints.xs),
  sm: parseInt(tokens.breakpoints.sm),
  md: parseInt(tokens.breakpoints.md),
  lg: parseInt(tokens.breakpoints.lg),
  xl: parseInt(tokens.breakpoints.xl),
  '2xl': parseInt(tokens.breakpoints['2xl']),
}

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  '2xl': `@media (min-width: ${breakpoints['2xl']}px)`,
}

export const isBreakpoint = (breakpoint: keyof typeof breakpoints) => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= breakpoints[breakpoint]
}

// Container max-widths for different breakpoints
export const containerMaxWidths = {
  sm: tokens.containers.sm,
  md: tokens.containers.md,
  lg: tokens.containers.lg,
  xl: tokens.containers.xl,
  '2xl': tokens.containers['2xl'],
}
