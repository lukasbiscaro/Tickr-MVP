import { ScrollView, View, Image, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar, CasaDeShow } from '../assets/index'
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
        <View className="bg-mainBlack flex-1 relative">
            <ScrollView>
                <View className="flex-col items-center justify-center px-8 mt-16">
                    <Text className="text-xl text-white font-semibold">Meu perfil</Text>
                </View>
                <View className="h-40 mx-4 flex-row mt-8 items-center justify-start border-2 border-mediumGray rounded">
                    <View className="w-28 h-28 ml-5 mr-5">
                        <Image
                            source={Avatar}
                            className="w-full h-full rounded-full"
                        />
                    </View>
                    {
                        userData && (
                            <>
                                <View className="flex-col gap-y-2">
                                    <Text className="text-2xl text-white font-semibold">
                                        {userData.user_name}
                                    </Text>
                                    <Text className="text-lowGray font-light">
                                        {userData.user_email}
                                    </Text>
                                </View>
                            </>
                        )
                    }
                </View>
                <TouchableOpacity
                    className="mx-4 mt-4 mb-8 h-10 items-center justify-center rounded border bg-mainPurple">
                    <Text className="text-white font-semibold text-md uppercase">Editar</Text>
                </TouchableOpacity>
                <View className="h-40 mx-4 flex-col">
                    <Text className="text-xl font-semibold text-white mb-7">Minha Conta</Text>
                    <View className="border-b-2 border-b-mediumGray">
                        <Text className="text-lowGray text-lg font-semibold mb-3 ml-8">Alterar senha</Text>
                    </View>
                    <View className="border-b-2 border-b-mediumGray">
                        <Text className="text-lowGray text-lg font-semibold mb-3 mt-6 ml-8">Gerir notificações</Text>
                    </View>
                </View>
                <View className="mx-4 mt-5">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-white text-lg font-semibold mt-6">Métodos de Pagamento</Text>
                        </View>
                        <View>
                            <Text className="text-mainPurple text-2xl font-semibold mt-6">+</Text>
                        </View>
                    </View>
                    <View className="mt-4 h-10 justify-center rounded bg-mediumGray shadow-sm shadow-black">
                        <Text className="text-lowGray font-semibold text-md ml-10 uppercase">*9876</Text>
                    </View>
                    <View className="mt-4 h-10 justify-center rounded bg-mediumGray shadow-sm shadow-black">
                        <Text className="text-lowGray font-semibold text-md ml-10 uppercase">*9876</Text>
                    </View>
                </View>
                <View className="mx-4 mb-28">
                    <TouchableOpacity
                        className="mt-10 h-10 justify-center items-center rounded bg-darkGray">
                        <Text className="text-middleRed font-semibold text-md uppercase">Sair</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile
