import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type LoaderType = 'spinner' | 'dots' | 'pulse' | 'bars';

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  loaderType?: LoaderType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  selected?: boolean;
  style?: React.CSSProperties;
}

/* ---------------- Loaders ---------------- */
const Loaders = {
  spinner: ({ size = 16, color }: { size?: number; color: string }) => (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="animate-spin absolute inset-0"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-25"
        />
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
             5.291A7.962 7.962 0 014 12H0c0 3.042 
             1.135 5.824 3 7.938l3-2.647z"
          fill={color}
        />
      </svg>
    </div>
  ),
  dots: ({ size = 16, color }: { size?: number; color: string }) => (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-full animate-bounce"
          style={{
            width: size * 0.25,
            height: size * 0.25,
            backgroundColor: color,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  ),
  pulse: ({ size = 16, color }: { size?: number; color: string }) => (
    <div
      className="rounded-full animate-pulse"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        animationDuration: '1s',
      }}
    />
  ),
  bars: ({ size = 16, color }: { size?: number; color: string }) => (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="animate-pulse"
          style={{
            width: size * 0.125,
            height: size * 0.75,
            backgroundColor: color,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1.2s',
          }}
        />
      ))}
    </div>
  ),
};

/* ---------------- Sizes ---------------- */
const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm font-medium min-h-[32px] gap-1',
  md: 'px-4 py-2 text-base font-semibold min-h-[40px] gap-2',
  lg: 'px-6 py-3 text-lg font-semibold min-h-[48px] gap-2',
};

/* ---------------- Component ---------------- */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      loaderType = 'spinner',
      startIcon,
      endIcon,
      selected = false,
      disabled = false,
      className = '',
      type = 'button',
      style,
      ...props
    },
    ref
  ) => {
    const getDynamicStyles = (): React.CSSProperties => {
      switch (variant) {
        case 'primary':
          return {
            background: `linear-gradient(to bottom right, var(--color-500), var(--color-600))`,
            borderColor: 'var(--color-500)',
            color: '#fff',
          };
        case 'secondary':
          return {
            backgroundColor: 'var(--color-800)',
            borderColor: 'var(--color-600)',
            color: 'var(--color-100)',
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            borderColor: 'var(--color-300)',
            color: 'var(--color-600)',
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'var(--color-600)',
          };
        default:
          return {};
      }
    };

    const dynamicCSS = `
      .dynamic-button-${variant}:hover {
        ${
          variant === 'primary'
            ? `background: linear-gradient(to bottom right, var(--color-600), var(--color-700)) !important; 
               box-shadow: 0 4px 10px var(--color-500)40 !important;`
            : ''
        }
        ${
          variant === 'secondary'
            ? `background-color: var(--color-700) !important; border-color: var(--color-500) !important;`
            : ''
        }
        ${
          variant === 'outline'
            ? `border-color: var(--color-500) !important; color: var(--color-700) !important;`
            : ''
        }
        ${
          variant === 'ghost'
            ? `background-color: var(--color-50) !important;`
            : ''
        }
      }
    `;

    const classes = [
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-in-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap select-none border-2',
      'hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md cursor-pointer',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
      buttonSizes[size],
      fullWidth ? 'w-full' : '',
      selected ? 'ring-2 ring-offset-2 ring-[var(--color-500)]' : '',
      loading ? 'cursor-wait' : '',
      `dynamic-button-${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const isDisabled = disabled || loading;
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
    const LoaderComponent = Loaders[loaderType];
    const loaderColor =
      variant === 'primary'
        ? '#fff'
        : getDynamicStyles().color || 'var(--color-600)';

    return (
      <>
        <style>{dynamicCSS}</style>
        <button
          ref={ref}
          type={type}
          disabled={isDisabled}
          className={classes}
          style={{ ...getDynamicStyles(), ...style }}
          {...props}
        >
          {loading ? (
            <LoaderComponent size={iconSize} color={loaderColor as string} />
          ) : (
            startIcon && (
              <span className="flex items-center justify-center flex-shrink-0">
                {startIcon}
              </span>
            )
          )}
          {children && (
            <span
              className={`flex items-center justify-center flex-1 min-w-0 ${
                loading ? 'opacity-70' : ''
              }`}
            >
              {children}
            </span>
          )}
          {!loading && endIcon && (
            <span className="flex items-center justify-center flex-shrink-0">
              {endIcon}
            </span>
          )}
        </button>
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button;
