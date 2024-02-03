import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <EncabezadoLogo />
      <CuerpoLogo />
      <Pie />
      <StatusBar style="auto" />
    </View>
  );
}

export const EncabezadoLogo = () => {
  return (
    <View style={styles.encabezado}>
    </View>
  );
}

export function CuerpoLogo() {
  return (
    <View style={styles.contenido}>
      <Image style={styles.logo} source={require('./assets/logo.jpeg')} />
      <Image style={styles.imagen2} source={require('./assets/img2.jpeg')} />
      <TextInput style={styles.inputBox} placeholder="Email o número de teléfono" />
      <TouchableOpacity
        style={styles.botonContinuar}
        onPress={() => {
          // Lógica de continuar
        }}
      >
        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>
          Continuar
        </Text>
      </TouchableOpacity>

      <Text style={styles.textoProblemas}>
        ¿Problemas al iniciar sesión?
      </Text>
      <Text style={styles.textoO}>
        O
      </Text>

      <Login />
    </View>
  );
}

export const Pie = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.texto}></Text>
      <Text style={styles.texto}></Text>
      <Text style={styles.texto}></Text>
      <Text style={styles.texto}></Text>
    </View>
  );
}

export const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Boton Texto={'Continuar con Google'} Logo={require('./assets/g.png')} Color={'white'} />
      <Boton Texto={'Continuar con Facebook'} Logo={require('./assets/f.png')} Color={'white'} />
      <Boton Texto={'Continuar con X'} Logo={require('./assets/x.webp')} Color={'white'} />
      <View style={styles.terminos}>
        <Text style={styles.textoTerminos}>
          Al continuar, aceptas nuestro{' '}
          <Text style={[styles.enlace, styles.textoAzul]}>Términos de uso</Text>{' '}
          y{' '}
          <Text style={[styles.enlace, styles.textoAzul]}>Políticas de privacidad</Text>.
        </Text>
      </View>
    </View>
  );
};

export const Boton = ({ Texto, Logo, Color }) => {
  return (
    <Pressable style={[styles.boton, { backgroundColor: Color }]}>
      <Image style={styles.imagenB} source={Logo} resizeMode="contain" />
      <Text style={[styles.textoB, { color: 'black', fontSize: 12, textAlign: 'left', marginLeft: 8, flex: 1 }]}>{Texto}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imagenB: {
    height: 33,
    width: 30,
    marginEnd: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  logo: {
    height: 70,
    width: 200,
    marginRight: 5,
    marginTop: 15,
  },
  imagen2: {
    height: 100,
    width: 300,
    marginRight: 20,
    marginTop: -10,
  },
  inputBox: {
    width: 290,
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 2,
    color: 'gray',
  },
  botonContinuar: {
    backgroundColor: "#FFA500",
    borderRadius: 25,
    padding: 12,
    margin: 10,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    width: 285,
  },
  textoProblemas: {
    color: 'gray',
    fontSize: 12,
    margin: 8,
    marginTop: 10,
  },
  textoO: {
    color: 'gray',
    fontSize: 14,
    margin: 8,
    marginTop: 10,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  pie: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  contenido: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: "#fff",
    fontSize: 30
  },
  textoB: {
    color: 'white',
    fontSize: 18
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  boton: {
    flexDirection: 'row',
    backgroundColor: '#72b6c9',
    padding: 18,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    marginRight: -50,
    height: 42,
    width: 280,
    borderColor: '#ccc',
    marginEnd: 10,
  },
  textoB: {
    color: 'white',
    fontSize: 12,
    flex: 1,
    marginTop: -10,
  },
  terminos: {
    marginTop: 10,
    alignItems: 'center',
  },
  textoTerminos: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
  enlace: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  textoAzul: {
    color: 'blue',
  },
  loginContainer: {
    alignItems: 'center',
  },
});
