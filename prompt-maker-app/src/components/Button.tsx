interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;

// {alertVisible && (
//     <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//   )}
//   <Button onClick={() => setAlertVisibility(true)}>Aprieta aquí</Button>
