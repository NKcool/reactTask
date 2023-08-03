import styles from "styles/Header.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "components/GetIcon";
import clsx from "clsx";
import CategoryItem from "./CategoryItem";
import useMakeRequest from "hooks/useMakeRequest";
import { BasketContext } from "context/BasketContext";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const result = useMakeRequest("https://fakestoreapi.com/products/categories");
  const { basketItems, setBasketIsOpen } = useContext(BasketContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>ShopCart</h2>
        </Link>
      </div>

      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <div className="">
                <ul className="navOptions">
                  <li>Deals</li>
                  <li>New</li>
                  <li>Deilvery</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="accountDiv">
                <CgProfile></CgProfile>
                <p>Account</p>
              </div>
            </li>

            <li>
              <Link
                styles={{ height: "10px" }}
                to="/"
                className={clsx(styles.basketBtn, styles.a)}
                onClick={(e) => {
                  e.preventDefault();
                  setBasketIsOpen((oldState) => !oldState);
                }}
              >
                <GetIcon icon="BsCart4" size={25} color="#ffffff" />
                {basketItems.length > 0 && (
                  <span className={styles.basketLength}>
                    {" "}
                    {basketItems.length}{" "}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
