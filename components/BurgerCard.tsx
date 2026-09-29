import { StyleSheet, View, Text, Image, ImageSourcePropType } from "react-native";

type CoffeCardProps = {
    name: string;
    description: string;
    price: string;
    image: ImageSourcePropType;
}

export default function CoffeCard({name, description, price, image}: CoffeCardProps) {
    return(
        <View style={styles.sectionCard}> 
            <Image source={image} style={styles.sectionCardImage} /> 
            <Text style={styles.sectionCardTitle}>{name}</Text>
            <Text style={styles.sectionCardDescription}>{description}</Text>
            <Text style={styles.sectionCardPrice}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionCard: {
        backgroundColor: "#fff",
        padding: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.05,
        elevation: 4,
        width: "48%"
    },

    sectionCardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1b1b1aff",
        paddingLeft: 12
    },

    sectionCardDescription: {
        fontSize: 12, 
        color: "#616060ff",
        marginTop: 4,
        paddingLeft: 12
    },

    sectionCardPrice: {
        fontSize: 16,
        fontWeight: "800",
        color: "#E65100",
        marginTop: 12,
        paddingLeft: 12
    },

    sectionCardImage:{
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10 ,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
    }

})