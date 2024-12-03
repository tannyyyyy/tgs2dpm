import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DimensionExample = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Tanny Apriliani</Text>
      <Text style={styles.text}>Teknik Informatika</Text>

      {/* Dua kotak di sisi kiri dan kanan */}
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Warna abu-abu terang untuk latar belakang
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'black', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak teks dengan kotak
  },
  row: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Lebar area row agar jarak antar kotak terjaga
  },
  box1: {
    backgroundColor: 'red', // Warna kotak 1 (bebas)
    width: 100,
    height: 100, // Ukuran kotak 100x100
  },
  box2: {
    backgroundColor: 'yellow', // Warna kotak 2 (bebas)
    width: 100,
    height: 100, // Ukuran kotak 100x100
  },
});

export default DimensionExample;