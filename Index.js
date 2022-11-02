import { Button, View } from "react-native";

export default function Index ({navigation}) {
    return (
        <View>
            <Button title="Câu 2" onPress={() => navigation.navigate('Câu 2')}></Button>
            <Button title="Câu 3" onPress={() => navigation.navigate('Câu 3')}></Button>
        </View>
    )
}