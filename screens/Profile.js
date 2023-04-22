import { ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="bg-gray-900 flex-1 relative">
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile