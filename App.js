import Main from './screens/MainComponent';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';

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
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer theme={MyTheme}>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}