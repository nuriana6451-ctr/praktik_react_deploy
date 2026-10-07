import { useState } from "react";
import WindowScene from "./WindowScene.jsx";
import LoginForm from "./LoginForm.jsx";
import "./WindowLogin.css";

/*
  Komponen utama.
  State `open` menentukan tirai terbuka atau tertutup.
  Class "wd-open" di elemen paling luar mengaktifkan semua animasi di CSS:
  langit berubah, matahari naik, dan form login muncul.
*/
export default function WindowLogin() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const label = open ? "Tutup tirai" : "Buka tirai untuk login";

  return (
    <div className={"wd-root" + (open ? " wd-open" : "")}>
      <div className="wd-floor" />
      <div className="wd-stage">
        <div className="wd-casing">
          <div className="wd-sash">
            <div className="wd-glass">
              <WindowScene />
              <div className="wd-mull v" />
              <div className="wd-mull h" style={{ top: "33%" }} />
              <div className="wd-mull h" style={{ top: "66%" }} />
              <div className="wd-glare" />
              <LoginForm open={open} />
              <div className="wd-latch" />
            </div>
          </div>
        </div>

        <div className="wd-sill" />
        <div className="wd-apron" />
        <div className="wd-plant" aria-hidden="true">🪴</div>

        <div className="wd-rod" />
        <button className="wd-curtain l" aria-label={label} aria-expanded={open} onClick={toggle} tabIndex={open ? -1 : 0} />
        <button className="wd-curtain r" aria-label={label} aria-expanded={open} onClick={toggle} tabIndex={-1} />
        <div className="wd-hint" aria-hidden="true">
          <span>
            Buka tirai untuk masuk<small>Masih gelap, form terkunci</small>
          </span>
        </div>
        <button className="wd-toggle" onClick={toggle}>
          {open ? "Tutup tirai" : "Buka tirai"}
        </button>
      </div>
    </div>
  );
}