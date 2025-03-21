import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>카메라 권한을 확인하는 중...</ThemedText>
      </ThemedView>
    );
  }

  if (!permission.granted) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>이 기능을 사용하려면 카메라 권한이 필요합니다.</ThemedText>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <ThemedText style={styles.buttonText}>권한 허용하기</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}>
        <View style={styles.overlay}>
          <ThemedView style={styles.infoCard}>
            <ThemedText style={styles.infoText}>주변 탐색 중...</ThemedText>
          </ThemedView>
          <TouchableOpacity style={styles.captureButton} />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    padding: 20,
  },
  infoCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    borderRadius: 12,
    marginTop: 40,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4DABF7',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  }
}); 