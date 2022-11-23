import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import ButtonReturn from '../../components/buttonReturn';
import ImageScanner from '../../../assets/scanner.png';

/**
 * { route } permite acesso as propriedades do Navigation,
 * sendo assim, podemos acessar parametros que foram passado
 * por outra pagina anteriomente.
*/
export default function ScannerEAN({ route }) {

  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();

  const navigation = useNavigation();

  // Funcao para retornar para outra pagina passando parametro
  function returnPageWithParams(page, params) {
    navigation.navigate(page, params);
  }
  
  // return page
  function returnPage() {
    navigation.navigate('ListStorage');
  }

  /**
   * O useEffects juntamente com o requestPermissionsAsync vai
   * perguntar se o usuario permite o uso da camera antes de
   * renderizar os componentes na tela.
  */
  useEffect(() => {
    (
      async() => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      }
    )()
  }, []);

  /**
   * Verifica se o usuario permitiu o uso da camera, se nao,
   * sera exibido uma mensagem pedindo para permitir.
  */
  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Você precisa permitir com que o aplicativo utilize a câmera.</Text>
      </View>
    );
  }

  
  // { data } possui o codigo de barras escaneado.
  const handleBarCodeScanned = ({data}) => {
    setScanData(data);
    returnPageWithParams(route.params.pageReturn, {barcode: data});
  };

  return (
    <View>
      

      {/* Componente camera e scanner */}
      <BarCodeScanner 
        barCodeTypes={["ean13", "ean8"]}
        style={styles.scanner}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />

        {/* View da imagem de sobreposicao do Scanner */}
        <View style={styles.containerScannerImage}>

          <Image
            source={ImageScanner}
            style={styles.scannerImage}
          />
          <View style={styles.bttnReturn}>
          <ButtonReturn
            
            eventHandler={returnPage}
          />
          </View>
          

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  scanner: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontWeight: 'bold'
  },
  containerScannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center'
  },
  scannerImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
  bttnReturn: {
    position: 'absolute',
    paddingLeft: 20,
    paddingTop: 40,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
});