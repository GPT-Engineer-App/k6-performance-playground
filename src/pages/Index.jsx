import { Dog } from "lucide-react";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Dog className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">All About Dogs</h1>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Man's Best Friend</h2>
          <p className="text-gray-600 mb-4">
            Dogs have been domesticated for thousands of years and are known for their loyalty, 
            companionship, and diverse breeds. They come in various sizes, shapes, and temperaments, 
            making them suitable for different lifestyles and purposes.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
            alt="Cute dog" 
            className="mx-auto object-cover w-full h-64 rounded-lg mb-4"
          />
          <p className="text-gray-600">
            Dogs are not just pets; they're family members, working animals, and even therapeutic 
            companions. Their intelligence and trainability make them invaluable in various fields, 
            from search and rescue to assistance for people with disabilities.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Popular Dog Breeds</h2>
          <ul className="list-disc pl-6">
            {popularBreeds.map((breed, index) => (
              <li key={index} className="text-gray-600 mb-2">{breed}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
