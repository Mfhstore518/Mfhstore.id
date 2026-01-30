import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>🎯</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 20 }}>
        COUNTER APP
      </Text>
      
      <Text style={{ fontSize: 80, fontWeight: 'bold' }}>
        {count}
      </Text>
      
      <View style={{ marginTop: 30 }}>
        <Button 
          title="TAMBAH (+)" 
          onPress={() => setCount(count + 1)}
          color="green"
        />
      </View>
      
      <View style={{ marginTop: 10 }}>
        <Button 
          title="KURANG (-)" 
          onPress={() => count > 0 && setCount(count - 1)}
          color="red"
        />
      </View>
      
      <View style={{ marginTop: 10 }}>
        <Button 
          title="RESET" 
          onPress={() => {
            setCount(0);
            Alert.alert('Reset', 'Counter direset ke 0');
          }}
          color="blue"
        />
      </View>
      
      <Text style={{ marginTop: 50, color: 'gray' }}>
        Dibuat di HP 8GB
      </Text>
    </View>
  );
}
