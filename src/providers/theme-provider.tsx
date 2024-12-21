// src/theme/ThemeProvider.tsx
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: "system",
	setTheme: () => {},
	isDark: false,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const colorScheme = useColorScheme();
	const [theme, setTheme] = useState<Theme>("system");

	const isDark =
		theme === "dark" || (theme === "system" && colorScheme === "dark");

	return (
		<ThemeContext.Provider value={{ theme, setTheme, isDark }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
