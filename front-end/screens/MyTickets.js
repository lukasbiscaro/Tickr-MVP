import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { EmptyTicket } from '../assets'

const MyTickets = () => {
    return (
        <View className="bg-[#121212] flex-1">
            <View className="flex-col items-center justify-center px-8 mt-16">
                <Text className="text-xl text-[#FFFFFF] font-bold">Meus Ingressos</Text>
            </View>
            <View className="h-full items-center justify-center">
                <View className="items-center justify-center mb-44">
                    <View className="w-40 h-40 items-center justify-center">
                        <Image
                            source={EmptyTicket}
                            className="w-full h-full"
                        />
                    </View>
                    <Text className="text-[#8E05C2] text-3xl font-bold mb-4">Opsss!</Text>
                    <Text className="text-[#FFFFFF] text-lg font-light w-64 text-center">Você não possui ingressos para próximos eventos.</Text>
                </View>
            </View>
        </View>
    )
}

export default MyTickets