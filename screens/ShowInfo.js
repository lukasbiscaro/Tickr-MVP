import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CasaDeShow } from '../assets'
import MapView, { Marker } from 'react-native-maps';
import eventsByLocal from '../data/eventsByLocal'

const ShowInfo = () => {

    const [showMore, setShowMore] = useState(false);

    const textToShow = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-gray-900 flex-1 relative">
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className="flex-col items-center justify-center px-8 mt-5">
                    <View>
                        <Text className="text-xl text-white">Detalhes do Local</Text>
                    </View>
                    <View>
                        <Image
                            source={CasaDeShow}
                            className="w-[370px] h-[380px] mt-8 rounded-3xl" />
                        <Text className="text-3xl text-white font-bold mt-7">Espaço das Américas</Text>
                        <Text className="text-md text-white font-bold mt-6">📆 Calendário: Seg á Sab</Text>
                        <Text className="text-md text-white font-bold my-2">⏱️ Horário de Funcionamento: 15h até 05h</Text>
                        <Text className="text-md text-white font-bold">🪧 Localizacão: Barra Funda - São Paulo</Text>
                        <Text
                            numberOfLines={showMore ? null : 3}
                            className="text-md text-gray-500 font-light mt-5">{textToShow}</Text>
                        {textToShow.length > 120 && (
                            <TouchableOpacity onPress={toggleShowMore}>
                                <Text className="text-purple-500 mt-2">
                                    {showMore ? 'Ler menos' : 'Ler mais'}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View className="flex items-center justify-center rounded-3xl">
                    <View>
                        <View>
                            <MapView
                                style={{ borderRadius: 20 }}
                                className="w-[370px] h-[200px] mt-8"
                                initialRegion={{
                                    latitude: -23.527492655718017,
                                    longitude: -46.6677981175072,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: -23.527492655718017,
                                        longitude: -46.6677981175072,
                                    }}
                                    title="R. Tagipuru, 795 - Barra Funda, São Paulo"
                                />
                            </MapView>
                        </View>
                        <Text className="text-gray-500 mt-2">R. Tagipuru, 795 - Barra Funda, São Paulo, 01156-000</Text>
                    </View>
                </View>
                <View>
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-purple-500 font-semibold uppercase">Eventos neste local</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-purple-500 font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {eventsByLocal.map(event => (
                                <View className="ml-4 whitespace-pre-wrap break-words">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Show Information")}
                                        key={event.id}>
                                        <Image
                                            source={{ uri: event.image }}
                                            className="h-40 w-36 rounded-xl"
                                        />
                                    </TouchableOpacity>
                                    <View>
                                        <Text className="text-white text-md font-bold mt-2">{event.name}</Text>
                                        <Text className="text-gray-500 text-sm font-light">{event.date}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ShowInfo