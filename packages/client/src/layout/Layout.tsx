import AppRouter from "./AppRouter.tsx";

const Layout = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1">
        <main className="flex-1 w-full">
          <AppRouter />
        </main>
      </div>
    </div>
  );
};

export default Layout;