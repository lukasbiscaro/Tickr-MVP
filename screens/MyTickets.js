import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { EmptyTicket } from '../assets'

const MyTickets = () => {
    return (
        <SafeAreaView className="bg-gray-900 flex-1">
            <View className="flex-col items-center justify-center px-8 mt-5">
                <Text className="text-xl text-white">Meus Ingressos</Text>
            </View>
            <View className="h-full items-center justify-center">
                <View className="items-center justify-center mb-20">
                    <View className="w-40 h-40 items-center justify-center">
                        <Image
                            source={EmptyTicket}
                            className="w-full h-full"
                        />
                    </View>
                    <Text className="text-white text-2xl font-bold mb-4">Opsss!</Text>
                    <Text className="text-white text-md font-semibold">Você não possui ingressos para próximos eventos.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MyTickets