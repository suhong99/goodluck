export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="WH100"
      style={{
        backgroundColor: 'rgb(2, 22, 49)',
      }}
    >
      {children}
    </section>
  );
}
