import { View } from "react-native";
import { AuthRoutes, AuthenticatedRoutes } from "./src/navigation/stack.routes";

export default function App() {
    const isAuthenticated = false;
    return (
        <View>
            {isAuthenticated ? <AuthenticatedRoutes /> : <AuthRoutes />}
        </View>
    )
}