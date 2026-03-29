// /app/layout.js
import "./globals.css";
import MainLayout from "../components/layout/MainLayout";

export const metadata = {
  title: "Campaign Builder",
  description: "D&D-style campaign generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}