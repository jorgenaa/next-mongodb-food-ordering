import { ChangeEvent, FormEvent } from "react"

interface form {
   name?: string,
   email?: string,
   message?: string
}

type OnChangeHandlerEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>

type HandleChange = (event: OnChangeHandlerEvent) => void

type OnSubmittHandler = FormEvent

type SubmitHandlerFunc = (state: any, callback: any) => Promise<void>


export type { form, OnChangeHandlerEvent, OnSubmittHandler, SubmitHandlerFunc, HandleChange }

