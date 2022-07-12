import React, { Children } from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, icons } from "../constants";
import { TabIcon } from "../components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { settradeModal } from "../features/TradeModel/tradeModalSlice";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const Tabs = () => {
  const dispatch = useAppDispatch();
  const { istradeModal } = useAppSelector((s) => s.trade);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
          height: 140,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!istradeModal) {
              return (
                <TabIcon focused={focused} icon={icons.home} label="Home" />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (istradeModal) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!istradeModal) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label="Portfolio"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (istradeModal) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={istradeModal ? icons.close : icons.trade}
                iconStyle={
                  istradeModal
                    ? {
                        height: 15,
                        width: 15,
                      }
                    : {
                        height: 25,
                        width: 25,
                      }
                }
                label="Trade"
                isTrade={true}
              />
            );
          },
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
              onPress={() => dispatch(settradeModal())}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!istradeModal) {
              return (
                <TabIcon focused={focused} icon={icons.market} label="Market" />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (istradeModal) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!istradeModal) {
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label="Profile"
                />
              );
            }
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (istradeModal) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
