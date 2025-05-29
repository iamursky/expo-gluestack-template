import { Button, ButtonText } from "@/gluestack/components/button";
import { View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center">
      <Button size="md" variant="solid" action="primary">
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </View>
  );
}
