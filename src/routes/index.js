import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import AddProduct from '../pages/AddProduct';
import ScannerEAN from '../pages/ScannerEAN';
import ListStorage from '../pages/ListStorage';

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListStorage" screenOptions={{headerShown: false}}>
                <Stack.Screen name="AddProduct" component={AddProduct}/>
                <Stack.Screen name="ScannerEAN" component={ScannerEAN}/>
                <Stack.Screen name="ListStorage" component={ListStorage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}