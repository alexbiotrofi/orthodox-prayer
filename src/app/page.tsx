'use client';

import { useState, useEffect, useMemo } from 'react';
import { getTimeOfDay, getOrthodoxDay, getOctoechosTone } from '@/lib/orthodox-calendar';
import { getPrayerRule } from '@/lib/prayers';
import type { PrayerRule, Prayer } from '@/lib/prayers';
import type { OrthodoxDay, TimeOfDay } from '@/lib/orthodox-calendar';

const DURATION_OPTIONS = [5, 10, 15, 20, 30, 45, 60];

function OrnamentalDivider() {
  return <div className="ornament my-6 select-none">&#10059; &#10059; &#10059;</div>;
}

function PrayerCard({ prayer, index }: { prayer: Prayer; index: number }) {
  const typeLabel: Record<string, string> = {
    prayer: 'Prayer',
    psalm: 'Psalm',
    scripture: 'Scripture',
    troparion: 'Troparion',
    kontakion: 'Kontakion',
  };

  const typeColor: Record<string, string> = {
    prayer: 'bg-burgundy/10 text-burgundy',
    psalm: 'bg-blue-100 text-blue-800',
    scripture: 'bg-green-100 text-green-800',
    troparion: 'bg-gold/20 text-gold-dark',
    kontakion: 'bg-gold/20 text-gold-dark',
  };

  return (
    <div
      className="prayer-section fade-in mb-8"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-sans font-medium px-2 py-0.5 rounded-full ${typeColor[prayer.type] || 'bg-gray-100 text-gray-700'}`}>
          {typeLabel[prayer.type] || prayer.type}
        </span>
        <span className="text-xs text-text-muted font-sans">~{prayer.duration} min</span>
      </div>
      <h3 className="text-lg font-semibold text-gold-dark mb-2">{prayer.title}</h3>
      {prayer.rubric && (
        <p className="rubric text-sm mb-3">{prayer.rubric}</p>
      )}
      <div className="prayer-text text-base leading-relaxed whitespace-pre-line">
        {prayer.text}
      </div>
    </div>
  );
}

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [timezone, setTimezone] = useState<string>('');
  const [showPrayers, setShowPrayers] = useState(false);

  useEffect(() => {
    const d = new Date();
    setNow(d);
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const timeOfDay: TimeOfDay | null = useMemo(() => {
    if (!now) return null;
    return getTimeOfDay(now.getHours());
  }, [now]);

  const orthodoxDay: OrthodoxDay | null = useMemo(() => {
    if (!now) return null;
    return getOrthodoxDay(now);
  }, [now]);

  const tone = useMemo(() => {
    if (!now) return 1;
    return getOctoechosTone(now);
  }, [now]);

  const prayerRule: PrayerRule | null = useMemo(() => {
    if (!now || !selectedDuration || !timeOfDay || !orthodoxDay) return null;
    return getPrayerRule(timeOfDay.period, selectedDuration, orthodoxDay, now);
  }, [now, selectedDuration, timeOfDay, orthodoxDay]);

  const handleSelectDuration = (minutes: number) => {
    setSelectedDuration(minutes);
    setShowPrayers(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setShowPrayers(false);
    setSelectedDuration(null);
  };

  if (!now) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gold text-2xl orthodox-cross"></div>
      </div>
    );
  }

  const dayColorMap: Record<string, string> = {
    'red': 'text-red-700',
    'purple': 'text-purple-800',
    'green': 'text-green-700',
    'gold': 'text-gold-dark',
    'white': 'text-gray-600',
    'blue': 'text-blue-700',
  };

  // Prayer display view
  if (showPrayers && prayerRule && orthodoxDay && timeOfDay) {
    return (
      <main className="flex-1 max-w-2xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={handleBack}
            className="font-sans text-sm text-text-muted hover:text-gold-dark transition-colors mb-4 inline-flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            Back
          </button>
          <h1 className="text-2xl font-bold text-gold-dark mb-1">
            {timeOfDay.label} Prayers
          </h1>
          <p className="text-sm text-text-muted font-sans">
            {selectedDuration} minutes &middot; {orthodoxDay.name}
          </p>
        </div>

        <OrnamentalDivider />

        {/* Opening Prayers */}
        <div className="mb-6">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold mb-6">Opening Prayers</h2>
          {prayerRule.opening.map((prayer, i) => (
            <PrayerCard key={`opening-${i}`} prayer={prayer} index={i} />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Body */}
        <div className="mb-6">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold mb-6">
            {timeOfDay.label} Rule
          </h2>
          {prayerRule.body.map((prayer, i) => (
            <PrayerCard key={`body-${i}`} prayer={prayer} index={i + prayerRule.opening.length} />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Closing Prayers */}
        <div className="mb-6">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-gold mb-6">Closing</h2>
          {prayerRule.closing.map((prayer, i) => (
            <PrayerCard key={`closing-${i}`} prayer={prayer} index={i + prayerRule.opening.length + prayerRule.body.length} />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Footer */}
        <div className="text-center text-sm text-text-muted font-sans py-6">
          <p>Glory to God for all things.</p>
        </div>
      </main>
    );
  }

  // Selection view
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Cross and title */}
        <div className="mb-8">
          <div className="text-5xl text-gold mb-4 orthodox-cross"></div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Orthodox Prayer
          </h1>
          <p className="text-text-muted text-sm font-sans">
            Daily prayer rule for the faithful
          </p>
        </div>

        {/* Current info card */}
        {orthodoxDay && timeOfDay && (
          <div className="selection-bar rounded-xl p-6 mb-8 text-left">
            <div className="grid grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">Time</span>
                <span className="font-medium">{timeOfDay.label}</span>
                <span className="text-text-muted ml-1 text-xs">
                  {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">Date</span>
                <span className="font-medium text-xs">
                  {now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">Today</span>
                <span className={`font-medium ${dayColorMap[orthodoxDay.color] || 'text-foreground'}`}>
                  {orthodoxDay.name}
                </span>
                {orthodoxDay.description && (
                  <p className="text-xs text-text-muted mt-1">{orthodoxDay.description}</p>
                )}
              </div>
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">Tone</span>
                <span className="font-medium">{tone}</span>
              </div>
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">Timezone</span>
                <span className="font-medium text-xs">{timezone.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        )}

        {/* Duration selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-1">How much time do you have?</h2>
          <p className="text-sm text-text-muted font-sans mb-6">
            Select your prayer time and receive a tailored rule
          </p>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
            {DURATION_OPTIONS.map(d => (
              <button
                key={d}
                onClick={() => handleSelectDuration(d)}
                className="duration-btn rounded-xl border border-gold-light bg-cream px-3 py-4 text-center font-sans font-medium text-foreground hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <span className="block text-xl font-bold text-gold-dark">{d}</span>
                <span className="block text-xs text-text-muted mt-0.5">min</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-text-muted font-sans leading-relaxed max-w-sm mx-auto">
          Prayers are selected based on the time of day, the Orthodox liturgical calendar,
          and the duration you choose. Content includes prayers, psalms, and scripture
          from the Orthodox tradition.
        </p>
      </div>
    </main>
  );
}
