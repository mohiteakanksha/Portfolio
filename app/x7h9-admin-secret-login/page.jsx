export const metadata = {
  robots: { index: false, follow: false },
};

import LoginForm from "./LoginForm";

export default function HiddenAdminLogin() {
  return (
    <LoginForm />
  );
}
