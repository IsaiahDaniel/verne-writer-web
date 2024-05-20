type ButtonProps = {
  text: string;
  classNames?: string;
  bgcolor?: any;
  withIcon?: boolean;
  Icon?: any;
  disabled?: boolean;
  [x: string]: any;
  // onClick: () => void;
};

const Button = ({
  text,
  bgcolor,
  withIcon,
  Icon,
  classNames,
  disabled,
  ...props
}: ButtonProps) => {
  if (withIcon) {
    return (
      <button
        {...props}
        className={`bg-[${bgcolor}] text-center w-full py-3 rounded-md flex items-center justify-center ${
          classNames && classNames
        }`}
      >
        <Icon />
        <span className="mt-1">{text}</span>
      </button>
    );
  }

  return (
    <button
      {...props}
      disabled={disabled}
      className={`text-center w-full py-2 rounded-md disabled:cursor-pointer ${
        classNames && classNames
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
