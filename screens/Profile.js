import { ScrollView, SafeAreaView, View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '../assets/index'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="bg-gray-900 flex-1 relative">
            <ScrollView>
                <View className="h-40 mx-4 flex-row items-center">
                    <View className="w-28 h-28 ml-5 mr-5">
                        <Image
                            source={Avatar}
                            className="w-full h-full rounded-full"
                        />
                    </View>
                    <View>
                        <Text className="text-2xl text-white font-bold">
                            Lukas Biscaro
                        </Text>
                        <Text className="text-white font-semibold">
                            lukas.biscaro@hotmail.com
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    className="mx-4 mt-4 mb-8 h-10 items-center justify-center rounded-xl border border-gray-500">
                    <Text className="text-gray-500 font-bold text-md">Editar Perfil</Text>
                </TouchableOpacity>
                <View className="h-40 mx-4 flex-col">
                    <Text className="text-xl font-bold text-white mb-7">Minha Conta</Text>
                    <View className="border-b-2 border-b-gray-800">
                        <Text className="text-white text-lg font-semibold mb-3 ml-8">Alterar senha</Text>
                    </View>
                    <View className="border-b-2 border-b-gray-800">
                        <Text className="text-white text-lg font-semibold mb-3 mt-6 ml-8">Gerir notificações</Text>
                    </View>
                </View>
                <View className="mx-4 mt-5">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-white text-lg font-bold mt-6">Métodos de Pagamento</Text>
                        </View>
                        <View>
                            <Text className="text-white text-2xl font-bold mt-6">+</Text>
                        </View>
                    </View>
                    <View className="mt-4 h-10 justify-center rounded-xl bg-gray-800 shadow-sm shadow-black">
                        <Text className="text-white font-bold text-md ml-10 uppercase">*9876</Text>
                    </View>
                    <View className="mt-4 h-10 justify-center rounded-xl bg-gray-800 shadow-sm shadow-black">
                        <Text className="text-white font-bold text-md ml-10 uppercase">*9876</Text>
                    </View>
                </View>
                <View className="mx-4">
                    <TouchableOpacity
                        className="mt-10 h-10 justify-center items-center rounded-xl bg-gray-800">
                        <Text className="text-red-500 font-bold text-md">Sair da Conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile
