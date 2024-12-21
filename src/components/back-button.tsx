import { useTheme } from "@/providers/theme-provider";
// src/components/ui/back-button.tsx
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, type PressableProps } from "react-native";
import ThemeText from "./ui/theme-text";

interface BackButtonProps extends PressableProps {
	showLabel?: boolean;
	label?: string;
}

export const BackButton = ({
	showLabel = true,
	label = "Back",
	...props
}: BackButtonProps) => {
	const router = useRouter();
	const { isDark } = useTheme();

	return (
		<Pressable
			onPress={() => router.back()}
			className={`flex-row items-center gap-x-1 active:opacity-70 p-2  rounded-full  ${isDark ? "bg-[#0000001A]" : "bg-gray-100"}`}
			{...props}
		>
			<ArrowLeft size={24} color={isDark ? "#fff" : "#000"} />
			{showLabel && (
				<ThemeText variant="default" className="font-medium">
					{label}
				</ThemeText>
			)}
		</Pressable>
	);
};
