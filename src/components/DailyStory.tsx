const stories = [
  {
    title: 'The Friendly Dragon',
    description: 'Join Alex on a magical adventure with a dragon who loves to sing!',
    image: 'https://images.unsplash.com/photo-1599689018034-48e2ead82951?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Space Adventure',
    description: 'Blast off with Luna as she explores the stars and meets new friends!',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&auto=format&fit=crop&q=60'
  }
];

export default function DailyStory() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Story of the Day</h2>
      <div className="grid gap-4">
        {stories.map((story) => (
          <div key={story.title} className="bg-gradient-to-r from-purple-900/40 to-purple-600/40 rounded-lg p-4 hover:bg-purple-800/40 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-16 h-16 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-white">{story.title}</h3>
                <p className="text-zinc-400 text-sm">{story.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}