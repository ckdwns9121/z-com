import styles from "@/app/page.module.css";

export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className={styles.container}>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}

// 페러렐 라우트를 띄우기 위한 Layout
