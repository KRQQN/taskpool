'use client'
import { useFormStatus } from "react-dom"
import { Spinner } from "../Spinner"

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button className="bg-lightRed relative w-2/4 rounded-full self-center">{pending? <Spinner/> : 'Submit'}</button>
    )
}