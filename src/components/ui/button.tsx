import { useTheme } from "@/providers/theme-provider";
import { Pressable } from "react-native";
import ThemeText from "./theme-text";

interface ButtonProps {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
	className?: string;
	onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	children,
	onPress,
	className,
}) => {
	const { isDark } = useTheme();

	const baseStyles = "rounded-2xl font-medium";

	const variants = {
		primary: `bg-primary ${isDark ? "text-white" : "text-black"}`,
		secondary: `bg-secondary ${isDark ? "text-white" : "text-black"}`,
		outline: "border-2 border-primary bg-transparent",
	};

	const sizes = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-5 text-lg",
	};

	return (
		<Pressable
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			onPress={onPress}
		>
			<ThemeText className="text-center text-white font-semibold">
				{children}
			</ThemeText>
		</Pressable>
	);
};
