import { StyleSheet, View, Text } from "react-native";


export default function Footer() {
    return (
        <View style={styles.footer}>
        <Text style={styles.footerText}>Cafeteria do Enzo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
    marginBlock: 40,
    alignItems: 'center',

    },

    footerText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#9b9b9b'
    },
})