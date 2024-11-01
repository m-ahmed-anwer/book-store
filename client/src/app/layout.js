import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Providers } from "@/store/provider";

export const metadata = {
  title: "Book Store",
  description: "Generated by Ahmed Anwer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
