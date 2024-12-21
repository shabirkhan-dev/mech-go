// src/app/theme.tsx
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "@/providers/theme-provider";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function ThemeScreen() {
	const { isDark } = useTheme();
	const router = useRouter();

	return (
		<View className="flex-1 justify-between p-4">
			<View className="space-y-6">
				<Text
					className={`text-2xl font-bold ${
						isDark ? "text-white" : "text-gray-900"
					}`}
				>
					Theme Settings
				</Text>
				<ThemeSwitcher />
			</View>

			<View className="space-y-4">
				<Button
					variant="primary"
					size="lg"
					onPress={() => router.push("/(auth)/login")}
				>
					Go to Login
				</Button>
				<Button variant="outline" size="lg" onPress={() => router.back()}>
					Go Back
				</Button>
			</View>
		</View>
	);
}
