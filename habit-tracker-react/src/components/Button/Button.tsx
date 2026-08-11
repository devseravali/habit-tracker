interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, onClick, className, type = 'button' }: ButtonProps) => {
    const classes = ['glass-button'];
    if (className) classes.push(className);

    return (
        <button type={type} onClick={onClick} className={classes.join(' ')}>
            {children || '☰'}
        </button>
    );
}