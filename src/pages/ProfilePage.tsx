import { ChartBarIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

const stats = [
  { label: 'Learning Minutes', value: '320', change: '+12%' },
  { label: 'Songs Learned', value: '24', change: '+3' },
  { label: 'Stories Read', value: '15', change: '+2' },
  { label: 'Languages Explored', value: '3', change: 'New!' }
];

const achievements = [
  { name: 'Early Bird', description: '7-day morning routine streak', progress: 80 },
  { name: 'Word Wizard', description: 'Learned 50 new words', progress: 65 },
  { name: 'Melody Master', description: 'Completed 10 songs', progress: 100 }
];

const recentActivity = [
  { type: 'song', name: 'ABC Song', time: '2h ago' },
  { type: 'story', name: 'The Friendly Dragon', time: '5h ago' },
  { type: 'achievement', name: 'Completed Daily Goal', time: 'Today' }
];

export default function ProfilePage() {
  return (
    <div className="p-4 pb-20">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&auto=format&fit=crop&q=60" 
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-purple-500"
        />
        <div>
          <h1 className="text-2xl font-bold text-white">Sarah Young</h1>
          <p className="text-zinc-400">Age: 4 years</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">
              Free Plan
            </span>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <SparklesIcon className="w-4 h-4" />
              Upgrade
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 rounded-lg p-3">
            <p className="text-zinc-400 text-xs">{stat.label}</p>
            <p className="text-white text-xl font-bold">{stat.value}</p>
            <p className="text-green-400 text-xs">{stat.change}</p>
          </div>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-white font-semibold mb-4">Achievements</h2>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.name} className="bg-white/5 rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="text-white font-medium">{achievement.name}</h3>
                  <p className="text-zinc-400 text-sm">{achievement.description}</p>
                </div>
                <ChartBarIcon className="w-5 h-5 text-purple-400" />
              </div>
              <div className="bg-white/10 rounded-full h-2">
                <div 
                  className="bg-purple-500 rounded-full h-full transition-all duration-300"
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-white font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-2">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-zinc-400" />
                <div>
                  <p className="text-white">{activity.name}</p>
                  <p className="text-zinc-400 text-sm">{activity.type}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm">{activity.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}