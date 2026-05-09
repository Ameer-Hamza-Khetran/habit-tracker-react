import { useState, type SubmitEvent } from "react"
import { Button } from "./Button"

type HabitFormProps = {
  addHabit: (name: string) => void
} 

function HabitForm({ addHabit }: HabitFormProps) {
  const [habitName, setHabitName] = useState("")
  
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()

    if (habitName.trim() === "") return
    setHabitName("")
    addHabit(habitName)

    console.log(habitName)
  }
  
  return <form className="flex gap-2" onSubmit={handleSubmit}>
    <input 
      className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      placeholder="New habit..."
      value={habitName}
      onChange={e => setHabitName(e.target.value)}
    />
    <Button
      disabled={habitName.trim() === ""} 
      className="rounded-lg px-4 py-2 font-medium">Add Habit
    </Button>
  </form>
}

export { HabitForm }