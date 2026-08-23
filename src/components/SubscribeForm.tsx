"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Djunta — on se retrouve dans la prochaine lettre.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setMessage("Une erreur est survenue. Réessayez.");
    }
  };

  if (status === "success") {
    return (
      <p style={{
        fontFamily: "Georgia, serif",
        fontSize: "1rem",
        color: "#c8930a",
        fontStyle: "italic",
        letterSpacing: "0.01em"
      }}>
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "440px", width: "100%" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        required
        style={{
          flex: 1,
          padding: "12px 16px",
          fontSize: "14px",
          border: "1px solid rgba(11, 11, 11, 0.15)",
          borderRadius: "2px",
          background: "#ffffff",
          color: "#0b0b0b",
          outline: "none",
          fontFamily: "-apple-system, sans-serif",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "12px 24px",
          fontSize: "14px",
          background: "#0b0b0b",
          color: "#ffffff",
          border: "none",
          borderRadius: "2px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          fontFamily: "-apple-system, sans-serif",
          opacity: status === "loading" ? 0.7 : 1,
          whiteSpace: "nowrap",
        }}
      >
        {status === "loading" ? "..." : "S'abonner"}
      </button>
      {status === "error" && (
        <p style={{ fontSize: "12px", color: "#c0392b", marginTop: "8px" }}>{message}</p>
      )}
    </form>
  );
}
