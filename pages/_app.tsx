import '../src/styles/Global.css';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from '../src/styles/themes';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [fontSize, setFontSize] = useState(12);
 
  return (
      <ThemeProvider theme={temaEscuro}>
          <Component {...pageProps} />
        
      </ThemeProvider>
    );
}

export default MyApp
