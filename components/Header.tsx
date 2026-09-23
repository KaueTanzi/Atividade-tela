import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerTitle}>Burger Craft</Text>
            <Text style={styles.headerSubtitle}>Sabor artesanal de verdade</Text>
            </View>

            <View style={styles.avatarPlaceholder}>
            <Ionicons name='person' size={20} color="#2f2d2c"></Ionicons>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#9b9b9b"
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },
})