import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Contacts", path: "/contacts" },
  ];
  const { pathname } = useRouter();

  return (
    <nav>
      <div className={styles.logo}>
        <Image src="/vercel.svg" width={60} height={60} alt="vercel" />
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
