"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

function Page() {
  const user = useCurrentUser();
  return <UserInfo label="Client component" user={user} />;
}

export default Page;
