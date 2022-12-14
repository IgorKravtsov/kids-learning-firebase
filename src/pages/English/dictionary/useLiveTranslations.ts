import { useEffect, useState } from 'react'

import { getLiveDictionary } from 'api/dictionary/dictionary'
import { EnglishTranslationGrid } from './interfaces'

export const useLiveTranslations = () => {
  const [translations, setTranslations] = useState<EnglishTranslationGrid[]>([])

  useEffect(() => {
    const unSub = getLiveDictionary((doc: any) => {
      const tmp: EnglishTranslationGrid[] = []
      for (const eng in doc.data()?.dictionary) {
        const translate = doc.data()?.dictionary[eng].join(', ')
        tmp.push({
          id: eng,
          engWord: eng,
          translate,
        })
      }
      setTranslations(tmp)
    })
    return () => unSub()
  }, [])

  return { translations }
}
