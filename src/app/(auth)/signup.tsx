// src/app/(auth)/signup.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function SignupScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = () => {
		// Implement signup logic
		// console.log({ name, email, password });
	};

	return (
		<View className="flex-1 justify-center space-y-6">
			<Text className="text-2xl font-bold text-center mb-6">
				Create Account
			</Text>

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
				Sign Up
			</Button>

			<View className="flex-row justify-center space-x-1">
				<Text className="text-gray-600">Already have an account?</Text>
				<Link href="/login">
					<Text className="text-primary">Login</Text>
				</Link>
			</View>
		</View>
	);
}
