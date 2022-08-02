import { TextInput, StyleSheet } from "react-native"

const SearcBar = ({ search, setSearch }) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="where would you like to go?"
        />
    )
}

export default SearcBar

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 0.5,
        borderRadius: 8,
        padding: 10,
        marginVertical: 30,
    },
})
