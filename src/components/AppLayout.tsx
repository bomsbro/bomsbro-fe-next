import Link from "next/link";
import { CustomMenu } from "@components/AppLayoutStyle.";
import { Input } from "antd";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <CustomMenu mode="horizontal">
        <CustomMenu.Item>
          <Link href="/">
            <a>온프리</a>
          </Link>
        </CustomMenu.Item>
        <CustomMenu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </CustomMenu.Item>
        <CustomMenu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </CustomMenu.Item>
        <CustomMenu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </CustomMenu.Item>
      </CustomMenu>
      {children}
    </>
  );
};

export default AppLayout;
