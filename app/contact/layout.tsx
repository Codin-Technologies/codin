import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Codin Technologies',
  description:
    'Get in touch with Codin Technologies. Contact our team in Dar es Salaam, Tanzania, to discuss your technology needs and digital transformation goals.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

