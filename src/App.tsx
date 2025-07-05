import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <Button>기본 버튼</Button>
      <Button disabled>비활성 버튼</Button>
      <div className="flex gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex gap-2">
        <Button color="blue">Blue</Button>
        <Button color="gray">Gray</Button>
        <Button color="red">Red</Button>
        <Button color="green">Green</Button>
      </div>
    </div>
  );
}

export default App;
