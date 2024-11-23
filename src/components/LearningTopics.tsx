const topics = [
  {
    title: 'Language Learning',
    desc: 'Learn new words in multiple languages',
    color: 'from-blue-600/40 to-blue-400/40',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Numbers & Counting',
    desc: 'Fun with numbers and basic math',
    color: 'from-green-600/40 to-green-400/40',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Alphabet Songs',
    desc: 'Learn letters through music',
    color: 'from-yellow-600/40 to-yellow-400/40',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&auto=format&fit=crop&q=60'
  },
  {
    title: 'Animals & Sounds',
    desc: 'Discover animal sounds and facts',
    color: 'from-red-600/40 to-red-400/40',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop&q=60'
  }
];

export default function LearningTopics() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {topics.map((topic) => (
        <div key={topic.title} className={`bg-gradient-to-br ${topic.color} rounded-lg overflow-hidden cursor-pointer group`}>
          <img 
            src={topic.image} 
            alt={topic.title}
            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="font-semibold text-white">{topic.title}</h3>
            <p className="text-zinc-200 text-sm mt-1">{topic.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}