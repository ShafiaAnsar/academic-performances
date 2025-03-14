
interface NicheTagProps {
  name: string
  href: string
  isBadge?: boolean
}

export default function NicheTag({ name, href, isBadge }: NicheTagProps) {
  if (isBadge) {
    return (
      <span className="text-sm text-gray-500">
        {name}
      </span>
    )
  }

  return (
    <a
      href={href}
      className="rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
    >
      {name}
    </a>
  )
}

