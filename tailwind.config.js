export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'
];
export const theme = {
  important: true,
  extend: {
    maxWidth: {
      "8xl": "1920px"
    },
    screens: {
      xs: '375px',
      sm: '500px',
      md: '945px',
      lg: '1366px',
    },
    backgroundImage: {
      'bg-img': 'url("./assets/bgTexture.svg")',
      'bg-homeAbout-img': 'url("./assets/images/sashimi_.jpg")',
      'bg-hero': 'url("./assets/images/hero.jpg")' 
    },
    colors: {
      primary: 'var(--primary)',
      'primary-2': 'var(--primary-2)',
      secondary: 'var(--secondary)',
      'secondary-2': 'var(--secondary-2)',
      hover: 'var(--hover)',
      'hover-1': 'var(--hover-1)',
      'hover-2': 'var(--hover-2)',
      'accents-0': 'var(--accents-0)',
      'accents-1': 'var(--accents-1)',
      'accents-2': 'var(--accents-2)',
      'accents-3': 'var(--accents-3)',
      'accents-4': 'var(--accents-4)',
      'accents-5': 'var(--accents-5)',
      'accents-6': 'var(--accents-6)',
      'accents-7': 'var(--accents-7)',
      'accents-8': 'var(--accents-8)',
      'accents-9': 'var(--accents-9)',
      violet: 'var(--violet)',
      'violet-light': 'var(--violet-light)',
      pink: 'var(--pink)',
      cyan: 'var(--cyan)',
      blue: 'var(--blue)',
      green: 'var(--green)',
      red: 'var(--red)',
    },
    textColor: {
      base: 'var(--text-base)',
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
    }, 
    boxShadow: {
        'custom': '0px 3px 6px grey',
    },
  },
};
export const plugins = [];