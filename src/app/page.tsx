'use client';

import { useState, useEffect, useMemo } from 'react';
import { getTimeOfDay, getOrthodoxDay } from '@/lib/orthodox-calendar';
import { getPrayerRule } from '@/lib/prayers';
import type { PrayerRule, Prayer, Lang } from '@/lib/prayers';
import type { OrthodoxDay, TimeOfDay } from '@/lib/orthodox-calendar';

const DURATION_OPTIONS = [5, 10, 15, 20, 30, 45, 60];

const UI_TEXT: Record<Lang, {
  title: string;
  subtitle: string;
  time: string;
  date: string;
  today: string;
  timezone: string;
  question: string;
  questionSub: string;
  min: string;
  footer: string;
  footerNote: string;
  back: string;
  prayers: string;
  opening: string;
  rule: string;
  closing: string;
  glory: string;
}> = {
  en: {
    title: 'Orthodox Prayer',
    subtitle: 'Daily prayer rule for the faithful',
    time: 'Time',
    date: 'Date',
    today: 'Today',
    timezone: 'Timezone',
    question: 'How much time do you have?',
    questionSub: 'Select your prayer time and receive a tailored rule',
    min: 'min',
    footer: 'Prayers are selected based on the time of day, the Orthodox liturgical calendar, and the duration you choose.',
    footerNote: 'Glory to God for all things.',
    back: 'Back',
    prayers: 'Prayers',
    opening: 'Opening Prayers',
    rule: 'Rule',
    closing: 'Closing',
    glory: 'Glory to God for all things.',
  },
  el: {
    title: 'Ορθόδοξη Προσευχή',
    subtitle: 'Ημερήσιος κανόνας προσευχής',
    time: 'Ώρα',
    date: 'Ημερομηνία',
    today: 'Σήμερα',
    timezone: 'Ζώνη Ώρας',
    question: 'Πόσο χρόνο έχεις;',
    questionSub: 'Επίλεξε τον χρόνο προσευχής σου',
    min: 'λεπ',
    footer: 'Οι προσευχές επιλέγονται βάσει της ώρας, του Ορθοδόξου λειτουργικού ημερολογίου και της διάρκειας που επιλέγεις.',
    footerNote: 'Δόξα τω Θεώ πάντων ένεκεν.',
    back: 'Πίσω',
    prayers: 'Προσευχές',
    opening: 'Εναρκτήριες Προσευχές',
    rule: 'Κανόνας',
    closing: 'Απόλυση',
    glory: 'Δόξα τω Θεώ πάντων ένεκεν.',
  },
};

const TIME_LABELS: Record<Lang, Record<string, string>> = {
  en: { morning: 'Morning', midday: 'Midday', afternoon: 'Afternoon', evening: 'Evening', night: 'Night' },
  el: { morning: 'Πρωινές', midday: 'Μεσημβρινές', afternoon: 'Απογευματινές', evening: 'Εσπερινές', night: 'Βραδινές' },
};

function OrnamentalDivider() {
  return <div className="ornament my-6 select-none">&#10059; &#10059; &#10059;</div>;
}

function LanguageSelect({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <select
      value={lang}
      onChange={(e) => onChange(e.target.value as Lang)}
      className="font-sans text-sm bg-surface border border-surface-border rounded-lg px-3 py-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
    >
      <option value="en">English</option>
      <option value="el">Ελληνικά</option>
    </select>
  );
}

