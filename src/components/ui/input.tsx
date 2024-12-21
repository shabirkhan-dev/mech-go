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
			<View className="flex flex-col gap-2">
				{label && (
					<Text
						className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}
					>
						{label}
					</Text>
				)}
				<TextInput
					ref={ref}
					className={`px-5 py-5 rounded-2xl border-[0.5] ${
						isDark
							? "bg-[#0000001A]/10 border-[#ffffff]/15 text-white"
							: "bg-gray-100 border-gray-300 text-black"
					} ${error ? "border-red-500" : ""}`}
					placeholderTextColor={isDark ? "#FFFFFF33" : "#6B7280"}
					{...props}
				/>
				{error && <Text className="text-red-500 text-sm">{error}</Text>}
			</View>
		);
	},
);
