import { SocialButton } from "@/components/social-buttons";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import ThemeText from "@/components/ui/theme-text";
import { Link } from "expo-router";
import { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export default function SignupScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = () => {
		// Implement signup logic
		// console.log({ name, email, password });
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			className="flex-1"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView
					className="flex-1"
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					<View className="flex-1 px-4 py-8">
						<View className="space-y-2">
							<ThemeText variant="heading">Create Account 🚀</ThemeText>
							<ThemeText variant="description">
								Let's get you started with your new account
							</ThemeText>
						</View>
						<View className="flex-1 justify-center gap-y-10">
							<View className="gap-y-6">
								<Input
									label="Full Name"
									placeholder="Enter your name"
									value={name}
									onChangeText={setName}
								/>
								<Input
									label="Email"
									placeholder="Enter your email"
									keyboardType="email-address"
									autoCapitalize="none"
									value={email}
									onChangeText={setEmail}
								/>
								<Input
									label="Password"
									placeholder="Enter your password"
									secureTextEntry
									value={password}
									onChangeText={setPassword}
								/>
								<Button variant="primary" size="lg" onPress={handleSignup}>
									Create Account
								</Button>
							</View>
							<View className="gap-y-4">
								<Divider text="Or continue with" />
								<View className="gap-y-3">
									<SocialButton
										provider="github"
										onPress={() => console.log("Github signup")}
									/>
									<SocialButton
										provider="facebook"
										onPress={() => console.log("Facebook signup")}
									/>
								</View>
							</View>
							<View className="flex-row justify-center gap-x-2">
								<ThemeText variant="description">
									Already have an account?
								</ThemeText>
								<Link href="/login">
									<ThemeText variant="link">Login</ThemeText>
								</Link>
							</View>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
