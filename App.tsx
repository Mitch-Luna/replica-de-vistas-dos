import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={ styles.profile}>
          <Text style={styles.letraprofile}>Profile</Text>
          <Ionicons style={styles.puntitos} name="md-ellipsis-horizontal-circle-outline" size={28} color="black" />
        </View>
        <Image
          style={styles.perfil}
          source={{uri: 'https://ciudadtrendy.mx/wp-content/uploads/2020/05/jung-kook-bts-1.jpg'}}
      />
      <Text style={styles.nombre}>Andrew Ainsley</Text>
      <View style={styles.cajita}>
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
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(230, 245, 245)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer:{
    backgroundColor:'white',
    width:"90%",
    height:"95%",
    borderRadius:40,
  },
  
  profile:{
    flexDirection:'row',
    alignSelf:'center',
    width:"100%",
    height:"10%",
    borderRadius:40,
  },
  letraprofile:{
    marginHorizontal:43,
    marginTop:20,
    fontSize:22,
    color:'black',
  },
  puntitos:{
    marginRight:34,
    marginLeft:'auto',
    marginTop:20,
  },
  perfil:{
    alignSelf:'center',
    marginTop:10,
    width:143,
    height:152,
    borderRadius:84,
    borderColor:'white',
    borderWidth:3,
  },
  nombre:{
    alignSelf:'center',
    marginTop:1,
    fontSize:22,
    color:'black',
  },
  cajita:{
    flexDirection:'row',
    marginTop:12,
    alignSelf:'center',
    width:"96%",
    height:120,
    borderColor:'rgb(149, 154, 154)',
    borderWidth:1,
    borderEndColor:'white',

  },
  cajitaEvents:{
    alignSelf:'center',
    marginHorizontal:-9,
    width:'37%',
    height:103,
    borderColor:'white',
    borderWidth:1,
    borderEndColor:'rgb(149, 154, 154)',
    borderLeftColor:'white',
    
  },
  cajitaFollowers:{

    alignSelf:'center',
    width:'37%',
    height:103,
    borderColor:'white',
    borderWidth:1,
    borderEndColor:'rgb(149, 154, 154)', 
  },
  cajitaFollowing:{
    alignSelf:'center',
    marginHorizontal:-9,
    width:'37%',
    height:103,
    borderColor:'white',
    borderWidth:1,
    borderEndColor:'white', 
  },
  numero:{
    alignSelf:'center',
    fontSize:42,
  },
  letritas:{
    alignSelf:'center',
    fontSize:15,
  }
});
