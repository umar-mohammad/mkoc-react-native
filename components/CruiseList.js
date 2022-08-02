import React, { Fragment } from "react"
import { Text, View, FlatList } from "react-native"
import CruiseCard from "../components/CruiseCard"

const CruiseList = ({ data, title }) => {
    return (
        <Fragment>
            <View
                style={{
                    width: "100%",
                    paddingLeft: 16,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: "700" }}>{title}</Text>
            </View>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 10 }}
            />
        </Fragment>
    )
}

const renderItem = ({ item }) => {
    return <CruiseCard cruise={item} />
}

export default CruiseList
