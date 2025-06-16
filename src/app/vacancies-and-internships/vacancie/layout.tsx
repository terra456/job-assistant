export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Импортируемый компонент</div>
      <div>{children}</div>
    </div>
  );
}