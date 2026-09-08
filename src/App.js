import {SafeAreaView} from "react-native-safe-area-context";
import {SignUpPage} from "./screens/SignUp";
import {Home} from "./screens/Home";

export default function App() {
    return (
        <SafeAreaView>
            <Home/>
        </SafeAreaView>
    );
}