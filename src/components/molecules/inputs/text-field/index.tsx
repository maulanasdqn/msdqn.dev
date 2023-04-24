import { FC, ReactElement, useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { TTextFieldProps } from "./types";

const EyeClose: FC = (): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

const EyeOpen: FC = (): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const TextField = <T extends FieldValues>({
  variant = "lg",
  type = "text",
  status = "none",
  ...props
}: TTextFieldProps<T>): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  const { field } = useController(props);

  return (
    <section className="flex flex-col gap-y-2 my-2 w-auto">
      {props.label && (
        <label
          htmlFor={props.name}
          className={`font-sans text-black ${
            variant === "lg"
              ? "text-[18px]"
              : variant === "md"
              ? "text-[16px]"
              : variant === "sm"
              ? "text-[14px]"
              : ""
          }`}
        >
          {props.label}
          {props.required && <span className="text-error-base font-bold ml-1">*</span>}
        </label>
      )}

      <section className="flex items-center w-auto relative">
        {props.prepend && (
          <label
            className="items-center inset-0 absolute flex items justify-center w-[40px]"
            htmlFor={props.name}
          >
            {props.prepend}
          </label>
        )}
        <input
          type={type === "password" ? (!showPassword ? type : "text") : type}
          {...{ ...props, ...field }}
          className={`w-full  ${
            status === "error" &&
            "focus:ring-1 focus:ring-error-base bg-error-100 placeholder:text-white ring-1 ring-error-base"
          }

          ${status === "success" && "focus:ring-1 focus:ring-success-base bg-success-100"}

          ${status === "warning" && "focus:ring-1 focus:ring-warning-base bg-warning-100"}

          ${
            !status ||
            (status === "none" && "ring-gray-300 ring-1 focus:ring-primary-base bg-gray-100")
          }

             ${
               variant === "lg"
                 ? "py-4 rounded-lg"
                 : variant === "md"
                 ? "py-2 rounded-md"
                 : variant === "sm"
                 ? "p-1 rounded-md"
                 : ""
             } outline-none focus:outline-none ${
            props.prepend ? "pl-[40px]" : props.append ? "pr-[40px]" : "px-4"
          }
                `}
        />

        <div className="absolute flex right-4 top-1/2 transform -translate-y-1/2 space-x-2">
          {status === "success" && (
            <img src="/assets/check-circle.svg" alt="check circle" width={20} height={20} />
          )}
          {type === "password" && (
            <button type="button" onClick={toggleShowPassword}>
              {type === "password" && !showPassword ? <EyeClose /> : <EyeOpen />}
            </button>
          )}
        </div>

        {props.append && (
          <label className=" flex items-end justify-center w-auto" htmlFor={props.name}>
            {props.append}
          </label>
        )}
      </section>

      <div className="flex flex-col items-start w-full gap-x-1">
        <span className="text-grey-600">{props.hint}</span>
        <span
          className={
            status === "error"
              ? "text-error-base"
              : status === "success"
              ? "text-success-base"
              : status === "warning"
              ? "text-warning-base"
              : ""
          }
        >
          {props.message}
        </span>
      </div>
    </section>
  );
};
