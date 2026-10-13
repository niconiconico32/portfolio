import { useI18n, type Lang } from '@/i18n'

const options: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n()

  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em]">
      {options.map((option, i) => (
        <span key={option.value} className="flex items-center gap-3">
          {i > 0 && <span className="text-[#F5F1E8]/20">/</span>}
          <button
            type="button"
            onClick={() => setLang(option.value)}
            className={`transition-opacity ${
              lang === option.value ? 'opacity-100' : 'opacity-40 hover:opacity-70'
            }`}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  )
}
