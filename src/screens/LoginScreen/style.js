import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#f1f6fd",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#000",
    opacity: "0.8",
    fontSize: "1.75rem",
    textAlign: "center",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    marginBottom: "10px",
    letterSpacing: "0.5px",

  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: "#ffffff"
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
  form: {
    width: '90%',
  },
  styledLabel: {
    color: "#aaadb2",
    padding: 10,
    paddingLeft: 0
  },
  signUpLabel: {
    textAlign: 'center',
    padding: 10,
    paddingTop: 40,
    paddingLeft: 0
  },
  buttonLogin: {


  }
});
