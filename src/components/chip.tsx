export default function Chip({ content }: { content: string }) {
    return (
        <div className="rounded-lg bg-primary px-3 py-1 text-primary-foreground m-2">
        {content}
        </div>
    )
}