import { useState } from 'react';
import { MapPin, Compass, Camera, Sparkles, ExternalLink } from 'lucide-react';

interface Landmark {
  id: string;
  name: string;
  nepaliName: string;
  category: string;
  distance: string;
  summary: string;
  facts: string[];
  bestTime: string;
}

const landmarks: Landmark[] = [
  {
    id: 'shuklaphanta',
    name: 'Shuklaphanta National Park',
    nepaliName: 'शुक्लाफाँटा राष्ट्रिय निकुञ्ज',
    category: 'Wildlife Sanctuary',
    distance: '8 km from Bhimdatt centre',
    summary: 'Home to the world\'s largest herd of swamp deer (barasingha), wild elephants, Bengal tigers, and sprawling grassland savannas.',
    facts: [
      'Over 2,000+ swamp deer roaming vast open grasslands',
      'Contains 450+ bird species including Bengal florican',
      'Covers 305 sq. km of pristine terai forest and lakes (Rani Tal)'
    ],
    bestTime: 'October to April'
  },
  {
    id: 'dodhara',
    name: 'Dodhara Chandani Suspension Bridge',
    nepaliName: 'दोधारा चाँदनी झोलुङ्गे पुल',
    category: 'Engineering & Landmark',
    distance: '14 km southwest of Bhimdatt',
    summary: 'One of the longest multi-span pedestrian suspension bridges in Asia, spanning 1,452.96 meters across the mighty Mahakali River.',
    facts: [
      'Total length of 1,452.96 meters with four interconnected spans',
      'Connects the isolated peninsula of Dodhara-Chandani to mainland Nepal',
      'Iconic sunset panoramic viewpoint over the Mahakali'
    ],
    bestTime: 'All year round (Sunsets especially)'
  },
  {
    id: 'mahakali',
    name: 'Mahakali River & Sharada Barrage',
    nepaliName: 'महाकाली नदी र शारदा ब्यारेज',
    category: 'Border & Waterway',
    distance: '4 km from Bhimdatt',
    summary: 'Historic transnational barrage and scenic riverbank embankment where locals gather for evening breezes and riverside strolls.',
    facts: [
      'Built in 1928, serving as a historic regional connection point',
      'Scenic embankment with vibrant evening tea stalls and local street food',
      'Natural border between Western Nepal and Uttarakhand, India'
    ],
    bestTime: 'Evening (4:30 PM - 7:00 PM)'
  },
  {
    id: 'bedkot',
    name: 'Bedkot Lake (Bedkot Tal)',
    nepaliName: 'बेदकोट ताल',
    category: 'Pilgrimage & Nature',
    distance: '20 km north-east of Bhimdatt',
    summary: 'A tranquil sacred lake tucked against the foothills of the Chure hills, surrounded by dense sal woodlands and an ancient temple.',
    facts: [
      'Elevated at the base of the Churia mountain range',
      'Known for peaceful boating and scenic religious pilgrimage festivals',
      'Ideal weekend cycling and nature trekking destination'
    ],
    bestTime: 'Autumn and Spring months'
  }
];

export function TourismGuide() {
  const [selectedId, setSelectedId] = useState(landmarks[0].id);
  const activeLandmark = landmarks.find((l) => l.id === selectedId) || landmarks[0];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Bhimdatt & Kanchanpur Showcase</h4>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Interactive regional guide designed by Jagdish highlighting his hometown
          </p>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 self-start sm:self-auto">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Sudurpashchim Province, Nepal</span>
        </div>
      </div>

      {/* Segmented landmark picker */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
        {landmarks.map((landmark) => {
          const isSelected = landmark.id === selectedId;
          return (
            <button
              key={landmark.id}
              onClick={() => setSelectedId(landmark.id)}
              className={`p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {landmark.category}
              </div>
              <div className="text-xs font-semibold truncate mt-0.5">{landmark.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Landmark Card */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700/60">
          <div>
            <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {activeLandmark.nepaliName}
            </div>
            <h5 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {activeLandmark.name}
            </h5>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
              <span>{activeLandmark.category}</span>
              <span aria-hidden="true">·</span>
              <span>{activeLandmark.distance}</span>
            </div>
          </div>
          <div className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2.5 py-1 text-slate-600 dark:text-slate-300 shrink-0 self-start">
            Best time: <strong className="text-slate-900 dark:text-slate-100">{activeLandmark.bestTime}</strong>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 mt-3">
          {activeLandmark.summary}
        </p>

        <div className="mt-4">
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Notable Highlights & Facts
          </div>
          <ul className="space-y-1.5">
            {activeLandmark.facts.map((fact, idx) => (
              <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
