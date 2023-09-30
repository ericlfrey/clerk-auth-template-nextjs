import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import NavBar from '@/components/Navbar/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <NavBar />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  )
}
