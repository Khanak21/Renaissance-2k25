import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renaissance 2024 | The Annual MNNIT E-Summit",
  description:
    "Renaissance is the annual entrepreneurial summit of MNNIT Allahabad that provides a platform for aspiring entrepreneurs to encourage the entrepreneurial journey of translating thoughts into action. Renaissance includes a gamut of activities all of which provide an avenue to harbor entrepreneurial skills and stimulate discussion on ideas that possess the potential to turn the issues that plague us into opportunities. This year it is going to be held on 10 to 11 Feb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 7000 }}
        />
        {children}
      </body>
    </html>
  );
}
