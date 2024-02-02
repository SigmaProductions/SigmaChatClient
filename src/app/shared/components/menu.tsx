import { useUser } from "@auth0/nextjs-auth0/client";

export default function Menu({}: Props) {
  const { user, isLoading } = useUser();

  return (
    <nav className="flex justify-between md:flex-col md:gap-5">
      <a href="/api/auth/logout" className="text-2xl opacity-50 rounded-md">
        LOGOUT
      </a>
      <a href="/profile" className="text-2xl opacity-50 rounded-md">
        PROFILE
      </a>
    </nav>
  );
}

interface Props {}