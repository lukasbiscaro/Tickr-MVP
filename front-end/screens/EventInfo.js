import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar, TheTown } from '../assets'
import MapView, { Marker } from 'react-native-maps';
import artists from '../data/artists'
import axios from 'axios';
import { API_URL } from '@env'
import { useRoute } from '@react-navigation/native';

const EventInfo = () => {

    const route = useRoute();
    const { eventId } = route.params;

    const [showMore, setShowMore] = useState(false);
    const [eventsData, setEventsData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${API_URL}events/manage/${eventId}`)
            .then(response => {
                setEventsData([response.data]);
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [eventId]);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <View className="bg-[#121212] flex-1 relative">
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className="flex-col items-center justify-center px-8 mt-16">
                    <View>
                        <Text className="text-xl text-[#FFFFFF] font-bold">Detalhes do Evento</Text>
                    </View>
                    {
                        loading
                            ?
                            eventsData.map((event) => {
                                return (
                                    <>
                                        <View key={event.id}>
                                            <Image
                                                source={TheTown} // EXAMPLE IMAGE (Fix API)
                                                className="w-[370px] h-[380px] mt-8 rounded-3xl" />
                                            <Text className="text-3xl text-[#FFFFFF] font-bold mt-7 mb-4 uppercase">{event.event_name}</Text>
                                            <Text className="text-lg text-[#FFFFFF] font-bold">R$ {event.event_price}</Text>
                                            <Text className="text-md text-[#b3b3b3] font-semibold mt-6"><Text className="font-bold">📆 Calendário:</Text> {event.event_date}</Text>
                                            <Text className="text-md text-[#b3b3b3] font-semibold my-2"><Text className=
                                                "font-bold">⏱️ Horário de Funcionamento:</Text> {event.event_time_start} até {event.event_time_ends}</Text>
                                            <Text className="text-md text-[#b3b3b3] font-semibold"><Text className="font-bold">🪧 Localizacão:</Text> {event.event_location}</Text>
                                            <Text
                                                numberOfLines={showMore ? null : 3}
                                                className="text-md text-[#404040] font-light mt-5">{event.event_description}</Text>
                                            {event.event_description.length > 120 && (
                                                <TouchableOpacity onPress={toggleShowMore}>
                                                    <Text className="text-[#8E05C2] mt-2">
                                                        {showMore ? 'Ler menos' : 'Ler mais'}
                                                    </Text>
                                                </TouchableOpacity>
                                            )}
                                        </View>
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
                                            <Text className="text-gray-500 mt-2">{event.event_location}</Text>
                                        </View>
                                    </>
                                )
                            })
                            :
                            <ActivityIndicator
                                size="large"
                                color="#8E05C2"
                                className="my-48" />
                    }
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
                            {
                                artists.map(artist => (
                                    <View
                                        key={artist.id}
                                        className="ml-4">
                                        <TouchableOpacity>
                                            <Image
                                                source={Avatar}
                                                className="mt-4 h-24 w-24 rounded-full"
                                            />
                                        </TouchableOpacity>
                                        <Text className="text-[#FFFFFF] text-md text-center font-bold mt-3">{artist.name}</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EventInfo