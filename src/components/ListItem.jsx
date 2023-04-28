import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const copy = <i className="fa fa-copy"></i>;

const ListItem = ({ rgb, hex }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };
  return (
    <li className={styles.colorName} style={{ background: rgb }}>
      <span
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);

          navigator.clipboard.writeText(hex);
        }}>
        {copied ? "Copied!" : hex.toUpperCase()} {copy}
      </span>
    </li>
  );
};

export default ListItem;
