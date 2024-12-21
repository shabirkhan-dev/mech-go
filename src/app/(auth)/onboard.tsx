import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import ThemeText from "@/components/ui/theme-text";
import { onboardingData } from "@/constants/onboarding";
import type { OnboardingData } from "@/types/onboarding";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
	useAnimatedRef,
	useAnimatedScrollHandler,
	useSharedValue,
} from "react-native-reanimated";

// Subtract the parent padding (32px = 16px * 2) from screen width
const { width: FULL_WIDTH } = Dimensions.get("window");
const SCREEN_WIDTH = FULL_WIDTH - 32; // Accounting for parent px-4 (16px * 2)

export default function OnboardingScreen() {
	const router = useRouter();
	const flatListRef = useAnimatedRef<Animated.FlatList<unknown>>();
	const x = useSharedValue(0);
	const [currentIndex, setCurrentIndex] = useState(0);

	const onScroll = useAnimatedScrollHandler({
		onScroll: (event) => {
			x.value = event.contentOffset.x;
		},
	});

	const onNextPress = () => {
		if (currentIndex < onboardingData.length - 1) {
			flatListRef.current?.scrollToIndex({
				index: currentIndex + 1,
				animated: true,
			});
			setCurrentIndex(currentIndex + 1);
		} else {
			router.push("/(auth)/login");
		}
	};

	const RenderItem = ({ item }: { item: OnboardingData; index: number }) => {
		return (
			<View style={{ width: SCREEN_WIDTH }} className="items-center">
				<View className="flex-1 justify-center items-center">
					<PlaceholderImage />
					<View className="items-center mt-8 gap-y-4">
						<ThemeText variant="heading">{item.title}</ThemeText>
						<ThemeText variant="description" className="text-center">
							{item.description}
						</ThemeText>
					</View>
				</View>
			</View>
		);
	};

	const Pagination = () => {
		return (
			<View className="flex-row justify-center items-center gap-x-2">
				{onboardingData.map((item, index) => {
					const isActive = currentIndex === index;
					return (
						<View
							key={item.id}
							className={`h-2 rounded-full ${
								isActive ? "w-8 bg-primary" : "w-2 bg-gray-300 dark:bg-gray-700"
							}`}
						/>
					);
				})}
			</View>
		);
	};

	return (
		<View className="flex-1">
			<Animated.FlatList
				ref={flatListRef}
				data={onboardingData}
				renderItem={RenderItem}
				keyExtractor={(item) => item.id}
				horizontal
				pagingEnabled
				bounces={false}
				showsHorizontalScrollIndicator={false}
				onScroll={onScroll}
				scrollEventThrottle={16}
				decelerationRate="fast"
				onMomentumScrollEnd={(e) => {
					const newIndex = Math.round(
						e.nativeEvent.contentOffset.x / SCREEN_WIDTH,
					);
					setCurrentIndex(newIndex);
				}}
			/>
			<View className="pb-8 gap-y-8">
				<Pagination />
				<Button variant="primary" size="lg" onPress={onNextPress}>
					<ThemeText className="text-white font-medium">
						{currentIndex === onboardingData.length - 1
							? "Get Started"
							: "Next"}
					</ThemeText>
				</Button>
			</View>
		</View>
	);
}
