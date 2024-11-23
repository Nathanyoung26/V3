const categories = [
  {
    name: 'Bedtime',
    color: 'from-indigo-600 to-indigo-400',
    image: 'https://images.unsplash.com/photo-1566413365547-47adc5565c9b?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Educational',
    color: 'from-green-600 to-green-400',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Languages',
    color: 'from-yellow-600 to-yellow-400',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Lullabies',
    color: 'from-purple-600 to-purple-400',
    image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Playtime',
    color: 'from-pink-600 to-pink-400',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&auto=format&fit=crop&q=60'
  },
  {
    name: 'Nature',
    color: 'from-emerald-600 to-emerald-400',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&auto=format&fit=crop&q=60'
  }
];

export default function SearchCategories() {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-white mb-4">Browse All</h3>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`relative bg-gradient-to-br ${category.color} rounded-lg aspect-square cursor-pointer overflow-hidden group`}
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h4 className="absolute bottom-4 left-4 text-white font-bold text-2xl">{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}