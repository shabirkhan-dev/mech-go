// src/app/index.tsx
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
	const router = useRouter();
	const { isDark } = useTheme();

	return (
		<View className="flex-1 justify-between p-4">
			<View className="space-y-4">
				<Text
					className={`text-2xl font-bold ${
						isDark ? "text-white" : "text-gray-900"
					}`}
				>
					Welcome
				</Text>
			</View>

			<View className="gap-y-4">
				<Button
					variant="primary"
					size="lg"
					onPress={() => router.push("/(auth)/login")}
				>
					Login
				</Button>
				<Button
					variant="primary"
					size="lg"
					onPress={() => router.push("/(auth)/onboard")}
				>
					Onboard
				</Button>

				<Button
					variant="secondary"
					size="lg"
					onPress={() => router.push("/theme")}
				>
					Theme Settings
				</Button>
			</View>
		</View>
	);
}
