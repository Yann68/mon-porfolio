export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-5 pb-5 sm:px-10 md:px-20 lg:px-40">{children}</div>;
}
