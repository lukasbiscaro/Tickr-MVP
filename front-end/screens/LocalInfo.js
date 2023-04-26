import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CasaDeShow, TheTown } from '../assets'
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { API_URL } from '@env'
import { useRoute } from '@react-navigation/native';

const LocalInfo = () => {

    const route = useRoute();
    const { localId } = route.params;

    const navigation = useNavigation()

    const [showMore, setShowMore] = useState(false);
    const [eventsData, setEventsData] = useState([])
    const [localData, setLocalData] = useState([])
    const [eventsLoading, setEventsLoading] = useState(false)
    const [localInfoLoading, setLocalInfoLoading] = useState(false)

    useEffect(() => {
        axios.get(`${API_URL}locals/manage/${localId}`)
            .then(response => {
                setLocalData([response.data])
                setLocalInfoLoading(true)
            })
            .catch(err => console.log(err))
    }, [localId])

    useEffect(() => {
        axios.get(`${API_URL}events/`)
            .then(response => {
                setEventsData(response.data)
                setEventsLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <View className="bg-[#121212] flex-1 relative">
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className="flex-col items-center justify-center px-8 mt-16">
                    <View>
                        <Text className="text-xl text-[#FFFFFF] font-bold">Detalhes do Local</Text>
                    </View>
                    {
                        localInfoLoading
                            ?
                            localData.map((local) => {
                                return (
                                    <>
                                        <View>
                                            <Image
                                                source={CasaDeShow} // EXAMPLE IMAGE (Fix API)
                                                className="w-[370px] h-[380px] mt-8 rounded-3xl" />
                                            <Text className="text-3xl text-[#FFFFFF] font-bold mt-7">{local.local_name}</Text>
                                            <Text className="text-md text-[#b3b3b3] font-semibold mt-6"><Text className="font-bold">📆 Calendário:</Text> {local.local_date}</Text>
                                            <Text className="text-md text-[#b3b3b3] font-semibold my-2"><Text className=
                                                "font-bold">⏱️ Horário de Funcionamento:</Text> {local.local_time_start} até {local.local_time_ends}</Text>
                                            <Text className="text-md text-[#b3b3b3] font-semibold"><Text className="font-bold">🪧 Localizacão:</Text> {local.local_location}</Text>
                                            <Text
                                                numberOfLines={showMore ? null : 3}
                                                className="text-md text-[#404040] font-light mt-5">{local.local_description}</Text>
                                            {local.local_description.length > 120 && (
                                                <TouchableOpacity onPress={toggleShowMore}>
                                                    <Text className="text-[#8E05C2] mt-2">
                                                        {showMore ? 'Ler menos' : 'Ler mais'}
                                                    </Text>
                                                </TouchableOpacity>
                                            )}
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
                                                <Text className="text-[#404040] mt-2">{local.local_location}</Text>
                                            </View>
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
                <View className="mb-28">
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-[#8E05C2] font-semibold uppercase">Eventos neste local</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-[#8E05C2] font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {
                                eventsLoading
                                    ?
                                    eventsData.slice(0, 5).map(event => (
                                        <View
                                            key={event.id}
                                            className="ml-4 whitespace-pre-wrap break-words">
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate("Event Information", { eventId: event.id })}>
                                                <Image
                                                    source={TheTown}
                                                    className="h-40 w-36 rounded-xl"
                                                />
                                            </TouchableOpacity>
                                            <View className="flex-col">
                                                <Text className="text-[#FFFFFF] text-md font-bold mt-2">{event.event_name}</Text>
                                                <Text className="text-[#404040] text-sm font-light">{event.event_date}</Text>
                                                <Text className="text-[#404040] text-sm font-light">R$ {event.event_price}</Text>
                                            </View>
                                        </View>
                                    ))
                                    :
                                    <ActivityIndicator
                                        size="large"
                                        color="#8E05C2" />
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LocalInfo