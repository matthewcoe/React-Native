import Main from './screens/MainComponent';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

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
    <NavigationContainer theme={MyTheme}>
      <Main />
    </NavigationContainer>
  );
}