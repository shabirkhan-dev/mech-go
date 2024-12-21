import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { View } from "react-native";

const App = () => {
	return (
		<View>
			<Button variant="primary" size="lg" onPress={() => {}}>
				Get Started
			</Button>
			<ThemeSwitcher />
		</View>
	);
};
export default App;
