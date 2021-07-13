import Link from "next/link"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <div className="header">
          <Link href="/">
            <a>My kitchen 🍍</a>
          </Link>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  ) 
}

export default MyApp
