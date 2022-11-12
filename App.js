import Main from './screens/MainComponent';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true)

const MyTheme = {
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5637DD',
    card: '#E1E1E1',
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}