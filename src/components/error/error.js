import React from "react";
import { Message } from "semantic-ui-react";
import styles from "./stylesheet/error.module.css";
function Error() {
  return (
    <div className={styles.errorContainer}>
      <Message size="massive" color="pink">
        Hmmm, That's Awkward! Resource Missing 🤔
      </Message>
    </div>
  );
}

export default Error;
