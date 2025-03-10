import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    brand: 'relative overflow-hidden bg-brand text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-brand active:text-white/80 before:transition-colors',
    white:
      'bg-white text-brand hover:bg-white/90 active:bg-white/90 active:text-brand/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    brand: 'border-brand text-brand hover:border-brand/80 active:bg-brand/10',
    white: 'border-white text-white hover:border-white/80 active:bg-white/10',
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

type VariantStylesType = typeof variantStyles
type VariantType = keyof VariantStylesType
type ColorType<V extends VariantType> = keyof VariantStylesType[V]

type ButtonProps = {
  variant?: VariantType
  color?: ColorType<'solid' | 'outline'>
  className?: string
  href?: string
  children?: React.ReactNode
}

export function Button({
  variant = 'solid',
  color = 'brand',
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
