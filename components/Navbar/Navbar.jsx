import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import Link from 'next/link';
import { useUser, useClerk } from '@clerk/nextjs';

function NavBar() {
  const router = useRouter();
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      router.push('/');
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" passHref href="/">
          Clerk Auth Template
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link passHref href="/" className="nav-link">
                Home
              </Link>
            </li>
            {!user?.id ? (
              <>
                <li className="nav-item">
                  <Link href="/sign-up" className=" nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/sign-in" className=" nav-link">
                    Log In
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ">
                  <Link href="/restricted" className="nav-link">
                    Restricted Page
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="#" onClick={handleLogout} className="nav-link">
                    Log Out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
