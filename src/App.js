import { Card, Header, SearchBar } from "./shared";

function App() {
  return (
    <main className="max-w-screen-tablet flex flex-col gap-5 m-auto justify-center items-center">
      <Header />
      <SearchBar />
      <Card />
    </main>
  );
}

export default App;
