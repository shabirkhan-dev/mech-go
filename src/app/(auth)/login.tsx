// src/app/(auth)/login.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function LoginScreen() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Implement login logic
		// console.log({ email, password });
	};

	return (
		<View className="flex-1 justify-center space-y-6">
			<Text className="text-2xl font-bold text-center mb-6">Welcome Back</Text>

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

			<Button variant="primary" size="lg" onPress={handleLogin}>
				Login
			</Button>

			<View className="flex-row justify-center space-x-1">
				<Text className="text-gray-600">Don't have an account?</Text>
				<Link href="/signup">
					<Text className="text-primary">Sign up</Text>
				</Link>
			</View>
		</View>
	);
}
