import { Slot } from "expo-router";
import "../styles/global.css";
import { useThemedStyles } from "@/hooks/useThemeStyle";
import Providers from "@/providers";
import { useTheme } from "@/providers/theme-provider";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { SafeAreaView, View } from "react-native";

const ThemedContainer = ({ children }: { children: React.ReactNode }) => {
	const { isDark } = useTheme();
	const containerStyles = useThemedStyles(
		"flex-1 bg-white absolute top-0 left-0 right-0 bottom-0",
		"flex-1 bg-[#2A2A2A] absolute top-0 left-0 right-0 bottom-0",
	);

	const safeAreaStyles = useThemedStyles(
		"flex-1 bg-white mt-12",
		"flex-1 bg-[2A2A2A]  mt-12",
	);
	return (
		<Fragment>
			<StatusBar style={isDark ? "light" : "dark"} />
			<View className={containerStyles}>
				<SafeAreaView className={safeAreaStyles}>{children}</SafeAreaView>
			</View>
		</Fragment>
	);
};

export default function Layout() {
	return (
		<Providers>
			<ThemedContainer>
				<Slot />
			</ThemedContainer>
		</Providers>
	);
}
