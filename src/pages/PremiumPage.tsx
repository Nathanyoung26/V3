import { SparklesIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      { text: 'Limited Song Selection (50 songs)', included: true },
      { text: 'Basic Stories', included: true },
      { text: 'Ad-Supported Listening', included: true },
      { text: 'Single Device Streaming', included: true },
      { text: 'Basic Learning Content', included: true },
      { text: 'Custom Story Personalization', included: false },
      { text: 'Interactive Nightlight Visualizer', included: false },
      { text: 'Family Voice Recordings', included: false },
      { text: 'Offline Mode', included: false },
      { text: 'Multi-Device Access', included: false }
    ]
  },
  {
    name: 'Premium Plus',
    price: '$11.99',
    period: 'month',
    features: [
      { text: 'Unlimited Song Access (500+ songs)', included: true },
      { text: 'Ad-Free Listening', included: true },
      { text: 'Custom Story Personalization', included: true },
      { text: 'Interactive Nightlight Visualizer', included: true },
      { text: 'Family Voice Recordings', included: true },
      { text: 'Exclusive Monthly Content', included: true },
      { text: 'Growth Tracker', included: true },
      { text: 'Single Device Access', included: true },
      { text: 'Basic Learning Content', included: true },
      { text: 'Multi-Device Access', included: false }
    ]
  },
  {
    name: 'Family Premium',
    price: '$13.99',
    period: 'month',
    popular: true,
    features: [
      { text: 'All Premium Plus Features', included: true },
      { text: 'Multi-Device Access', included: true },
      { text: 'Offline Mode', included: true },
      { text: 'Advanced Parenting Resources', included: true },
      { text: 'Interactive Milestone Content', included: true },
      { text: 'Expert Webinars Access', included: true },
      { text: 'Birthday Playlists', included: true },
      { text: 'Customized Sibling Profiles', included: true },
      { text: 'Priority Customer Support', included: true },
      { text: 'Early Access to New Features', included: true }
    ]
  }
];

export default function PremiumPage() {
  return (
    <div className="p-4 pb-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Upgrade Your Experience</h1>
        <p className="text-zinc-400">Choose the perfect plan for your family</p>
      </div>

      <div className="space-y-4">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`rounded-xl p-6 ${
              plan.popular 
                ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20' 
                : 'bg-white/5'
            }`}
          >
            {plan.popular && (
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              <span className="text-zinc-400">/{plan.period}</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">{plan.name}</h2>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-2 text-zinc-300">
                  {feature.included ? (
                    <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <XMarkIcon className="w-5 h-5 text-zinc-600 flex-shrink-0" />
                  )}
                  <span className={feature.included ? '' : 'text-zinc-600'}>{feature.text}</span>
                </li>
              ))}
            </ul>
            {plan.name !== 'Free' && (
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <SparklesIcon className="w-5 h-5" />
                Get {plan.name}
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-zinc-400 text-sm mt-6">
        Premium plans include a 7-day free trial. Cancel anytime.
      </p>
    </div>
  );
}