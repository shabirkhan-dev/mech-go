import { useThemedStyles } from "@/hooks/useThemeStyle";
// src/components/ui/divider.tsx
import { View } from "react-native";
import ThemeText from "./theme-text";

interface DividerProps {
	text: string;
}

export const Divider = ({ text }: DividerProps) => {
	const lineStyles = useThemedStyles(
		"flex-1 h-[1px] bg-gray-300",
		"flex-1 h-[1px] bg-gray-700",
	);

	return (
		<View className="flex-row items-center">
			<View className={lineStyles} />
			<View className="mx-4">
				<ThemeText variant="description">{text}</ThemeText>
			</View>
			<View className={lineStyles} />
		</View>
	);
};
