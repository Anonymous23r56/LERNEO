import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'heroPrimary'
  | 'heroSecondary'
  | 'enroll'
  | 'light'

type ButtonSize = 'sm' | 'md' | 'lg' | 'hero'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    size?: ButtonSize
    fullWidth?: boolean
  }
>

const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70 disabled:pointer-events-none disabled:opacity-60'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-fuchsia-700 text-white shadow-[0_10px_30px_rgba(126,4,149,0.28)] hover:bg-fuchsia-600',
  outline:
    'border-2 border-fuchsia-700 bg-transparent text-fuchsia-400 hover:bg-fuchsia-700 hover:text-white',
  heroPrimary:
    'bg-gradient-to-r from-fuchsia-500 to-fuchsia-800 text-white shadow-[0_14px_40px_rgba(168,24,216,0.3)] hover:from-fuchsia-400 hover:to-fuchsia-700',
  heroSecondary:
    'border-2 border-white/15 bg-white/5 text-[#f8f5f2] backdrop-blur-sm hover:border-white/35 hover:bg-white/10',
  enroll:
    'rounded-lg bg-gradient-to-r from-violet-400 to-fuchsia-500 text-[11px] font-bold text-white hover:from-violet-300 hover:to-fuchsia-400',
  light: 'bg-white text-fuchsia-700 hover:bg-fuchsia-50',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'h-12 px-6 text-base',
  hero: 'h-14 px-7 text-base sm:px-8 sm:text-lg',
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={joinClasses(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
