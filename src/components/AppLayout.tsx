import Link from "next/link";
import { CustomMenu } from "@components/AppLayoutStyle.";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <CustomMenu mode="horizontal">
        <CustomMenu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </CustomMenu.Item>
        <CustomMenu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </CustomMenu.Item>
        <CustomMenu.Item>
          <Link href="/signup">
            <a>sign up</a>
          </Link>
        </CustomMenu.Item>
      </CustomMenu>
      {children}
    </>
  );
};

export default AppLayout;
