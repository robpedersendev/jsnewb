import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56
  });

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Me" />
      <p>
        Robert is a full stack javascript developer who has first hand
        experience how difficult it is to start out as a developer. As the world
        sees it, there are Juniors, Mid-level, and Senior level developers.
        However, in reality, there is a fourth level. The newb level. Robert
        created this blog with the sole focus of taking the hard to understand
        topics of everything javascript, vanilla or not, and making it easy to
        understand for the newb in all of us. Follow him on twitter
        <a href="https://twitter.com/RobPedersenDev">RobPedersenDev</a>.
        <br />
        Watch him on{" "}
        <a href="https://www.youtube.com/channel/UCc9FPf3yA0qAHaKO-6-tRGg">
          YouTube
        </a>
        ,<br />
        or drop him a <a href="https://robertpedersen.dev/#contact">line</a>.
      </p>
    </div>
  );
}

export default Bio;
