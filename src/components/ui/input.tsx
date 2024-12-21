// src/components/ui/input.tsx
import { useTheme } from "@/providers/theme-provider";
import { forwardRef } from "react";
import { Text, TextInput, type TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
	label?: string;
	error?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
	({ label, error, ...props }, ref) => {
		const { isDark } = useTheme();

		return (
			<View className="space-y-2">
				{label && (
					<Text
						className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
					>
						{label}
					</Text>
				)}
				<TextInput
					ref={ref}
					className={`p-3 rounded-lg border ${
						isDark
							? "bg-gray-800 border-gray-700 text-white"
							: "bg-white border-gray-300 text-black"
					} ${error ? "border-red-500" : ""}`}
					placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
					{...props}
				/>
				{error && <Text className="text-red-500 text-sm">{error}</Text>}
			</View>
		);
	},
);
