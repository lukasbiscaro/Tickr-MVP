import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/Home";
import EventInfo from "./screens/EventInfo";
import LocalInfo from './screens/LocalInfo'
import Profile from "./screens/Profile";
import MyTickets from "./screens/MyTickets";
import { Foundation, FontAwesome5, FontAwesome } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    paddingBottom: 0,
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                    bottom: 38,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 20,
                    height: 60
                }
            }}>
            <Tab.Screen
                name="Main Home"
                component={StackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Foundation name="home" size={35} color="purple" />
                        } return <Foundation name="home" size={30} color="gray" />
                    }
                }}
            />
            <Tab.Screen
                name="My Tickets"
                component={MyTickets}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome name="ticket" size={33} color="purple" />
                        } return <FontAwesome name="ticket" size={28} color="gray" />
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome5 name="user-alt" size={28} color="purple" />
                        } return <FontAwesome5 name="user-alt" size={23} color="gray" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Event Information"
                component={EventInfo}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Local Information"
                component={LocalInfo}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}