function PrayerCard({ prayer, index, lang }: { prayer: Prayer; index: number; lang: Lang }) {
  const typeLabel: Record<string, Record<Lang, string>> = {
    psalm: { en: 'Psalm', el: 'Ψαλμός' },
    scripture: { en: 'Scripture', el: 'Γραφή' },
    troparion: { en: 'Troparion', el: 'Ἀπολυτίκιον' },
    kontakion: { en: 'Kontakion', el: 'Κοντάκιον' },
  };

  const showBadge = prayer.type !== 'prayer';

  return (
    <div
      className="prayer-section fade-in mb-8"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {showBadge && typeLabel[prayer.type] && (
        <div className="mb-3">
          <span className="text-xs font-sans font-medium px-2 py-0.5 rounded-full bg-white/10 text-accent-dim">
            {typeLabel[prayer.type][lang]}
          </span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-accent mb-2">{prayer.title[lang]}</h3>
      {prayer.rubric && (
        <p className="rubric text-sm mb-3">{prayer.rubric[lang]}</p>
      )}
      <div className="prayer-text text-base leading-relaxed whitespace-pre-line text-foreground">
        {prayer.text[lang]}
      </div>
    </div>
  );
}

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [timezone, setTimezone] = useState<string>('');
  const [showPrayers, setShowPrayers] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const d = new Date();
    setNow(d);
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const t = UI_TEXT[lang];

  const timeOfDay: TimeOfDay | null = useMemo(() => {
    if (!now) return null;
    return getTimeOfDay(now.getHours());
  }, [now]);

  const orthodoxDay: OrthodoxDay | null = useMemo(() => {
    if (!now) return null;
    return getOrthodoxDay(now);
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
        <div className="text-accent-dim text-2xl orthodox-cross"></div>
      </div>
    );
  }

  const timeLabel = timeOfDay ? TIME_LABELS[lang][timeOfDay.period] : '';

  // Prayer display view
  if (showPrayers && prayerRule && orthodoxDay && timeOfDay) {
    return (
      <main className="flex-1 max-w-2xl mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <button
            onClick={handleBack}
            className="font-sans text-sm text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            {t.back}
          </button>
          <LanguageSelect lang={lang} onChange={setLang} />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-accent mb-1">
            {timeLabel} {t.prayers}
          </h1>
          <p className="text-sm text-text-muted font-sans">
            {selectedDuration} {t.min} &middot; {orthodoxDay.name}
          </p>
        </div>

        <OrnamentalDivider />

        {/* Opening Prayers */}
        <div className="mb-6">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-accent-dim mb-6">{t.opening}</h2>
          {prayerRule.opening.map((prayer, i) => (
            <PrayerCard key={`opening-${i}`} prayer={prayer} index={i} lang={lang} />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Body */}
        <div className="mb-6">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-accent-dim mb-6">
            {timeLabel} {t.rule}
          </h2>
          {prayerRule.body.map((prayer, i) => (
            <PrayerCard key={`body-${i}`} prayer={prayer} index={i + prayerRule.opening.length} lang={lang} />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Closing Prayers */}
        <div className="mb-6">
          <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-accent-dim mb-6">{t.closing}</h2>
          {prayerRule.closing.map((prayer, i) => (
            <PrayerCard key={`closing-${i}`} prayer={prayer} index={i + prayerRule.opening.length + prayerRule.body.length} lang={lang} />
          ))}
        </div>

        <OrnamentalDivider />

        {/* Footer */}
        <div className="text-center text-sm text-text-muted font-sans py-6">
          <p>{t.glory}</p>
        </div>
      </main>
    );
  }

  // Selection view
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Language selector */}
        <div className="flex justify-end mb-4">
          <LanguageSelect lang={lang} onChange={setLang} />
        </div>

        {/* Cross and title */}
        <div className="mb-8">
          <div className="text-5xl text-accent-dim mb-4 orthodox-cross"></div>
          <h1 className="text-3xl font-bold text-accent mb-2">
            {t.title}
          </h1>
          <p className="text-text-muted text-sm font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Current info card */}
        {orthodoxDay && timeOfDay && (
          <div className="selection-bar rounded-xl p-6 mb-8 text-left">
            <div className="grid grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">{t.time}</span>
                <span className="font-medium text-foreground">{TIME_LABELS[lang][timeOfDay.period]}</span>
                <span className="text-text-muted ml-1 text-xs">
                  {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">{t.date}</span>
                <span className="font-medium text-foreground text-xs">
                  {now.toLocaleDateString(lang === 'el' ? 'el-GR' : undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">{t.today}</span>
                <span className="font-medium text-accent">
                  {orthodoxDay.name}
                </span>
                {orthodoxDay.description && (
                  <p className="text-xs text-text-muted mt-1">{orthodoxDay.description}</p>
                )}
              </div>
              <div>
                <span className="text-text-muted block text-xs uppercase tracking-wider mb-1">{t.timezone}</span>
                <span className="font-medium text-foreground text-xs">{timezone.replace(/_/g, ' ')}</span>
              </div>
            </div>
          </div>
        )}

        {/* Duration selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-accent mb-1">{t.question}</h2>
          <p className="text-sm text-text-muted font-sans mb-6">
            {t.questionSub}
          </p>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
            {DURATION_OPTIONS.map(d => (
              <button
                key={d}
                onClick={() => handleSelectDuration(d)}
                className="duration-btn rounded-xl border border-surface-border bg-surface px-3 py-4 text-center font-sans font-medium text-foreground hover:border-accent-dim focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <span className="block text-xl font-bold text-accent">{d}</span>
                <span className="block text-xs text-text-muted mt-0.5">{t.min}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-text-muted font-sans leading-relaxed max-w-sm mx-auto">
          {t.footer}
        </p>
      </div>
    </main>
  );
}
