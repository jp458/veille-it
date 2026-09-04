import "./globals.css";

export const metadata = {
  title: "Veille informatique",
  description: "Tableau de bord de veille locale — sécurité, IT, appareils",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
