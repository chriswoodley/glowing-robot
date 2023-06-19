import Header from "./header";

function GlobalLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="layout">
          {children}
        </div>
      </main>
    </>
  );
}

export default GlobalLayout;
