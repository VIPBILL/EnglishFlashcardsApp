import { StyleSheet, Image, Platform, View, Text } from 'react-native'

const Explore = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Explore</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  export default Explore;
    
