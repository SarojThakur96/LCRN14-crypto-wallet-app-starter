import React from "react";
import { View, Text, Animated } from "react-native";
// import Animated from 'react-native-reanimated'
import { useAppSelector } from "../app/hooks";
import { IconTextButton } from "../components";
import { COLORS, icons, SIZES } from "../constants";

const MainLayout = ({ children }) => {
  const { istradeModal } = useAppSelector((s) => s.trade);
  const modalAnimatedvalue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (istradeModal) {
      Animated.timing(modalAnimatedvalue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedvalue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [istradeModal]);

  const modalY = modalAnimatedvalue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280],
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {children}
      {istradeModal && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedvalue}
        />
      )}
      {/* Modal */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: modalY,
          width: "100%",
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}
      >
        <IconTextButton
          label="Transfer"
          icon={icons.send}
          onPress={() => console.log("transfer")}
        />
        <IconTextButton
          label="Withdraw"
          icon={icons.withdraw}
          containerStyle={{
            marginTop: SIZES.base,
          }}
          onPress={() => console.log("Withdraw")}
        />
      </Animated.View>
    </View>
  );
};

export default MainLayout;
