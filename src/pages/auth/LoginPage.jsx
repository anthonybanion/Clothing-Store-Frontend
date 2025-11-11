import { LoginCard } from '../../components/organisms/card/LoginCard';
import RegisterTemplate from '../../components/templates/register_layout/RegisterTemplate';
export default function LoginPage() {
  return (
    <>
      <RegisterTemplate>
        <LoginCard />
      </RegisterTemplate>
    </>
  );
}
