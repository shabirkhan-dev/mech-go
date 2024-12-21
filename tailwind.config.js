/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
		extend: {
			colors: {
				// Light Theme Colors
				primary: {
					light: "#EAEEFF",
					DEFAULT: "#3B82F6",
					dark: "#1E40AF",
				},
				secondary: {
					light: "#F3E8FF",
					DEFAULT: "#8B5CF6",
					dark: "#5B21B6",
				},
				background: {
					light: "#FFFFFF",
					dark: "#1A1A1A",
				},
				text: {
					light: "#1A1A1A",
					dark: "#FFFFFF",
				},
			},
			// Custom spacing
			spacing: {
				xs: "4px",
				sm: "8px",
				md: "16px",
				lg: "24px",
				xl: "32px",
			},
		},
	},
    plugins: [],
  }