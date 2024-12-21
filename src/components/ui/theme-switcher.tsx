import { useTheme } from "@/providers/theme-provider";
import { Pressable, Text, View } from "react-native";

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	return (
		<View className="flex-row space-x-2">
			<Pressable
				className={`p-2 rounded ${theme === "light" ? "bg-primary" : "bg-gray-200"}`}
				onPress={() => setTheme("light")}
			>
				<Text>Light</Text>
			</Pressable>
			<Pressable
				className={`p-2 rounded ${theme === "dark" ? "bg-primary" : "bg-gray-200"}`}
				onPress={() => setTheme("dark")}
			>
				<Text>Dark</Text>
			</Pressable>
			<Pressable
				className={`p-2 rounded ${theme === "system" ? "bg-primary" : "bg-gray-200"}`}
				onPress={() => setTheme("system")}
			>
				<Text>System</Text>
			</Pressable>
		</View>
	);
};
