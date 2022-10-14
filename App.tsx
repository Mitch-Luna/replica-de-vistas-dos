import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor={"rgb(230, 245, 245)"} />
    <View style={styles.container}>
      <View style={styles.subcontainer}>

        <View style={styles.profile}>
          <Image
            style={styles.eAzulita}
            source={{ uri: 'https://ih1.redbubble.net/image.2790253538.8309/st,small,507x507-pad,600x600,f8f8f8.jpg' }}
          />
          <Text style={styles.letraprofile}>Profile</Text>
          <Ionicons style={styles.puntitos} name="md-ellipsis-horizontal-circle-outline" size={28} color="black" />
        </View>
        <Image
          style={styles.perfil}
          source={{ uri: 'https://ciudadtrendy.mx/wp-content/uploads/2020/05/jung-kook-bts-1.jpg' }}
        />
        <Text style={styles.nombre}>Andrew Ainsley</Text>
        <View style={styles.cajita}>
          <View style={styles.rayita}>
          </View>
          <View style={styles.cajitaEvents}>
            <Text style={styles.numero}>12</Text>
            <Text style={styles.letritas}>Events</Text>
          </View>
          <View style={styles.cajitaFollowers}>
            <Text style={styles.numero}>7,389</Text>
            <Text style={styles.letritas}>Follewers</Text>
          </View>
          <View style={styles.cajitaFollowing}>
            <Text style={styles.numero}>125</Text>
            <Text style={styles.letritas}>Follewing</Text>
          </View>
        </View>
        <View style={styles.contenedorpequeño}>
          <View style={styles.subcajita}>
            <SimpleLineIcons name="calendar" size={28} color="black" />
            <Text style={styles.nombreActividad}>Manage Events</Text>
            <AntDesign style={styles.flecha} name="right" size={24} color="black" />
          </View>
          <View style={styles.subcajita}>
            <AntDesign name="message1" size={28} color="black" />
            <Text style={styles.nombreActividad}>Message Center</Text>
            <AntDesign style={styles.flecha} name="right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.cajitaDos}>
          <View style={styles.subcajitaDos}>
            <Feather name="user" size={28} color="black" />
            <Text style={styles.nombreActividad}>Profile</Text>
            <AntDesign style={styles.flecha} name="right" size={24} color="black" />
          </View>
          <View style={styles.subcajitaDos}>
            <Feather name="bell" size={28} color="black" />
            <Text style={styles.nombreActividad}>Notification</Text>
            <AntDesign style={styles.flecha} name="right" size={24} color="black" />
          </View>
          <View style={styles.subcajitaDos}>
            <MaterialCommunityIcons name="wallet-outline" size={28} color="black" />
            <Text style={styles.nombreActividad}>Payement</Text>
            <AntDesign style={styles.flecha} name="right" size={24} color="black" />
          </View>
          <View style={styles.subcajitaDos}>
            <MaterialCommunityIcons name="arrow-up-down" size={28} color="black" />
            <Text style={styles.nombreActividad}>Linked Acount</Text>
            <AntDesign style={styles.flecha} name="right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.footer}>
          <Octicons name="home" size={30} color="black" />
          <MaterialIcons name="explore" size={30} color="black" />
          <Fontisto name="heart-alt" size={30} color="black" />
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color="black" />
          <Feather name="user" size={28} color="blue" />
        </View>
        <View style={styles.containerLetras}>
          <Text style={styles.letras}>Home      </Text>
          <Text style={styles.letras}> Explore</Text>
          <Text style={styles.letras}>         Favorites</Text>
          <Text style={styles.letras}> Linkend Account</Text>
          <Text style={styles.letras}>Profile</Text>
        </View>

      </View>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(230, 245, 245)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  subcontainer: {
    flex:1,
    marginTop: 35,
    backgroundColor: 'white',
    width: "90%",
    height: 80,
    borderRadius: 40,
  },
  eAzulita: {
    marginHorizontal: 12,
    marginTop: 22,
    width: 25,
    height: 25,
  },

  profile: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: "100%",
    height: "10%",
    borderRadius: 40,
  },
  letraprofile: {
    marginHorizontal: 3,
    marginTop: 20,
    fontSize: 22,
    color: 'black',
  },
  puntitos: {
    marginRight: 34,
    marginLeft: 'auto',
    marginTop: 20,
  },
  perfil: {
    alignSelf: 'center',
    marginTop: -14,
    width: 143,
    height: 152,
    borderRadius: 84,
    borderColor: 'white',
    borderWidth: 3,
  },
  nombre: {
    alignSelf: 'center',
    marginTop: 1,
    fontSize: 22,
    color: 'black',
  },
  rayita:{
    marginHorizontal:-9,
      width:'3%',
      height:117,
      backgroundColor:'white',
  },
  cajita: {
    flexDirection: 'row',
    marginTop: 12,
    alignSelf: 'center',
    width: "96%",
    height: 120,
    borderColor: 'rgb(149, 154, 154)',
    borderWidth: 1,
    borderEndColor: 'white',

  },
  cajitaEvents: {
    alignSelf: 'center',
    marginHorizontal: 7,
    width: '28%',
    height: 103,
    borderColor: 'white',
    borderWidth: 1,
    borderEndColor: 'rgb(149, 154, 154)',
   

  },
  cajitaFollowers: {
    alignSelf: 'center',
    width: '37%',
    height: 103,
    borderColor: 'white',
    borderWidth: 1,
    borderEndColor: 'rgb(149, 154, 154)',
  },
  cajitaFollowing: {
    alignSelf: 'center',
    marginHorizontal: 5,
    width: '25%',
    height: 103,
    borderColor: 'white',
    borderWidth: 1,
    borderEndColor: 'white',
  },
  numero: {
    alignSelf: 'center',
    fontSize: 42,
  },
  letritas: {
    alignSelf: 'center',
    fontSize: 15,
  },
  contenedorpequeño: {
    display: 'flex',
    marginTop: 32,
    alignSelf: 'center',
    width: '96%',
    height: 96,
    borderColor: 'rgb(140, 158, 179)',
    borderBottomWidth: 1,
  },
  subcajita: {
    flexDirection: 'row',
    width: '99%',
    height: 38,
    marginBottom: 12,
  },
  nombreActividad: {
    marginHorizontal: 24,
    marginTop: -2,
    fontSize: 22,

  },
  flecha: {
    marginLeft: 'auto',
    marginTop: -2,
  },
  cajitaDos: {
    display: 'flex',
    marginTop: 18,
    alignSelf: 'center',
    width: '96%',
    height: 196,
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  subcajitaDos: {
    flexDirection: 'row',
    width: '99%',
    height: 38,
    marginBottom: 12,
  },
  footer: {
    marginTop:12,
    flexDirection: 'row',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '96%',
    height: 35,
  },
  containerLetras: {
    flexDirection: 'row',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '96%',
    height: 30,
  },
  letras: {
    fontSize: 12,
  }


});
