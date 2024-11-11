import cx from "classnames";

export function Spinner({ white = false, green = false, size = "small" }) {
  return (
    <span className="spinner-container">
      <span
        className={cx(
          "spinner",
          {
            white: white,
            green: green,
          },
          size,
        )}
      />
    </span>
  );
}
