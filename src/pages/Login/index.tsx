import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { CenteredLayout } from '../../layouts/Center';
import useUser from '../../stores/user';

interface IFormInputs {
  base_url: string;
  password: string;
  username: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [setBaseUrl, setPassword, setUsername] = useUser((state) => [
    state.setBaseUrl,
    state.setPassword,
    state.setUsername,
  ]);

  const onSubmit = (data: IFormInputs) => {
    setPassword('jenkins', data.password);
    setBaseUrl('jenkins', data.base_url);
    setUsername('jenkins', data.username);
  };

  return (
    <CenteredLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Input
            name="base_url"
            label="Insert the jenkins Base URL:"
            register={register('base_url', {
              required: 'Base Url is required',
            })}
            error={errors.base_url}
            placeholder="https://jenkins.com"
          />
        </div>

        <div className="mb-6">
          <Input
            name="username"
            label="Insert your jenkins Username:"
            register={register('username', {
              required: 'Username is required',
            })}
            error={errors.username}
          />
        </div>

        <div className="mb-10">
          <Input
            name="password"
            label="Insert your Jenkins Password:"
            register={register('password', {
              required: 'Password is required',
            })}
            error={errors.password}
          />
        </div>

        <Button type="submit">OK</Button>
      </form>
    </CenteredLayout>
  );
};

export default Login;
