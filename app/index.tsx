import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-4xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding">
        <Text className="text-2xl font-bold text-success">
          Go to Onboarding
        </Text>
      </Link>

      <Link href="/sign-in">
        <Text className="text-2xl font-bold text-success">Sign In</Text>
      </Link>

      <Link href="/sign-up">
        <Text className="text-2xl font-bold text-success">Sign Up</Text>
      </Link>
    </View>
  );
}
