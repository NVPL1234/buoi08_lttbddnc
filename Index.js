import { Button, View } from "react-native";

export default function Index ({navigation}) {
    return (
        <View>
            <Button title="Câu 2" onPress={() => navigation.navigate('Câu 2')}></Button>
            <Button title="Câu 3" onPress={() => navigation.navigate('Câu 3')}></Button>
            <Button title="Câu 4" onPress={() => navigation.navigate('Câu 4')}></Button>
            <Button title="Câu 5" onPress={() => navigation.navigate('Câu 5')}></Button>
            <Button title="Câu 6" onPress={() => navigation.navigate('Câu 6')}></Button>
            <Button title="Câu 7" onPress={() => navigation.navigate('Câu 7')}></Button>
        </View>
    )
}