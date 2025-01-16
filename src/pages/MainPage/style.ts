import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 100,
    width: '100%',
  },
  container2: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'black', // Cor do fundo
    paddingVertical: 12, // Altura do botão
    paddingHorizontal: 24, // Largura do botão
    borderRadius: 8, // Bordas arredondadas
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    textAlign: 'center',
  },
  imageSign: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow'
  }
});


export default styles;