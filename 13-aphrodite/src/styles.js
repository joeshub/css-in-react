import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  btn: {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '14px',
    fontFamily: 'arial',
    padding: '6px 12px',
    border: '0',
    cursor: 'pointer'
  },
  btn_liked: {
    backgroundColor: 'black'
  },
  btn_primary: {
    color: '#fff',
    backgroundColor: '#f74A27'
  },
  badge: {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '700',
    borderRadius: '10px',
    padding: '3px 6px',
    position: 'relative',
    top: '-1px',
    color: '#f74A27',
    backgroundColor: '#fff'
  },
  hover: {
    ':hover': {
      backgroundColor: '#ff7857'
    }
  }
})
