import Button from "./components/Button";
import { InfoCard } from "./components/InfoCard";
import { FaBolt } from "react-icons/fa6";
import { ProfileCard } from "./components/ProfileCard";
import { ProductCard } from "./components/ProductCard";

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
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100">
        <InfoCard
          title="빠른 빌드"
          description="Vite와 Tailwind로 즉시 반영되는 개발 환경을 경험해보세요."
          icon={<FaBolt />}
        />
      </main>
      <ProfileCard
        name="홍길동"
        job="프론트엔드 개발자"
        avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProductCard
        imageUrl="https://source.unsplash.com/random/300x200?product"
        title="랜덤 상품"
        price="\29,000"
        onAddToCart={() => alert("장바구니 담김!")}
      />
    </div>
  );
}

export default App;
