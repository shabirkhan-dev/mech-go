import { useTheme } from "@/providers/theme-provider";
import { Image } from "lucide-react-native";
// src/components/ui/placeholder-image.tsx
import { View } from "react-native";

export const PlaceholderImage = () => {
	const { isDark } = useTheme();

	return (
		<View className="w-72 h-72 rounded-3xl bg-gray-100 dark:bg-gray-800 items-center justify-center">
			<Image size={48} color={isDark ? "#fff" : "#000"} />
		</View>
	);
};
