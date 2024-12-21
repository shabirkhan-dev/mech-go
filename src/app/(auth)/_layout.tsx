// src/app/(auth)/_layout.tsx
import { useThemedStyles } from "@/hooks/useThemeStyle";
import { useTheme } from "@/providers/theme-provider";
import { Slot, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
	const router = useRouter();
	const { isDark } = useTheme();

	const containerStyles = useThemedStyles(
		"flex-1 bg-white",
		"flex-1 bg-gray-900",
	);

	return (
		<SafeAreaView className={containerStyles}>
			<View className="flex-row items-center p-4">
				<Pressable onPress={() => router.back()}>
					<Text
						className={`text-lg ${isDark ? "text-white" : "text-gray-900"}`}
					>
						← Back
					</Text>
				</Pressable>
			</View>
			<View className="flex-1 px-4">
				<Slot />
			</View>
		</SafeAreaView>
	);
}
