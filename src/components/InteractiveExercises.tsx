import { MicrophoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

interface ABCActivity {
  type: 'abc';
  title: string;
  description: string;
  progress: number;
  letter: string;
  words: string[];
}

interface SentenceActivity {
  type: 'sentence';
  title: string;
  description: string;
  sentences: string[];
}

type Activity = ABCActivity | SentenceActivity;

interface ExerciseSection {
  category: string;
  activities: Activity[];
}

const exercises: ExerciseSection[] = [
  {
    category: 'ABC Learning',
    activities: [
      {
        type: 'abc',
        title: 'Letter Recognition',
        description: 'Repeat the letter sound',
        progress: 80,
        letter: 'A',
        words: ['Apple', 'Airplane', 'Ant']
      },
      {
        type: 'abc',
        title: 'Word Building',
        description: 'Practice simple words',
        progress: 60,
        letter: 'B',
        words: ['Ball', 'Bear', 'Bird']
      }
    ]
  },
  {
    category: 'Sentence Practice',
    activities: [
      {
        type: 'sentence',
        title: 'Simple Greetings',
        description: 'Repeat after me',
        sentences: ['Hello, how are you?', 'My name is...', 'Nice to meet you!']
      },
      {
        type: 'sentence',
        title: 'Daily Routines',
        description: 'Practice everyday phrases',
        sentences: ['Time to wake up!', "Let's brush our teeth", 'Ready for breakfast']
      }
    ]
  }
];

export default function InteractiveExercises() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Interactive Learning</h2>
      
      {exercises.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg text-white mb-3">{section.category}</h3>
          <div className="grid gap-4">
            {section.category === 'ABC Learning' ? (
              section.activities.map((activity, idx) => (
                activity.type === 'abc' && (
                  <div key={idx} className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">{activity.title}</h4>
                        <p className="text-zinc-400 text-sm">{activity.description}</p>
                      </div>
                      <span className="text-4xl font-bold text-purple-400">
                        {activity.letter}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {activity.words.map((word, widx) => (
                        <div key={widx} className="flex items-center justify-between bg-zinc-700/30 rounded-lg p-2">
                          <span className="text-white">{word}</span>
                          <button className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-full p-2">
                            <MicrophoneIcon className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-zinc-400">Progress</span>
                        <span className="text-white">{activity.progress}%</span>
                      </div>
                      <div className="bg-zinc-700/30 rounded-full h-2">
                        <div 
                          className="bg-purple-500 rounded-full h-full transition-all duration-300"
                          style={{ width: `${activity.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )
              ))
            ) : (
              section.activities.map((activity, idx) => (
                activity.type === 'sentence' && (
                  <div key={idx} className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="mb-3">
                      <h4 className="text-white font-medium">{activity.title}</h4>
                      <p className="text-zinc-400 text-sm">{activity.description}</p>
                    </div>
                    <div className="space-y-2">
                      {activity.sentences.map((sentence, sidx) => (
                        <div key={sidx} className="flex items-center justify-between bg-zinc-700/30 rounded-lg p-3">
                          <span className="text-white">{sentence}</span>
                          <div className="flex items-center gap-2">
                            <button className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-full p-2">
                              <MicrophoneIcon className="w-4 h-4 text-white" />
                            </button>
                            <CheckCircleIcon className="w-6 h-6 text-green-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))
            )}
          </div>
        </div>
      ))}
    </section>
  );
}