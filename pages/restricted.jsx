import { useUser } from '@clerk/nextjs';
import React from 'react';

export default function RestrictedPage() {
  const { user } = useUser();
  console.log(user);
  return <h1>Welcome {user.username}!</h1>;
}
