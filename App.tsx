import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeCard from './components/BurgerCard';

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
            <Text style={styles.grettingSubtitle}> Escolha seu burger artesanal hoje</Text>
        
          </View>
        

          <View style={styles.featured}>
            <Image style={styles.image} source={require('./assets/hamburguer1.jpg')} /> 
            <Text style={styles.destaque}>DESTAQUE DA CASA</Text>
            <Text style={styles.featuredTitle}>Smash duplu cheddar</Text>
            <Text style={styles.featuredDescription}>Dois blands de 100g, queijo cheddar derretido e molho especial</Text>
            <Text style={styles.featuredPrice}>R$ 34,90</Text>
          </View>
          <Text style={styles.sectionTitle}>Nossos Burgers</Text>
          <View style={styles.sectionCardContainer}>
            <CoffeCard 
            name='Classic Burger' 
            description='Pão brioche, blend 160g e queijo prato' 
            price='R$ 26,00'
            image={require('./assets/burger1.jpg')}
            />

            <CoffeCard 
            name='Bacon Crispy' 
            description='Blend 160g com fatias crocantes de bacon' 
            price='R$ 32,00'
            image={require('./assets/burger2.jpg')} 
            />

            <CoffeCard 
            name='Chicken Crunchy' 
            description='Frango empanado com maionese da casa' 
            price='R$ 28,50'
            image={require('./assets/burger3.jpg')} 
            />

            <CoffeCard 
            name='Veggie Grill' 
            description='Hambúrguer de grão de bico e cogumelos' 
            price='R$ 29,90'
            image={require('./assets/burger4.jpg')} 
            />
          </View>
          <View style={styles.orderSection}>
              <Text style={styles.question}>Como podemos te chamar?</Text>
              <Text style={styles.inserir}>Insira seus dados para agilizar sua retirada e entrega</Text>
              <TextInput
              style={styles.input}
              placeholder='Digite seu nome'
              value={name}
              onChangeText={setName}
              ></TextInput>


              <TouchableOpacity style={styles.button} onPress={handleOrder}>
                <Text style={styles.buttonText}>Fazer meu pedido</Text>
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
    padding: 1,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32,
  },
  destaque:{
    fontSize: 11, 
    color: "#E65100",
    marginTop: 4,
    paddingLeft: 30,
    backgroundColor: "#f7daccff",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf:'flex-start',

  },

  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#141414ff",
    paddingLeft: 18,
    marginTop:10
  },

  featuredDescription: {
    fontSize: 14, 
    color: "#686666ff",
    marginTop: 4,
    paddingLeft: 18
  },

  featuredPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#E65100",
    marginTop: 12,
    paddingLeft: 18
  },

  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderTopLeftRadius: 10 ,
    borderTopRightRadius: 10,
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
    marginTop: 25,
    
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111110ff",
    marginBottom: 1,
  },

  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    marginTop: 15
  },

  button: {
    width: "100%",
    backgroundColor: "#E65100",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 15, 
    shadowColor: "#E65100",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    elevation: 4
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  inserir:{
    fontSize: 12, 
    color: "#636161ff",
    marginEnd: 5,
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
    fontSize: 14,
    fontWeight: '800',
    color: '#1c7023ff',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor:  '#d3f0d5ff',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    
  },
  
})
