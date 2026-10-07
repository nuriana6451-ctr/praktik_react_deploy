import { useState } from "react";

/*
  Form login.
  Prop `open` dari induk: kalau tirai tertutup, kolom isian tidak bisa difokus (tabIndex -1).
  Pakai <div> + onClick (bukan <form>) supaya tetap jalan di pratinjau sandbox.
*/
export default function LoginForm({ open }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const tab = open ? 0 : -1;

  const submit = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Email belum benar. Contoh: dina@mail.com");
    if (pass.length < 6) return setError("Kata sandi minimal 6 karakter.");
    setError("");
    setUser(email.split("@")[0]);
  };

  if (user) {
    return (
      <div className="wd-form wd-ok" style={{ opacity: 1, transform: "none", pointerEvents: "auto" }}>
        <b>☀️</b>
        <h1>Selamat pagi, {user}!</h1>
        <p>Berhasil masuk. Semoga harimu menyenangkan.</p>
        <button
          className="wd-go"
          style={{ alignSelf: "stretch" }}
          onClick={() => {
            setUser(null);
            setPass("");
          }}
        >
          Keluar
        </button>
      </div>
    );
  }

  return (
    <div className="wd-form" onKeyDown={(e) => e.key === "Enter" && submit()}>
      <h1>Selamat pagi</h1>
      <p>Masuk untuk memulai harimu.</p>

      <label>
        Email
        <span className="wd-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="dina@mail.com"
            autoComplete="email"
            tabIndex={tab}
          />
        </span>
      </label>

      <label>
        Kata sandi
        <span className="wd-field">
          <input
            type={show ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Minimal 6 karakter"
            autoComplete="current-password"
            tabIndex={tab}
          />
          <button type="button" onClick={() => setShow(!show)} tabIndex={tab}>
            {show ? "Tutup" : "Lihat"}
          </button>
        </span>
      </label>

      <div className="wd-err" role="alert">{error}</div>
      <button className="wd-go" type="button" onClick={submit} tabIndex={tab}>
        Masuk
      </button>
    </div>
  );
}