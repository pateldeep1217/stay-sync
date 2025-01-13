import { type Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/Fields";
import Logo from "@/app//dashboard/Components/Logo";
import { SlimLayout } from "@/components/SlimLayout";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignIn() {
  return (
    <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />
      <div>
        <Button type="submit" variant="default" color="blue" className="w-full">
          <span>
            Sign in <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </form>
  );
}
