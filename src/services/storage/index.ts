import { MMKVLoader } from "react-native-mmkv-storage";

const LocalStorage = new MMKVLoader().initialize();

export default LocalStorage;
