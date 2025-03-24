export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return children;
  }

export function generateMetadata() {
  return {
    title: 'Uniranks Academics',
    description: 'Uniranks Academics is a platform that helps students find the best universities and courses for their needs.',
  }
} 