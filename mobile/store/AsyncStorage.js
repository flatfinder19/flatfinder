import { AsyncStorage } from 'react-native';

export const StoreData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // Error saving data
    console.log(e);
  }
};

export const RetrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      //console.log(value);
      return JSON.parse(value);
    } else {
      //console.log('no data');
    }
  } catch (e) {
    // Error retrieving data
    console.log(e);
  }
};

export const RemoveData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // Error retrieving data
    console.log(e);
  }
};
