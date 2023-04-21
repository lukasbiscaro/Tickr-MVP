import { Text, SafeAreaView, View, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TicketImage } from '../assets'
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-gray-900 flex-1 relative">
            <Animatable.View
                animation="fadeInDown"
                className="flex-row px-6 mt-4 items-center space-x-2">

                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-purple-500 font-semibold text-3xl">Go</Text>
                </View>
                <Text className="text-3xl font-semibold text-purple-500">Lorem Ipsum</Text>
            </Animatable.View>

            <Animatable.View
                animation="fadeInDown"
                className="flex-col px-6 mt-10 space-y-1">
                <Text className="text-2xl font-light text-white uppercase">Enjoy the event with</Text>
                <Text className="text-4xl font-semibold text-purple-500 mb-6">Good Moments!</Text>
                <Text className="text-base text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </Animatable.View>

            <Animatable.View
                animation="fadeInRight"
                className="w-[400px] h-[400px] bg-purple-500 rounded-full absolute bottom-36 -right-64"></Animatable.View>
            <Animatable.View
                animation="fadeInLeft"
                className="w-[400px] h-[400px] bg-cyan-500 rounded-full absolute -bottom-52 -left-44"></Animatable.View>

            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    source={TicketImage}
                    className="w-[350px] h-[350px] object-cover shadow-lg shadow-black mb-5"
                />
                <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
                    <Animatable.View
                        animation="fadeInUp">
                        <Animatable.View
                            animation="pulse"
                            iterationCount='infinite'
                            className="w-[75px] h-[75px] rounded-full bg-purple-500 shadow-md shadow-black items-center justify-center">
                            <Text className="text-3xl font-semibold text-black text-center">→</Text>
                        </Animatable.View>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen