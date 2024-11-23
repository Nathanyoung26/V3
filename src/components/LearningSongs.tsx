const topics = [
  {
    title: 'Colors & Shapes',
    category: 'Educational • Interactive',
    color: 'from-blue-600/40 to-blue-400/40',
    image: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Animal Sounds',
    category: 'Nature • Learning',
    color: 'from-green-600/40 to-green-400/40',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Numbers Fun',
    category: 'Math • Games',
    color: 'from-yellow-600/40 to-yellow-400/40',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Body Parts',
    category: 'Health • Learning',
    color: 'from-red-600/40 to-red-400/40',
    image: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&auto=format&fit=crop&q=60'
  }
];

export default function LearningSongs() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">Learning Songs</h2>
      <div className="grid grid-cols-2 gap-4">
        {topics.map((topic) => (
          <div key={topic.title} className={`bg-gradient-to-r ${topic.color} rounded-lg p-4 hover:bg-opacity-80 transition-colors cursor-pointer`}>
            <img 
              src={topic.image} 
              alt={topic.title}
              className="aspect-video object-cover rounded-md mb-3"
            />
            <p className="font-medium text-white">{topic.title}</p>
            <p className="text-zinc-200 text-xs mt-1">{topic.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}