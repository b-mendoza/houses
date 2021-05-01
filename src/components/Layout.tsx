// import { FunctionComponent, ReactNode } from "react";
// import Link from "next/link";
// import { useAuth } from "src/auth/useAuth";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <header>
      <nav>
        <div />
      </nav>

      {children}
    </header>
  );
}

export default Layout;
