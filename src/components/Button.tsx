/*
ButtonProps: 타입스크립트로 버튼의 프로퍼티를 정의합니다. 
  size, color는 버튼의 크기와 색상 선택을 위한 커스텀 prop입니다.
  React.ButtonHTMLAttributes<HTMLButtonElement>를 상속하므로 onClick, disabled 등도 그대로 사용 가능합니다.
*/

"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "gray" | "red" | "green";
};

// sizeClasses, colorClasses: 크기/색상별 Tailwind 클래스 모음.
const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const colorClasses = {
  blue: "bg-blue-500 hover:bg-blue-600 text-white",
  gray: "bg-gray-300 hover:bg-gray-400 text-gray-800",
  red: "bg-red-500 hover:bg-red-600 text-white",
  green: "bg-green-500 hover:bg-green-600 text-white",
};

export default function Button({
  children,
  size = "md",
  color = "blue",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        colorClasses[color],
        "rounded-md shadow transition active:scale-95 disabled:opacity-50",
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
