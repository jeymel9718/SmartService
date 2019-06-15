import Dimensions from 'Dimensions'


export const colors = {
  black: '#000',
  error: '#FF0700',
  gray: 'rgba(255, 255, 255, 0.4)',
  success: '#0CF500',
  white: '#FFFFFF',

  primary: '#32A0CA',
  primary1: '#81CAE6',
  primary2: '#54B3D7',
  primary3: '#0F8EBE',
  primary4: '#056B92',

  secondary: '#3B74CF',
  secondary1: '#88ADE8',
  secondary2: '#5D8DDB',
  secondary3: '#195BC4',
  secondary4: '#0B4299',

  tertiary: '#2CCDA5',
  tertiary1: '#7EE7CD',
  tertiary2: '#50D9B7',
  tertiary3: '#08C293',
  tertiary4: '#009771',
}

export const dimensionsDevice = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

export const roundButton = {
  alignItems: 'center',
  borderRadius: 20,
  alignSelf: 'center',
  justifyContent: 'center',
  zIndex: 100,
}
