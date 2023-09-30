import { UserButton, useAuth, useUser } from '@clerk/nextjs';

export default function Authorize() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      Hello, {userId} your current active session is {sessionId}
    </>
  );
}
