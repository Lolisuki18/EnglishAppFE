// Feature Component Example - Product Card
interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  price?: number;
}

export default function ProductCard({
  title,
  description,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      {price && (
        <div className="text-blue-600 font-bold text-xl">
          {price.toLocaleString()} VND
        </div>
      )}
    </div>
  );
}
