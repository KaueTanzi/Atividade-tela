import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeCard from './components/CoffeCard';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === "") {
      setMessage('Por favor, informe seu nome!');
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido.`);
    }
  }


  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={50}
    >
      <ScrollView>
        {/* header */}
          <Header />
        {/* header */}

        {/* content */}
        <View style={styles.content}>
          <View style={styles.grettingSection}>
        
            <Text style={styles.grettingTitle}>Burger Craft</Text>
            <Text style={styles.grettingSubtitle}> Que tal um café hoje?</Text>
        
          </View>
        

          <View style={styles.featured}>
            <Image style={styles.image} source={require('./assets/coffee.jpg')} /> 
            <Text style={styles.featuredTitle}>Cappuccino Especial</Text>
            <Text style={styles.featuredDescription}>Cremoso e delicioso</Text>
            <Text style={styles.featuredPrice}>R$ 12,90</Text>
          </View>
          <Text style={styles.sectionTitle}>Nosso Cardápio</Text>
          <View style={styles.sectionCardContainer}>
            <CoffeCard 
            name='Espresso' 
            description='Puro e forte' 
            price='R$ 7,00' 
            />

            <CoffeCard 
            name='Cappuccino' 
            description='Clássico com espuma' 
            price='R$ 12,90' 
            />

            <CoffeCard 
            name='Latte' 
            description='Leite cremoso' 
            price='R$ 11,50' 
            />

            <CoffeCard 
            name='Mocha' 
            description='Toque de chocolate' 
            price='R$ 13,50' 
            />
          </View>
          <View style={styles.orderSection}>
              <Text style={styles.question}>Qual é o seu nome?</Text>
              <TextInput
              style={styles.input}
              placeholder='Digite seu nome'
              value={name}
              onChangeText={setName}
              ></TextInput>


              <TouchableOpacity style={styles.button} onPress={handleOrder}>
                <Text style={styles.buttonText}>Fazer me pedido</Text>
              </TouchableOpacity>
              {message !== '' && (
                <Text style={styles.messageText}>{message}</Text>
              )}
          </View>
        </View>
        {/* content */}


        { /* footer */}
        <Footer />
        { /* footer */}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1ff'
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 20

  },
  
  grettingSection: {
    marginTop:10,
    marginBottom: 24,
  },

  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  grettingSubtitle: {
    fontSize: 16,
    marginTop: 8,
    color: "#9b9b9b"
  },

  featured: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },

  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },

  featuredDescription: {
    fontSize: 14, 
    color: "#9b9b9b",
    marginTop: 4
  },

  featuredPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 12,
  },

  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16,
  },

  sectionCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 4,
    gap: 14
  },

  orderSection: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },

  button: {
    width: "100%",
    backgroundColor: "#c67c4e",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20, 
    shadowColor: "#c67c4e",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    elevation: 4
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  footer: {
    marginBlock: 40,
    alignItems: 'center',

  },

  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9b9b9b'
  },

  messageText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#c67c4e',
    textAlign: 'center',
    marginTop: 20,
  }

})
