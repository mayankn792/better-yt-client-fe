import '@/app/ui/global.css';
import SideNav from '@/app/ui/dashboard/sidenav';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="basis-1/12">01</div>
      <div className="basis-11/12">{children}</div>
    </div>
  );
}
