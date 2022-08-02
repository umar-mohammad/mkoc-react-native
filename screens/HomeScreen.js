import React, { Fragment, useEffect, useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import SearcBar from "../components/SearchBar"
import CruiseList from "../components/CruiseList"

const getCruises = async (setFunction) => {
    let response = await fetch("https://mkoc-backend.herokuapp.com/cruises")
    let data = await response.json()
    return setFunction(data.cruises)
}

export default function HomeScreen() {
    const [data, setData] = useState([])
    const [listData, setListData] = useState([])
    const [search, setSearch] = useState("")

    const handleSearch = (search) => {
        const filter = search.toUpperCase()

        const updatedData = data.filter((cruise) => {
            const matchName = cruise.name.toUpperCase().indexOf(filter) != -1
            const matchLocation = cruise.location.toUpperCase().indexOf(filter) != -1

            if (matchName || matchLocation) {
                return true
            } else {
                return false
            }
        })

        setListData(updatedData)
    }

    useEffect(() => {
        getCruises(setData)
    }, [])

    useEffect(() => {
        setListData(data)
    }, [data])

    useEffect(() => {
        handleSearch(search)
    }, [search])

    return (
        <SafeAreaView style={styles.container}>
            <SearcBar search={search} setSearch={setSearch} />
            <CruiseList data={listData} title="Popular Destinations" />
            <CruiseList
                data={listData.map((_, index) => data[data.length - 1 - index])}
                title="Recommended for you"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
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
