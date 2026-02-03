import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "We're Getting Married",
  description: "We're getting married! More details coming soon.",
};

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
