import Link from "next/link";
import { FC } from "react";

import SingOut from "./SingOut";

const Layout: FC = () => {
  return (
    <div>
      <div className="flex p-10  mt-7  ">
        <div className="flex-1 space-x-10">
          <Link href="/">一覧</Link>

          <Link href="/Add">追加</Link>

          <Link href="/Subscription">サブスクリプション</Link>
        </div>
        <div className="mr-5">
          <SingOut />
        </div>
      </div>
    </div>
  );
};

export default Layout;
