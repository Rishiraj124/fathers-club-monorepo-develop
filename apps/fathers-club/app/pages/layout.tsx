export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </div>
  );
}
