import { ExternalLink } from '@tamagui/lucide-icons';
import { Anchor, H2, Paragraph, XStack, YStack } from 'tamagui';
import { ToastControl } from 'app/toasts/CurrentToast';
import { useCallback } from 'react';
import { store$ } from 'store/app';
import { observer } from '@legendapp/state/react';
import * as SplashScreen from 'expo-splash-screen';

const TabOneScreen = observer(() => {
  const appIsReady = store$.isAppReady.get();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <YStack
      f={1}
      ai="center"
      gap="$8"
      px="$10"
      pt="$5"
      bg="$background"
      // This is the home screen and it should tell that app is ready to reveal splash screen
      onLayout={onLayoutRootView}>
      <H2>Tamagui + Expo</H2>

      <ToastControl />

      <XStack ai="center" jc="center" fw="wrap" gap="$1.5" pos="absolute" b="$8">
        <Paragraph fos="$5">Add</Paragraph>

        <Paragraph fos="$5" px="$2" py="$1" col="$blue10" bg="$blue5" br="$3">
          tamagui.config.ts
        </Paragraph>

        <Paragraph fos="$5">to root and follow the</Paragraph>

        <XStack
          ai="center"
          gap="$1.5"
          px="$2"
          py="$1"
          br="$3"
          bg="$purple5"
          hoverStyle={{ bg: '$purple6' }}
          pressStyle={{ bg: '$purple4' }}>
          <Anchor
            href="https://tamagui.dev/docs/core/configuration"
            textDecorationLine="none"
            col="$purple10"
            fos="$5">
            Configuration guide
          </Anchor>
          <ExternalLink size="$1" col="$purple10" />
        </XStack>

        <Paragraph fos="$5" ta="center">
          to configure your themes and tokens.
        </Paragraph>
      </XStack>
    </YStack>
  );
});

export default TabOneScreen;
