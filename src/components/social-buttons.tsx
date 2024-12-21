// src/components/ui/social-button.tsx
import { Button } from "@/components/ui/button";
import ThemeText from "@/components/ui/theme-text";
import { useTheme } from "@/providers/theme-provider";
import { Facebook, Github, GlobeIcon } from "lucide-react-native";

interface SocialButtonProps {
	provider: "google" | "facebook" | "github";
	onPress: () => void;
}

export const SocialButton = ({ provider, onPress }: SocialButtonProps) => {
	const { isDark } = useTheme();

	const providerConfig = {
		facebook: {
			text: "Continue with Facebook",
			icon: Facebook,
			color: "#1877F2", // Facebook blue
		},
		github: {
			text: "Continue with GitHub",
			icon: Github,
			color: isDark ? "#fff" : "#000",
		},
		google: {
			text: "Continue with Google",
			icon: GlobeIcon,
			color: "#DB4437", // Google red
		},
	};

	const ProviderIcon = providerConfig[provider].icon;

	return (
		<Button
			variant="outline"
			size="lg"
			onPress={onPress}
			className={`flex-row items-center justify-center gap-x-4 ${
				isDark ? "border-gray-700" : "border-gray-300"
			}`}
		>
			<ProviderIcon size={20} color={providerConfig[provider].color} />
			<ThemeText variant="default" className="font-medium ">
				{providerConfig[provider].text}
			</ThemeText>
		</Button>
	);
};
