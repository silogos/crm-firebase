import { StyleSheet } from 'react-native';

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
    padding: 15,
    backgroundColor: '#FFF',
  },
  errorMessage: {
    marginBottom: 10,
    fontSize: 9,
    color: 'red',
  },
  parentGroup: {
    flex: 1,
    marginRight: 5,
  },
  parentGroupText: {
    color: '#999',
  },
  group: {
    flex: 1,
  },
  groupText: {
    color: '#000',
  },
  groupName: {
    flex: 1,
    marginBottom: 5,
  },
  groupNameText: {
    color: '#000',
  },
});
