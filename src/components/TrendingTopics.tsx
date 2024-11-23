const topics = [
  {
    tag: '#BedtimeRoutine',
    posts: 1234,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&auto=format&fit=crop&q=60'
  },
  {
    tag: '#ToddlerMusic',
    posts: 856,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&auto=format&fit=crop&q=60'
  },
  {
    tag: '#ParentingTips',
    posts: 567,
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&auto=format&fit=crop&q=60'
  }
];

export default function TrendingTopics() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Trending Topics</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {topics.map((topic) => (
          <div 
            key={topic.tag}
            className="flex-shrink-0 relative w-60 h-32 rounded-lg overflow-hidden group cursor-pointer"
          >
            <img 
              src={topic.image} 
              alt={topic.tag}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="absolute bottom-3 left-3">
              <p className="text-white font-semibold">{topic.tag}</p>
              <p className="text-zinc-300 text-sm">{topic.posts} posts</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}