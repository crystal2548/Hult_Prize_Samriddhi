import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/firebase/AuthContext";
import { Navigate } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, AlertCircle, Shield } from "lucide-react";
import "./styles/adminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // If already authenticated, redirect to dashboard
  if (!loading && user) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Please try again later.");
          break;
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;
        default:
          setError("Login failed. Please check your credentials.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-login-loading">
        <div className="admin-login-spinner" />
      </div>
    );
  }

  return (
    <div className="admin-login-page">
      {/* Animated background */}
      <div className="admin-login-bg">
        <div className="admin-login-orb admin-login-orb-1" />
        <div className="admin-login-orb admin-login-orb-2" />
        <div className="admin-login-orb admin-login-orb-3" />
        <div className="admin-login-grid" />
      </div>

      {/* Login Card */}
      <div className="admin-login-container">
        <div className="admin-login-card">
          {/* Header */}
          <div className="admin-login-header">
            <div className="admin-login-shield">
              <Shield size={28} />
            </div>
            <div className="admin-login-brand">
              <div className="admin-login-logo">HP</div>
              <h1 className="admin-login-title">Admin Portal</h1>
            </div>
            <p className="admin-login-subtitle">
              Hult Prize at Samriddhi — Secure Access
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="admin-login-error">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="admin-login-field">
              <label htmlFor="admin-email" className="admin-login-label">
                Email Address
              </label>
              <div className="admin-login-input-wrapper">
                <Mail size={18} className="admin-login-input-icon" />
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@samriddhi.edu.np"
                  className="admin-login-input"
                  required
                  autoComplete="email"
                  autoFocus
                />
              </div>
            </div>

            <div className="admin-login-field">
              <label htmlFor="admin-password" className="admin-login-label">
                Password
              </label>
              <div className="admin-login-input-wrapper">
                <Lock size={18} className="admin-login-input-icon" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="admin-login-input"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="admin-login-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="admin-login-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="admin-login-btn-spinner" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <Lock size={18} />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="admin-login-footer">
            <div className="admin-login-divider">
              <span>Restricted Access</span>
            </div>
            <p className="admin-login-footer-text">
              This portal is for authorized administrators only. Contact the
              development team if you need access.
            </p>
          </div>
        </div>

        {/* Back to site link */}
        <a href="/" className="admin-login-back-link">
          ← Back to Hult Prize at Samriddhi
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
