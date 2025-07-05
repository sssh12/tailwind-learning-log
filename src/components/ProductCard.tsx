"use client";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  onAddToCart?: () => void;
}

export function ProductCard({
  imageUrl,
  title,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 w-full max-w-xs flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h4 className="font-semibold text-gray-700 mb-1">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-bold">{price}</span>
        <button
          type="button"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          onClick={onAddToCart}
        >
          장바구니
        </button>
      </div>
    </div>
  );
}
