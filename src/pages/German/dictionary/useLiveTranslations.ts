import { useEffect, useState } from 'react'

import { getLiveDictionary } from 'api/dictionary/dictionary'
import { TranslationGrid } from './interfaces'

export const useLiveTranslations = () => {
  const [translations, setTranslations] = useState<TranslationGrid[]>([])

  useEffect(() => {
    const unSub = getLiveDictionary((doc: any) => {
      const tmp: TranslationGrid[] = []
      for (const german in doc.data()?.germanDictionary) {
        const translate = doc.data()?.germanDictionary[german].join(', ')
        tmp.push({
          id: german,
          germanWord: german,
          translate,
        })
      }
      setTranslations(tmp)
    })
    return () => unSub()
  }, [])

  return { translations }
}
