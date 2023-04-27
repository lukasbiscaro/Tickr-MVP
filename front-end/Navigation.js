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
                name="Detalhes do Evento"
                component={EventInfo}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Detalhes do Local"
                component={LocalInfo}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    paddingBottom: 0,
                    backgroundColor: "#121214",
                    borderTopWidth: 0,
                    paddingBottom: 30,
                    paddingTop: 10,
                    elevation: 0,
                    height: 90
                }
            }}>
            <Tab.Screen
                name="Início"
                component={StackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Foundation name="home" size={35} color="#8E05C2" />
                        } return <Foundation name="home" size={30} color="#8D8D99" />
                    }
                }}
            />
            <Tab.Screen
                name="Ingressos"
                component={MyTickets}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome name="ticket" size={33} color="#8E05C2" />
                        } return <FontAwesome name="ticket" size={28} color="#8D8D99" />
                    }
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <FontAwesome5 name="user-alt" size={28} color="#8E05C2" />
                        } return <FontAwesome5 name="user-alt" size={23} color="#8D8D99" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}