import CatalogLayout from '../../components/layouts/CatalogLayout'

export const metadata = {
  title: 'ККРИТ | Каталог',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CatalogLayout>{children}</CatalogLayout>
}