import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import FamousPage from './src/pages/FamousPage'
import FamousDatailPage from './src/pages/FamousDatailPage'

const AppNavigator = createStackNavigator({

  'Main':{

    screen: FamousPage

  }

},{

  defaultNavigationOptions:{

    title: 'FAMOSOS',
    headerStyle:{

      backgroundColor: '#6ca2f7',
      borderBottomWidth: 10,
      borderBottomColor: '#c5c5c5'

    },
    headerTitleStyle:{

      color: '#fff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'

    }


  }

})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer