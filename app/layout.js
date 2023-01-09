import "./global.css"
import { Inter } from '@next/font/google'
import Link from "next/link"
import Navlink from "../components/Navlink"
import Providers from "./providers";
import Loginbtn from "./Loginbtn";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})


export default function RootLayout({ children }) {
  return (
    <html>

	<body className={inter.className}>
    <nav className="p-4 border-b-[1px] border-b-gray-600 space-x-4 text-lg">
      <Navlink href="/">Home</Navlink>
      <Navlink href="/todo">todo</Navlink>
    </nav>
	  <main>
      <Providers>
        <Loginbtn>
        {children}
        </Loginbtn>
      </Providers>
    </main>
	</body>
    </html>
  )
}
