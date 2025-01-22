"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface AuthResponse {
  error: null | string;
  success: boolean;
  data: unknown | null;
}

export const signUp = async (formData: FormData): Promise<AuthResponse> => {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        name: formData.get("name") as string,
      },
    },
  };

  const { data: signUpData, error } = await supabase.auth.signUp(data);

  return {
    error: error?.message || "There Was an Error Signing Up",
    success: !error?.message ? true : false,
    data: signUpData || null,
  };
};

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  await supabase.auth.signInWithPassword(data);

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  supabase.auth.signOut()



  revalidatePath("/", "layout");
  redirect("/login");
}
