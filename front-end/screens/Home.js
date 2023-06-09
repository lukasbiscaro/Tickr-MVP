import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, CasaDeShow, TheTown } from '../assets'
import styles from '../data/styles'
import axios from 'axios'
import { API_URL } from '@env'

const Home = () => {

    const navigation = useNavigation()

    const [eventsData, setEventsData] = useState([])
    const [localsData, setLocalsData] = useState([])
    const [eventsLoading, setEventsLoading] = useState(false)
    const [localsLoading, setLocalsLoading] = useState(false)

    useEffect(() => {
        axios.get(`${API_URL}events/`)
            .then(response => {
                setEventsData(response.data)
                setEventsLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${API_URL}locals/`)
            .then(response => {
                setLocalsData(response.data)
                setLocalsLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <View className="flex-1 bg-mainBlack relative">

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View className="flex-row items-center align-middle justify-between px-8 mt-20">
                    <View>
                        <Text className="text-4xl text-white">Tick<Text className="text-mainPurple">r</Text></Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Perfil")}
                        className="w-12 h-12 items-center justify-center">
                        <Image
                            source={Avatar}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </TouchableOpacity>
                </View>
                <View className="mt-9 mb-6 h-12">
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {
                            styles.map(style => (
                                <TouchableOpacity
                                    className="mt-2 ml-4 justify-center align-middle bg-mainPurple w-24 h-9 rounded shadow-sm shadow-black">
                                    <Text className="text-center text-lg text-white font-semibold">{style.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                <View>
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-mainPurple font-semibold uppercase">Próximos Eventos</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-mainPurple font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-36 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {
                                eventsData.length > 0 && eventsData.slice(0, 8).map((event) => {
                                    return (
                                        <TouchableOpacity
                                            className="ml-4">
                                            <Image
                                                source={TheTown}
                                                className="h-full w-80 rounded"
                                            />
                                        </TouchableOpacity>
                                    )
                                })}
                        </ScrollView>
                    </View>
                </View>
                <View>
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-16 ml-4 mb-4 text-xl text-mainPurple font-light uppercase">Rolando <Text className="font-semibold">Hoje</Text></Text>
                        <Text className="mt-16 mr-4 mb-4 text-sm text-mainPurple font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-72 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {
                                eventsLoading
                                    ?
                                    eventsData.length > 0 && eventsData.slice(0, 5).map((event) => {
                                        return (
                                            <>
                                                <View
                                                    key={event.id}
                                                    className="flex-col ml-4">
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate("Detalhes do Evento", { eventId: event.id })}>
                                                        <Image
                                                            source={TheTown}
                                                            className="h-44 w-40 rounded"
                                                        />
                                                    </TouchableOpacity>
                                                    <View className="flex-col">
                                                        <Text className="text-white text-lg font-bold mt-3 mb-1">{event.event_name}</Text>
                                                        <View className="flex-col">
                                                            <Text className="text-lowGray text-sm font-light">{event.event_date}</Text>
                                                            <Text className="text-lowGray text-sm font-light mt-1">R$ {event.event_price}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </>
                                        )
                                    })
                                    :
                                    <ActivityIndicator
                                        size="large"
                                        color="#8E05C2" />
                            }
                        </ScrollView>
                    </View>
                </View>
                <View className="mb-24">
                    <View className="flex-row items-center justify-between">
                        <Text className="mt-10 ml-4 mb-4 text-xl text-mainPurple font-semibold uppercase">Principais Locais</Text>
                        <Text className="mt-10 mr-4 mb-4 text-sm text-mainPurple font-light underline">Ver Todos</Text>
                    </View>
                    <View className="h-56 w-full flex justify-center items-center">
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>
                            {
                                localsLoading
                                    ?
                                    localsData.length > 0 && localsData.slice(0, 5).map((local) => (
                                        <View
                                            key={local.id}
                                            className="ml-4">
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate("Detalhes do Local", { localId: local.id })}>
                                                <Image
                                                    source={CasaDeShow}
                                                    className="h-40 w-60 rounded"
                                                />
                                            </TouchableOpacity>
                                            <Text className="text-white text-lg font-semibold mt-1">{local.local_name}</Text>
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

export default Home