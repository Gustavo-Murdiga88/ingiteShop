import Img from 'next/future/image'
import { Container, Header } from '../styles/pages/app';
import {globalStyled} from '../styles/global'

import Logo from '../../public/assets/Logo.svg'

globalStyled();
function MyApp({ Component, pageProps }) {
  return( 
    <Container>
      <Header> 
        <Img src={Logo}
          />
      </Header>
    <Component {...pageProps} />
    </Container>
    )
}

export default MyApp
