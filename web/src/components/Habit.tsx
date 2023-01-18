interface HabitProps {
    completed: number;
}

export function Habit (props : HabitProps) {
    return (
        <div className="bg-background w-10 text-white rounded m-2 flex items-center justify-center cursor-pointer">{props.completed}</div>
    )
}