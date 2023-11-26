export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 md:pt-20 px-5 pb-5 sm:px-10 md:px-20 lg:px-40">
      {children}
    </div>
  );
}
