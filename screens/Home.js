import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '../assets'
import events from '../data/events'
import styles from '../data/styles'
import places from '../data/places'

const Home = () => {

    const navigation = useNavigation()

    return (
        <View className="flex-1 bg-gray-900 relative">
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center align-middle justify-between px-8 mt-20">
                    <View>
                        <Text className="text-4xl text-white">Tick<Text className="text-purple-600">r</Text></Text>
                    </View>
                    <View className="w-12 h-12 items-center justify-center">
                        <Image
                            source={Avatar}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </View>
                </View>
                <View className="mt-9 mb-6 h-12">
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {styles.map(style => (
                            <View
                                className="mt-2 ml-4 justify-center align-middle bg-gray-800 w-24 h-9 rounded-xl shadow-sm shadow-black">
                                <Text className="text-center text-lg text-white">{style.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View>
                    <View className="flex-row items-center justify-between">
                        <Text className="ml-4 mb-4 text-xl text-purple-500 font-semibold uppercase">Próximos Eventos</Text>
                        <Text className="mr-4 mb-4 text-sm text-purple-500 font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-36 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {events.map(event => (
                                <View
                                    className="ml-4">
                                    <Image
                                        source={{ uri: event.image }}
                                        className="h-full w-80 rounded-xl"
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View>
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-purple-500 font-light uppercase">Rolando <Text className="font-semibold">Hoje</Text></Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-purple-500 font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {events.map(event => (
                                <View
                                    key={event.id}
                                    className="flex-col ml-4">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Event Information")}>
                                        <Image
                                            source={{ uri: event.image }}
                                            className="h-44 w-40 rounded-xl"
                                        />
                                    </TouchableOpacity>
                                    <View className="flex-col">
                                        <Text className="text-white text-lg font-bold mt-1">{event.name}</Text>
                                        <View className="flex-row">
                                            <Text className="text-gray-500 text-sm font-light">{event.date}</Text>
                                            <Text className="text-gray-500 text-sm font-light mx-1">-</Text>
                                            <Text className="text-gray-500 text-sm font-light">{event.time}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View className="mb-24">
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-purple-500 font-semibold uppercase">Principais Locais</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-purple-500 font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {places.map(place => (
                                <View
                                    key={place.id}
                                    className="ml-4">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Local Information")}>
                                        <Image
                                            source={{ uri: place.image }}
                                            className="h-40 w-60 rounded-xl"
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-white text-lg font-bold mt-1">{place.name}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home