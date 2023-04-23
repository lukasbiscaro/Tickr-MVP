import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TheTown } from '../assets'
import MapView, { Marker } from 'react-native-maps';
import artists from '../data/artists'

const EventInfo = () => {

    const [showMore, setShowMore] = useState(false);

    const textToShow = `The Town é um festival de música idealizado pelo empresário brasileiro Roberto Medina – mesmo criador do Rock in Rio – pela primeira vez em 2023. É reconhecido como um dos maiores festivais musicais do Brasil. O festival é localizado no Autódromo de Interlagos em São Paulo, mesmo local onde é realizado o Lollapalooza.`;

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
                        <Text className="text-xl text-[#FFFFFF] font-bold">Detalhes do Evento</Text>
                    </View>
                    <View>
                        <Image
                            source={TheTown}
                            className="w-[370px] h-[380px] mt-8 rounded-3xl" />
                        <Text className="text-3xl text-[#FFFFFF] font-bold mt-7 mb-4 uppercase">The Town</Text>
                        <Text className="text-lg text-[#FFFFFF] font-bold">R$ 50,00 - R$ 450,00</Text>
                        <Text className="text-md text-[#b3b3b3] font-semibold mt-6"><Text className="font-bold">📆 Calendário:</Text> 2,3,7,9 e 10 de Set</Text>
                        <Text className="text-md text-[#b3b3b3] font-semibold my-2"><Text className=
                            "font-bold">⏱️ Horário de Funcionamento:</Text> 14h até 02h</Text>
                        <Text className="text-md text-[#b3b3b3] font-semibold"><Text className="font-bold">🪧 Localizacão:</Text> Cidade da Música - Autódromo de Interlagos</Text>
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
                                    latitude: -23.697427688758005,
                                    longitude: -46.69988131874373,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: -23.697427688758005,
                                        longitude: -46.69988131874373,
                                    }}
                                    title="Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo"
                                />
                            </MapView>
                        </View>
                        <Text className="text-gray-500 mt-2">Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo - SP, 04801-010</Text>
                    </View>
                </View>
                <View className="mb-12">
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-[#8E05C2] font-semibold uppercase">Participantes</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-[#8E05C2] font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {artists.map(artist => (
                                <View
                                    key={artist.id}
                                    className="ml-4">
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Event Information")}>
                                        <Image
                                            source={artist.image}
                                            className="mt-4 h-24 w-24 rounded-full"
                                        />
                                    </TouchableOpacity>
                                    <Text className="text-[#FFFFFF] text-md text-center font-bold mt-3">{artist.name}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EventInfo