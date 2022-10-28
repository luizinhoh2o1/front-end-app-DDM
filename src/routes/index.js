import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import AddProduct from '../pages/AddProduct';
import ScannerEAN from '../pages/ScannerEAN';

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AddProduct" screenOptions={{headerShown: false}}>
                <Stack.Screen name="AddProduct" component={AddProduct}/>
                <Stack.Screen name="ScannerEAN" component={ScannerEAN}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}