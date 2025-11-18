import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes(){
  return(
    // <NavigationContainer> é o provedor que controla tuda a navegação
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}