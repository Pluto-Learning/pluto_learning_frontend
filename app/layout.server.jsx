export const metadata = {
    title: "Pluto Learning",
    description: "Pluto Learning",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  