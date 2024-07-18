import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

async function Page() {
  const user = await currentUser();
  return <UserInfo label="Server component" user={user} />;
}

export default Page;
