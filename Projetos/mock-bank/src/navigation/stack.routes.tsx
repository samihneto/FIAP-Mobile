import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/app/(auth)/Welcome";
import DashboardScreen from "@/app/(authenticated)/Dashboard";


const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <View>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        </View>
    )
}

export function AuthenticatedRoutes() {
    return (
        <View>
            <Stack.Navigator>
                <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            </Stack.Navigator>
        </View>
    )
}

