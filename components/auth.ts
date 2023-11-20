'use server';
import { auth } from '@clerk/nextjs';
export const { userId }: { userId: string | null } = auth();
