import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/next.svg" width={100} height={60} alt="next" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => {
          return (
            <Link
              key={id}
              href={path}
              className={pathname === path ? styles.active : null}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
