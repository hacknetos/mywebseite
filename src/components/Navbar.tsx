import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  Collapse,
  Modal,
  Button,
  Input,
  Textarea,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";
export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            loading="lazy"
            placeholder="blur"
            height={50}
          />
          <p>my Webseite</p>
        </Link>
      </div>

      <Collapse.Group>
        <Collapse title="Me" subtitle="Information">
          <ul className={styles["navbar-Link"]}>
            <li>
              <Link href="/me/kurtprofil">Kurtz Profile</Link>
            </li>
            <li>
              <Link href="/me/Lebenslauf">Lebens Lauf</Link>
            </li>
          </ul>
        </Collapse>
        <Collapse title="Projete" subtitle="Planing / finish">
          <ul className={styles["navbar-Link"]}>
            <li>
              <Link href="/projecte/GitHub">Github</Link>
            </li>
            <li>
              <Link href="/projecte/planing">Planing table</Link>
            </li>
          </ul>
        </Collapse>
        <Collapse title="Contect" subtitle="Contect me">
          <ul className={styles["navbar-Link"]}>
            <li>
              <Link href="https://www.reddit.com/user/HAcknetos">reddit</Link>
            </li>
            <li>
              <Button onClick={handler} size={"xs"} color={"gradient"}>
                Mail Me
              </Button>
              <Modal
                closeButton
                aria-labelledby="mail-Modal"
                open={visible}
                onClose={closeHandler}
              >
                <Modal.Header>
                  <h2 id="mail-Modal">Mail Me</h2>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    {/* <Spacer y={1.5} /> */}
                    <Input
                      clearable
                      bordered
                      fullWidth
                      placeholder="Your Name"
                    />
                    <Spacer y={1.5} />
                    <Textarea
                      underlined
                      fullWidth
                      color="success"
                      labelPlaceholder="Waht want you say to me"
                      minRows={1}
                      maxRows={30}
                    />
                    <Spacer y={1.5} />

                    <Button type="submit" size={"sm"}>
                      Send
                    </Button>
                  </form>
                </Modal.Body>
              </Modal>
            </li>
          </ul>
        </Collapse>
      </Collapse.Group>
    </nav>
  );
}
