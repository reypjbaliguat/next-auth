import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
}
export const BackButton = ({ label, href }: Props) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
