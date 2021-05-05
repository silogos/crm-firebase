import { Dimensions, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const BOX_COLUMN = 2;
export const BOX_MARGIN = 15;
export const BOX_WIDTH =
  (SCREEN_WIDTH - BOX_MARGIN * (BOX_COLUMN + 1)) / BOX_COLUMN;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  list: {
    marginVertical: 15,
  },
  listTitle: {
    textAlign: 'center',
  },
});
