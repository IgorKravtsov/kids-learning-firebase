import React, { useState } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'
import Grid from '@mui/material/Grid'

import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'

import FormInput from 'components/formInput/FormInput'

import { AddWordForm } from 'pages/German/dictionary/interfaces'
import { addTranslations } from 'api/dictionary/german/dictionary'

interface FormProps {
  methods: UseFormReturn<AddWordForm>
}

export const Form: React.FC<FormProps> = ({ methods }) => {
  const { handleSubmit, register, setValue } = methods

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: AddWordForm) => {
    const { translateWord, germanWord } = data

    if (!translateWord || !germanWord) return
    const translations = translateWord.split(',').map(t => t.toLowerCase().trim())

    setIsLoading(true)
    await addTranslations({
      germanWord,
      translations,
    })
    setValue('germanWord', '')
    setValue('translateWord', '')
    setIsLoading(false)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item md={4} sx={{ mr: 1, mt: 1 }}>
            <FormInput {...register('germanWord')} label={'Німецьке слово'} />
          </Grid>
          <Grid item md={4} sx={{ mr: 1, mt: 1 }}>
            <FormInput {...register('translateWord')} label={'Переклад'} />
          </Grid>
          <Grid item md={2} xs={8} sx={{ mt: 1 }}>
            <LoadingButton loading={isLoading} loadingPosition='end' type='submit' color='primary' variant='contained' fullWidth endIcon={<SendIcon />}>
              Додати
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  )
}
