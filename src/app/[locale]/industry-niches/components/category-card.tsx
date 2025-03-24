import NicheTag from "./niche-tag"

interface TagProps {
  name: string
  href: string
  badge?: string
  isBadge?: boolean
}

interface CategoryCardProps {
  icon: string
  title: string
  bgColor: string
  tags: TagProps[]
}

export default function CategoryCard({ icon, title, bgColor, tags }: CategoryCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="flex items-center gap-4 p-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${bgColor}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 p-4">
        {tags.map((tag, index) => (
          <NicheTag 
            key={index} 
            name={tag.name} 
            href={tag.href} 
            isBadge={tag.isBadge}
          />
        ))}
      </div>
    </div>
  )
}

