import { Modal } from "@/ui/modal/modal";

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Modal>{children}</Modal>;
}
