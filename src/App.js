import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import First from "./pages/First";
import Detail from "./pages/Detail/Detail";
import Favorites from "./pages/Favorites/Favorites";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function App()
{
  
  return(
    <NavigationContainer>
    <Drawer.Navigator  >
    


      <Drawer.Screen name="First" component={HomeStack} options={{
        headerShown:false,
        

        
        
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesStack} options={{
        headerShown:false,
        

        
      }}  />
      
                 

    </Drawer.Navigator>
  </NavigationContainer>
  )
}
function HomeStack() {

 
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={First} options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
          }} />
      <Stack.Screen name="Detail" component={Detail} options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }}    />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }} />
      <Stack.Screen name="Detail" component={Detail}  options={{
            
            headerStyle: { backgroundColor: 'black' }, 
            headerTintColor: 'white', 
           
          }} />
    </Stack.Navigator>
  );
}
export default App;