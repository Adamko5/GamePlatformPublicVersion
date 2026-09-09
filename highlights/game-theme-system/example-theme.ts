import { createTheme } from '@platform/frontend-sdk';

export const auroraValeTheme = createTheme({
  id: 'aurora-vale',
  name: 'Aurora Vale',
  mode: 'game',
  colors: {
    primary: '#62E6C8',
    primaryHover: '#8AF0DA',
    primaryFg: '#062A26',
    accent: '#F6B8FF',
    accentHover: '#FFD7FF',
    accentFg: '#38113F'
  },
  radii: {
    md: '14px',
    lg: '22px',
    pill: '999px'
  },
  motion: {
    standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    expressive: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },
  effects: {
    gradientPrimary: 'linear-gradient(135deg, #062A26, #145C52)',
    sceneBackground: '#07151A'
  }
});
