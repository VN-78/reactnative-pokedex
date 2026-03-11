import './global.css'; // This import is mandatory for NativeWind v4
import { StatusBar } from 'expo-status-bar';
import { Text, View,} from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-3xl font-bold text-emerald-400 tracking-widest">
        POKÉDEX READY Hi this an sample 
      </Text>
      <StatusBar style="light" />
    </View>
  );
}