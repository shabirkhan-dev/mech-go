import { useTheme } from "@/providers/theme-provider";
// src/components/ui/Button.tsx
import { Pressable, Text } from "react-native";

interface ButtonProps {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
	onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	children,
	onPress,
}) => {
	const { isDark } = useTheme();

	const baseStyles = "rounded-lg font-medium";

	const variants = {
		primary: `bg-primary ${isDark ? "text-white" : "text-black"}`,
		secondary: `bg-secondary ${isDark ? "text-white" : "text-black"}`,
		outline: "border-2 border-primary bg-transparent",
	};

	const sizes = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg",
	};

	return (
		<Pressable
			className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
			onPress={onPress}
		>
			<Text
				className={`
          ${
						variant === "outline"
							? "text-primary"
							: isDark
								? "text-white"
								: "text-black"
					}
        `}
			>
				{children}
			</Text>
		</Pressable>
	);
};
