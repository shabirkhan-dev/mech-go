import { Slot } from "expo-router";
import "../styles/global.css";
import { useThemedStyles } from "@/hooks/useThemeStyle";
import Providers from "@/providers";
import { useTheme } from "@/providers/theme-provider";
import { View } from "react-native";

// Themed container component
const ThemedContainer = ({ children }: { children: React.ReactNode }) => {
	const { isDark } = useTheme();
	const containerStyles = useThemedStyles(
		"flex-1 bg-white", // light theme
		"flex-1 bg-gray-900", // dark theme
	);

	return <View className={containerStyles}>{children}</View>;
};

// Main Layout component
export default function Layout() {
	return (
		<Providers>
			<ThemedContainer>
				<Slot />
			</ThemedContainer>
		</Providers>
	);
}
