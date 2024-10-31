// RootLayout -> HomeLayout -> HomePage로 계층구조가 형성됨

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      홈레이아웃
      {children}
    </div>
  );
}
