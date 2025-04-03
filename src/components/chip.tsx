export default function Chip({ content }: { content: string }) {
    return (
        <div className="rounded-lg bg-primary px-3 py-1 text-primary-foreground mr-2 mb-2">
        {content}
        </div>
    )
}