import { ScrollView, SafeAreaView, View, Image, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar } from '../assets/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import { API_URL } from "@env"

const Profile = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}users/`)
            .then(response => {
                setUserData(response.data[0])
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <View className="bg-[#121212] flex-1 relative">
            <ScrollView>
                <View className="flex-col items-center justify-center px-8 mt-16">
                    <Text className="text-xl text-[#FFFFFF] font-bold">Meu Perfil</Text>
                </View>
                <View className="h-40 mx-4 flex-row items-center">
                    <View className="w-28 h-28 ml-5 mr-5">
                        <Image
                            source={Avatar}
                            className="w-full h-full rounded-full"
                        />
                    </View>
                    {
                        userData && (
                            <>
                                <View>
                                    <Text className="text-2xl text-[#FFFFFF] font-bold">
                                        {userData.user_name}
                                    </Text>
                                    <Text className="text-[#404040] font-semibold mt-2">
                                        {userData.user_email}
                                    </Text>
                                </View>
                            </>
                        )
                    }
                </View>
                <TouchableOpacity
                    className="mx-4 mt-4 mb-8 h-10 items-center justify-center rounded-xl border border-[#8E05C2]">
                    <Text className="text-[#8E05C2] font-bold text-md">Editar Perfil</Text>
                </TouchableOpacity>
                <View className="h-40 mx-4 flex-col">
                    <Text className="text-xl font-bold text-[#FFFFFF] mb-7">Minha Conta</Text>
                    <View className="border-b-2 border-b-[#404040]">
                        <Text className="text-[#FFFFFF] text-lg font-semibold mb-3 ml-8">Alterar senha</Text>
                    </View>
                    <View className="border-b-2 border-b-[#404040]">
                        <Text className="text-[#FFFFFF] text-lg font-semibold mb-3 mt-6 ml-8">Gerir notificações</Text>
                    </View>
                </View>
                <View className="mx-4 mt-5">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-[#FFFFFF] text-lg font-bold mt-6">Métodos de Pagamento</Text>
                        </View>
                        <View>
                            <Text className="text-[#8E05C2] text-2xl font-semibold mt-6">+</Text>
                        </View>
                    </View>
                    <View className="mt-4 h-10 justify-center rounded-xl bg-[#181818] shadow-sm shadow-black">
                        <Text className="text-[#404040] font-bold text-md ml-10 uppercase">*9876</Text>
                    </View>
                    <View className="mt-4 h-10 justify-center rounded-xl bg-[#181818] shadow-sm shadow-black">
                        <Text className="text-[#404040] font-bold text-md ml-10 uppercase">*9876</Text>
                    </View>
                </View>
                <View className="mx-4 mb-28">
                    <TouchableOpacity
                        className="mt-10 h-10 justify-center items-center rounded-xl bg-[#181818]">
                        <Text className="text-red-500 font-bold text-md">Sair da Conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile
