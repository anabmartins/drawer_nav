import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{    
    flex: 1,
    width: '100%', // Cobrir a largura da tela
    height: '100%', // Cobrir a altura da tela
    resizeMode: 'cover', // Cobrir toda a tela
    justifyContent: 'center', // Alinhar o conteúdo ao centro
    alignItems: 'center', // Alinhar
  } ,
  btn: {
    width: '100%', // Cobrir a largura da tela
    height: '100%', 
  },
  press:{
    fontWeight: 'bold',
    color: '#8afcfe',
    fontSize: 30,
    textAlign: 'center',
    width: '60%',
    // marginTop: 500
  },
  btnSell:{
    backgroundColor: '#8afcfe',
    padding: 10,
    borderRadius: 5,
    margin: 15
  },
  textBtn: {
    color: '#005253',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  }
})

export default styles;