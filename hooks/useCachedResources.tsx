import React from "react";
import * as Font from "expo-font";

import safeAsync from "../utils/safeAsync";
import { isLoaded } from "expo-font";

export default function useCachedResources() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadAssetsAsync() {
      const [, error] = await safeAsync(
        Font.loadAsync({
          "nunito-black": require("../assets/fonts/Nunito-Black.ttf"),
          "nunito-black-italic": require("../assets/fonts/Nunito-BlackItalic.ttf"),
          "nunito-bold": require("../assets/fonts/Nunito-Bold.ttf"),
          "nunito-bold-italic": require("../assets/fonts/Nunito-BoldItalic.ttf"),
          "nunito-extrabold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
          "nunito-extrabold-italic": require("../assets/fonts/Nunito-ExtraBoldItalic.ttf"),
          "nunito-extralight": require("../assets/fonts/Nunito-ExtraLight.ttf"),
          "nunito-extralight-italic": require("../assets/fonts/Nunito-ExtraLightItalic.ttf"),
          nunito: require("../assets/fonts/Nunito-Regular.ttf"),
          "nunito-italic": require("../assets/fonts/Nunito-Italic.ttf"),
          "nunito-light": require("../assets/fonts/Nunito-Light.ttf"),
          "nunito-light-italic": require("../assets/fonts/Nunito-LightItalic.ttf"),
          "nunito-medium": require("../assets/fonts/Nunito-Medium.ttf"),
          "nunito-medium-italic": require("../assets/fonts/Nunito-MediumItalic.ttf"),
          "nunito-semibold": require("../assets/fonts/Nunito-SemiBold.ttf"),
          "nunito-semibold-italic": require("../assets/fonts/Nunito-SemiBoldItalic.ttf"),
        })
      );
      if (error) {
        console.log("failed to load resources", error);
      }

      setLoaded(true);
    }

    loadAssetsAsync();
  }, []);

  return isLoaded;
}
