export default function RootLayoutDash({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Dashboard layout∂</h1>
      {children}
    </section>
  );
}
