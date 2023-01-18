interface HabitProps {
    completed: number;
}

export function Habit (props : HabitProps) {
    return (
        <div className="w-10 bg-purple-900 text-white rounded m-2 flex items-center justify-center cursor-pointer">{props.completed}</div>
    )
}