import { Text, View, StyleSheet } from 'react-native'

const LocationView = ({locationData}) => (
    <View style={style.container}>
        <Text>{locationData}</Text>
    </View>
)
