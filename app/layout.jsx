import "./global.css";

export const metadata = {
  title: "Akanksha Mohite-Portfolio",
  description: "Next.js + Tailwind demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
