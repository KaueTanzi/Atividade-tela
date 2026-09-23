import { StyleSheet, View, Text } from "react-native";

type CoffeCardProps = {
    name: string;
    description: string;
    price: string;
}

export default function CoffeCard({name, description, price}: CoffeCardProps) {
    return(
        <View style={styles.sectionCard}>
            <Text style={styles.sectionCardTitle}>{name}</Text>
            <Text style={styles.sectionCardDescription}>{description}</Text>
            <Text style={styles.sectionCardPrice}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionCard: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.05,
        elevation: 4,
        width: "48%"
    },

    sectionCardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2f2d2c",
    },

    sectionCardDescription: {
        fontSize: 12, 
        color: "#9b9b9b",
        marginTop: 4
    },

    sectionCardPrice: {
        fontSize: 16,
        fontWeight: "800",
        color: "#c67c4e",
        marginTop: 12,
    },

})