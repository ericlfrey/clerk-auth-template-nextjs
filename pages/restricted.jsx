import { useAuth, useUser } from '@clerk/nextjs';
import React from 'react';

export default function RestrictedPage() {
  const { user } = useUser();
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return null;
  }
  return <h1>Welcome {user.username}!</h1>;
}
