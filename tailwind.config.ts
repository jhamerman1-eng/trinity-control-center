import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Trading specific colors
				profit: {
					DEFAULT: 'hsl(var(--profit))',
					foreground: 'hsl(var(--profit-foreground))'
				},
				loss: {
					DEFAULT: 'hsl(var(--loss))',
					foreground: 'hsl(var(--loss-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				neutral: {
					DEFAULT: 'hsl(var(--neutral))',
					foreground: 'hsl(var(--neutral-foreground))'
				},
				status: {
					healthy: 'hsl(var(--status-healthy))',
					degraded: 'hsl(var(--status-degraded))',
					critical: 'hsl(var(--status-critical))',
					inactive: 'hsl(var(--status-inactive))'
				},
				panel: {
					header: 'hsl(var(--panel-header))',
					border: 'hsl(var(--panel-border))'
				},
				metric: {
					positive: 'hsl(var(--metric-positive))',
					negative: 'hsl(var(--metric-negative))',
					neutral: 'hsl(var(--metric-neutral))'
				},
				chart: {
					grid: 'hsl(var(--chart-grid))',
					profit: 'hsl(var(--chart-line-profit))',
					loss: 'hsl(var(--chart-line-loss))',
					neutral: 'hsl(var(--chart-line-neutral))'
				}
			},
			fontFamily: {
				mono: ['var(--font-mono)', 'monospace']
			},
			backgroundImage: {
				'gradient-profit': 'var(--gradient-profit)',
				'gradient-loss': 'var(--gradient-loss)',
				'gradient-neutral': 'var(--gradient-neutral)'
			},
			boxShadow: {
				'trading': 'var(--shadow-trading)',
				'panel': 'var(--shadow-panel)'
			},
			transitionProperty: {
				'fast': 'var(--transition-fast)',
				'smooth': 'var(--transition-smooth)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
