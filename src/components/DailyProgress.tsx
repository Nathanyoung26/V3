import { TrophyIcon } from '@heroicons/react/24/solid';

export default function DailyProgress() {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Daily Progress</h2>
            <p className="text-white/70">Keep up the great work!</p>
          </div>
          <div className="bg-white/20 rounded-full p-3">
            <TrophyIcon className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {['Words', 'Songs', 'Stories', 'Games'].map((activity) => (
            <div key={activity} className="bg-black/20 rounded-lg p-2 text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-xs text-white/70">{activity}</div>
            </div>
          ))}
        </div>
        <div className="bg-black/20 rounded-lg p-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-white/70">Daily Goal</span>
            <span className="text-white">15/20 activities</span>
          </div>
          <div className="bg-black/20 rounded-full h-2">
            <div className="bg-green-500 rounded-full h-full w-3/4 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}