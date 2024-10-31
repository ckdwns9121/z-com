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

// 주소가 localhost:3000일때는 chilren-> page.tsx가 되고 modal -> @modal/default.tsx가 된다.
// 주소가 localhost:3000/i/flow/login 일때는 children이 i/flow/login/page.tsx가 되고 modal은 @modal/i/flow/login/page.tsx가 된다.
