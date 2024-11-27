import { SignInViewPage } from '@/sections/signin/view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kamaania',
  description: ''
};

export default function Page() {
  return <SignInViewPage />;
}
