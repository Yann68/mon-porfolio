export default function layoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="h-full mt-14 mb-4">{children}</div>
    </div>
  );
}
