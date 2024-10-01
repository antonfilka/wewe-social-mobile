import '../tamagui-web.css';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Providers } from './Providers';
import { RootLayoutNav } from './RootLayoutNav';
import { observer } from '@legendapp/state/react';
import { store$ } from 'store/app';
import * as SplashScreen from 'expo-splash-screen';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

const RootLayout = observer(() => {
  const isAppReady = store$.isAppReady.get();

  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (interLoaded || interError) store$.setAppIsReady(true);
    }

    prepare();
  }, [interError, interLoaded]);

  if (!isAppReady) {
    return null;
  }

  return (
    <Providers>
      <RootLayoutNav />
    </Providers>
  );
});

export default RootLayout;
