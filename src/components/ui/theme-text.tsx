import { useThemedStyles } from "@/hooks/useThemeStyle";
import type React from "react";
import { Text, type TextProps } from "react-native";

interface ThemeTextProps extends TextProps {
	children: React.ReactNode;
	variant?: "default" | "heading" | "subheading" | "link" | "description";
}

const ThemeText = ({
	children,
	variant = "default",
	style,
	className,
	...props
}: ThemeTextProps) => {
	// Get base text color from theme
	const textStyles = useThemedStyles("text-gray-900", "text-white");

	// Define variant styles with dark mode alternatives
	const variantStyles = {
		default: useThemedStyles("text-base text-gray-900", "text-base text-white"),
		heading: useThemedStyles(
			"text-3xl font-bold text-gray-900",
			"text-3xl font-bold text-white",
		),
		subheading: useThemedStyles(
			"text-xl font-semibold text-gray-900",
			"text-xl font-semibold text-white",
		),
		link: useThemedStyles(
			"text-blue-500", // light mode link
			"text-blue-400", // dark mode link
		),
		description: useThemedStyles(
			"text-sm text-gray-600", // light mode description
			"text-sm text-gray-400", // dark mode description
		),
	};

	return (
		<Text
			className={`${variantStyles[variant]} ${className}`}
			style={style}
			{...props}
		>
			{children}
		</Text>
	);
};

export default ThemeText;
