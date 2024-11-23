import { SpeakerWaveIcon, PlayIcon } from '@heroicons/react/24/solid';

const languages = [
  {
    id: 1,
    name: 'Spanish',
    lessons: [
      { phrase: 'Hello', translation: 'Hola', audio: '/audio/es/hello.mp3' },
      { phrase: 'Good morning', translation: 'Buenos días', audio: '/audio/es/morning.mp3' }
    ],
    color: 'from-yellow-600/40 to-yellow-400/40',
    flag: '🇪🇸'
  },
  {
    id: 2,
    name: 'French',
    lessons: [
      { phrase: 'Hello', translation: 'Bonjour', audio: '/audio/fr/hello.mp3' },
      { phrase: 'Good morning', translation: 'Bon matin', audio: '/audio/fr/morning.mp3' }
    ],
    color: 'from-blue-600/40 to-blue-400/40',
    flag: '🇫🇷'
  },
  {
    id: 3,
    name: 'Mandarin',
    lessons: [
      { phrase: 'Hello', translation: 'Nǐ hǎo', audio: '/audio/zh/hello.mp3' },
      { phrase: 'Good morning', translation: 'Zǎo ān', audio: '/audio/zh/morning.mp3' }
    ],
    color: 'from-red-600/40 to-red-400/40',
    flag: '🇨🇳'
  }
];

export default function LanguageLessons() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">Language Learning</h2>
      <div className="grid gap-4">
        {languages.map((language) => (
          <div 
            key={language.id}
            className={`bg-gradient-to-r ${language.color} rounded-lg p-4`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{language.flag}</span>
                <h3 className="font-semibold text-white">{language.name}</h3>
              </div>
              <button className="bg-white/20 hover:bg-white/30 transition-colors rounded-full p-2">
                <PlayIcon className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="space-y-3">
              {language.lessons.map((lesson, index) => (
                <div 
                  key={index}
                  className="bg-black/20 rounded-lg p-3 flex items-center justify-between"
                >
                  <div>
                    <p className="text-white text-sm">{lesson.phrase}</p>
                    <p className="text-white/70 text-xs">{lesson.translation}</p>
                  </div>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <SpeakerWaveIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}