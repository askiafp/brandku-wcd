import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, loading, error, login, logout } = useLogin();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loggedInUser = await login(form);

    if (loggedInUser) {
      navigate("/");
    }
  };

  if (user) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-6 py-16 md:px-16">
        <section className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-pink-500">
            Sudah Login
          </p>
          <h1 className="mb-2 text-2xl font-extrabold text-slate-900">
            Halo, {user.name}
          </h1>
          <p className="mb-6 text-sm text-slate-600">{user.email}</p>
          <button
            type="button"
            onClick={logout}
            className="w-full rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Logout
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-slate-50 px-6 py-16 md:px-16">
      <section className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-500">
            Login
          </p>
          <h1 className="mb-3 text-3xl font-extrabold text-slate-900">
            Masuk ke BrandKu
          </h1>
          <p className="text-sm leading-6 text-slate-600">
            Masukkan email dan password untuk masuk ke akunmu.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              placeholder="Masukkan password"
            />
          </div>

          {error ? (
            <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
              {error.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-pink-500 px-4 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:bg-pink-300"
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Akun contoh: kiki@brandku.com / 123
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
