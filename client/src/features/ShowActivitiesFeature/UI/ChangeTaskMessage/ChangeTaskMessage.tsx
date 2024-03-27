export default function ChangeTaskMessage({from, to, task_name}: {from: string, to: string, task_name: string}) {
    return (
        <h2>You change "{}" props at "{task_name}" task from "{from}" list to "{to}"</h2>
    )
}