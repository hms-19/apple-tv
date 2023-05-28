import React from "react";
import styles from "../styles/Footer.module.scss";
import { BsChevronRight } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <ul>
          <li>
            $6.99/month after free trial. Only one offer per Apple ID and only
            one offer per family if you’re part of a Family Sharing group,
            regardless of the number of devices you or your family purchases.
            This offer is not available if you or your Family have previously
            accepted an Apple TV+ one year free offer. Offer good for 3 months
            after eligible device activation. Plan automatically renews until
            cancelled. Restrictions and other terms apply.
          </li>
          <li>
            One subscription per Family Sharing group. Plan automatically renews
            until cancelled.
          </li>
          <li>
            The Apple One free trial includes only services that you are not
            currently using through a free trial or a subscription. Plan
            automatically renews after trial until cancelled. Restrictions and
            other terms apply.
          </li>
          <li>
            Limited-time offer; offer may end at any time. Free Apple TV+ access
            for students ends when you no longer qualify or do not renew your
            Apple Music Student subscription. Offer good for verified college
            students only and does not extend to a Family Sharing group.
          </li>
        </ul>
        <div className={styles.fitem}>
          <div className={styles.breadcrumb}>
            <i className="ri-apple-fill"></i>
            <BsChevronRight
              style={{ margin: "0 8px", fontFamily: "12px", color: "#D2D2D7" }}
            />
            <a className={styles.breadcrumb_link}>Only on Apple TV</a>
            <BsChevronRight
              style={{ margin: "0 8px", fontFamily: "12px", color: "#D2D2D7" }}
            />
            <a className={styles.breadcrumb_link}>Apple TV+</a>
            <BsChevronRight
              style={{ margin: "0 8px", fontFamily: "12px", color: "#D2D2D7" }}
            />
          </div>
          <div className={styles.grid}>
            <div>
              <div>
                <h4 className={styles.item_title}>Shop and Learn</h4>
                <ul>
                  <li>
                    <a>Store</a>
                  </li>
                  <li>
                    <a>Mac</a>
                  </li>
                  <li>
                    <a>iPad</a>
                  </li>
                  <li>
                    <a>iPhone</a>
                  </li>
                  <li>
                    <a>Watch</a>
                  </li>
                  <li>
                    <a>AirPods</a>
                  </li>
                  <li>
                    <a>TV & Home</a>
                  </li>
                  <li>
                    <a>AirTag</a>
                  </li>
                  <li>
                    <a>Accessories</a>
                  </li>
                  <li>
                    <a>AirTag</a>
                  </li>
                  <li>
                    <a>Accessories</a>
                  </li>
                  <li>
                    <a>Gift Cards</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.item_title}>Apple Wallet</h4>
                <ul>
                  <li>
                    <a>Wallet</a>
                  </li>
                  <li>
                    <a>Apple Card</a>
                  </li>
                  <li>
                    <a>Apple Pay</a>
                  </li>
                  <li>
                    <a>Apple Cash</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h4 className={styles.item_title}>Account</h4>
                <ul>
                  <li>
                    <a>Manage Your Apple ID</a>
                  </li>
                  <li>
                    <a>Apple Store Account</a>
                  </li>

                  <li>
                    <a>iCloud.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.item_title}>Entertainment</h4>
                <ul>
                  <li>
                    <a>Apple One</a>
                  </li>
                  <li>
                    <a>Apple TV+</a>
                  </li>
                  <li>
                    <a>Apple Music</a>
                  </li>
                  <li>
                    <a>Apple Arcade</a>
                  </li>
                  <li>
                    <a>Apple Fitness+</a>
                  </li>
                  <li>
                    <a>Apple News+</a>
                  </li>
                  <li>
                    <a>Apple Podcasts</a>
                  </li>
                  <li>
                    <a>Apple Books</a>
                  </li>
                  <li>
                    <a>App Store</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h4 className={styles.item_title}>Apple Store</h4>
                <ul>
                  <li>
                    <a>Find a Store</a>
                  </li>
                  <li>
                    <a>Genius Bar</a>
                  </li>
                  <li>
                    <a>Today at Apple</a>
                  </li>
                  <li>
                    <a>Apple Camp</a>
                  </li>
                  <li>
                    <a>Apple Store App</a>
                  </li>
                  <li>
                    <a>Certified Refurbished</a>
                  </li>
                  <li>
                    <a>Apple Trade In</a>
                  </li>
                  <li>
                    <a>Financing</a>
                  </li>
                  <li>
                    <a>Carrier Deals at Apple</a>
                  </li>
                  <li>
                    <a>Order Status</a>
                  </li>
                  <li>
                    <a>Shopping Help</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h4 className={styles.item_title}>For Business</h4>
                <ul>
                  <li>
                    <a>Apple and Business</a>
                  </li>
                  <li>
                    <a>Shop for Business</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.item_title}>For Education</h4>
                <ul>
                  <li>
                    <a>Apple and Education</a>
                  </li>
                  <li>
                    <a>Shop for K-12</a>
                  </li>
                  <li>
                    <a>Shop for College</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.item_title}>For Healthcare</h4>
                <ul>
                  <li>
                    <a>Apple in Healthcare</a>
                  </li>
                  <li>
                    <a>Health on Apple Watch</a>
                  </li>
                  <li>
                    <a>Health Records on iPhone</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.item_title}>For Government</h4>
                <ul>
                  <li>
                    <a>Shop for Government</a>
                  </li>
                  <li>
                    <a>Shop for Veterans and Military</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h4 className={styles.item_title}>Apple Values</h4>
                <ul>
                  <li>
                    <a>Accessibility</a>
                  </li>
                  <li>
                    <a>Education</a>
                  </li>

                  <li>
                    <a>Environment</a>
                  </li>
                  <li>
                    <a>Inclusion and Diversity</a>
                  </li>
                  <li>
                    <a>Privacy</a>
                  </li>
                  <li>
                    <a>Racial Equity and Justice</a>
                  </li>
                  <li>
                    <a>Supplier Responsibility</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.item_title}>About Apple</h4>
                <ul>
                  <li>
                    <a>Newsroom</a>
                  </li>
                  <li>
                    <a>Apple Leadership</a>
                  </li>

                  <li>
                    <a>Career Opportunities</a>
                  </li>
                  <li>
                    <a>Investors</a>
                  </li>
                  <li>
                    <a>Ethics & Compliance</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>Contact Apple</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lfooter}>
          <p>
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>

          <div className={styles.flexBox}>
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            <div>
              <a>Privacy Policy</a>
              <a>Terms of Use</a>
              <a>Sales and Refunds</a>
              <a>Legal</a>
              <a style={{ border: "none" }}>Site Map</a>
            </div>
            <p>United State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
