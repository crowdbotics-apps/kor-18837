import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile77328Navigator from '../features/UserProfile77328/navigator';
import Settings77327Navigator from '../features/Settings77327/navigator';
import Settings77325Navigator from '../features/Settings77325/navigator';
import SignIn277323Navigator from '../features/SignIn277323/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile77328: { screen: UserProfile77328Navigator },
Settings77327: { screen: Settings77327Navigator },
Settings77325: { screen: Settings77325Navigator },
SignIn277323: { screen: SignIn277323Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
