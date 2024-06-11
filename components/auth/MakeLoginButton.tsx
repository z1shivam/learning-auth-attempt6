import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const MakeLoginButton = ({
  children,
  mode = "modal",
  asChild,
}: LoginButtonProps) => {

  const router = useRouter();

  const onClickHandler = () => {
    router.push("/login");
  };

  if (mode === "modal") return <span>TODO: Impliment Model here</span>;

  return (
    <span onClick={onClickHandler} className="cursor-pointer">
      {children}
    </span>
  );
};
