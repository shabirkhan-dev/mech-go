import { useTheme } from "@/providers/theme-provider";

export const useThemedStyles = (lightStyles: string, darkStyles: string) => {
	const { isDark } = useTheme();
	return isDark ? darkStyles : lightStyles;
};
