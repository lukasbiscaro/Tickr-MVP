import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CasaDeShow } from '../assets'
import MapView, { Marker } from 'react-native-maps';
import eventsByLocal from '../data/eventsByLocal'

const LocalInfo = () => {

    const [showMore, setShowMore] = useState(false);

    const textToShow = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const navigation = useNavigation()

    return (
        <View className="bg-[#121212] flex-1 relative">
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className="flex-col items-center justify-center px-8 mt-16">
                    <View>
                        <Text className="text-xl text-[#FFFFFF] font-bold">Detalhes do Local</Text>
                    </View>
                    <View>
                        <Image
                            source={CasaDeShow}
                            className="w-[370px] h-[380px] mt-8 rounded-3xl" />
                        <Text className="text-3xl text-[#FFFFFF] font-bold mt-7">Espaço das Américas</Text>
                        <Text className="text-md text-[#b3b3b3] font-semibold mt-6"><Text className="font-bold">📆 Calendário:</Text>Seg á Sab</Text>
                        <Text className="text-md text-[#b3b3b3] font-semibold my-2"><Text className=
                            "font-bold">⏱️ Horário de Funcionamento:</Text> 14h até 02h</Text>
                        <Text className="text-md text-[#b3b3b3] font-semibold"><Text className="font-bold">🪧 Localizacão:</Text> Barra Funda - São Paulo</Text>
                        <Text
                            numberOfLines={showMore ? null : 3}
                            className="text-md text-[#404040] font-light mt-5">{textToShow}</Text>
                        {textToShow.length > 120 && (
                            <TouchableOpacity onPress={toggleShowMore}>
                                <Text className="text-[#8E05C2] mt-2">
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
                        <Text className="text-[#404040] mt-2">R. Tagipuru, 795 - Barra Funda, São Paulo, 01156-000</Text>
                    </View>
                </View>
                <View className="mb-28">
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-[#8E05C2] font-semibold uppercase">Eventos neste local</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-[#8E05C2] font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {eventsByLocal.map(event => (
                                <View
                                    key={event.id}
                                    className="ml-4 whitespace-pre-wrap break-words">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Event Information")}>
                                        <Image
                                            source={{ uri: event.image }}
                                            className="h-40 w-36 rounded-xl"
                                        />
                                    </TouchableOpacity>
                                    <View>
                                        <Text className="text-[#FFFFFF] text-md font-bold mt-2">{event.name}</Text>
                                        <Text className="text-[#404040] text-sm font-light">{event.date}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LocalInfo