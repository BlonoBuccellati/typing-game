'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <>
      <div>
        <Link href='/game'>
          {/**TODO:ボタンを押したらデータをフェッチするように実装 */}
          <Button>ゲームスタート</Button>
        </Link>
      </div>
    </>
  );
};

export default DashboardPage;
