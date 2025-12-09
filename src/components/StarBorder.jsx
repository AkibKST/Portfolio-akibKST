import "./StarBorder.css";

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 2,
  children,
  ...rest
}) => {
  // If rendering as a button, we need to wrap the decorative elements outside
  if (Component === "button" || Component === "a") {
    return (
      <>
        <div
          className="border-gradient-bottom"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div
          className="border-gradient-top"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <Component
          className={`star-border-container ${className}`}
          style={{
            padding: `${thickness}px 0`,
            ...rest.style,
          }}
          {...rest}
        >
          <div className="inner-content">{children}</div>
        </Component>
      </>
    );
  }

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
