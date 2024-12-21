// src/app/(auth)/_layout.tsx
import { BackButton } from "@/components/back-button";
import { useThemedStyles } from "@/hooks/useThemeStyle";
import { useTheme } from "@/providers/theme-provider";
import { Slot, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
	const router = useRouter();
	const { isDark } = useTheme();

	const containerStyles = useThemedStyles(
		"flex-1 bg-white",
		"flex-1 bg-[#2A2A2A]",
	);

	return (
		<SafeAreaView className={containerStyles}>
			<View className="flex-row items-center  px-2">
				<BackButton showLabel={false} />
			</View>
			<View className="flex-1 px-4">
				<Slot />
			</View>
		</SafeAreaView>
	);
}
