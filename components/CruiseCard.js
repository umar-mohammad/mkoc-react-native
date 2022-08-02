import { Text, View, Image } from "react-native"

const CruiseCard = ({ cruise }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: cruise.image }} style={styles.image} />
            <View style={styles.textBox}>
                <Text style={styles.name}>{cruise.name}</Text>
                <Text style={styles.location}>{cruise.location}</Text>
                <Text style={styles.price}>{cruise.price}</Text>
            </View>
        </View>
    )
}

export default CruiseCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 4,
        height: 220,
        margin: 5,
        borderColor: "rgba(0,0,0, 0.1)",
        borderWidth: 1,
        shadowOffset: {
            x: 0,
            y: 0,
        },
        shadowRadius: 4,
        shadowColor: "rgba(128, 128, 128, 1)",
        backgroundColor: "white",
        shadowOpacity: 0.2,
    },
    image: { width: 170, height: 150, borderRadius: 8 },
    textBox: { marginTop: 5 },
    name: { fontSize: 16 },
    location: { fontSize: 12, color: "rgba(0,0,0,0.6)" },
    price: { fontSize: 12, color: "rgba(0,0,0,0.6)", marginTop: 1 },
})
