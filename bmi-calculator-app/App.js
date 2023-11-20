import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(2);
    setBMI(roundedBMI);

    // Phân loại BMI
    if (calculatedBMI < 16) {
      setBMICategory('Gầy cấp độ III');
    } else if (calculatedBMI >= 16 && calculatedBMI < 16.9) {
      setBMICategory('Gầy cấp độ II');
    } else if (calculatedBMI >= 17 && calculatedBMI < 18.4) {
      setBMICategory('Gầy cấp độ I');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setBMICategory('Bình thường');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setBMICategory('Thừa cân');
    } else if (calculatedBMI >= 30 && calculatedBMI < 34.9) {
      setBMICategory('Béo phì cấp độ I');
    } else if (calculatedBMI >= 35 && calculatedBMI < 39.9) {
      setBMICategory('Béo phì cấp độ II');
    } else {
      setBMICategory('Béo phì cấp độ III');
    }
  };

  const clearData = () => {
    setHeight('');
    setWeight('');
    setBMI(0);
    setBMICategory('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính chỉ số khối cơ thể (BMI)</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập chiều cao (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập cân nặng (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <View style={styles.resultContainer}>
        <Text style={styles.bmi}>BMI: {bmi}</Text>
        <Text style={styles.bmiCategory}>Tình trạng: {bmiCategory}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Tính BMI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={clearData}>
        <Text style={styles.buttonText}>Xóa</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Lưu Quang Huy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e3eff7', // Màu nền mới
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bmi: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bmiCategory: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  clearButton: {
    marginTop: 10,
    backgroundColor: '#ff1d23',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
