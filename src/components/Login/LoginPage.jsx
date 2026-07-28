import "./Login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>MARKET INTELLIGENCE</h1>

        <p className="subtitle">
          NIFTY 100 ANALYTICS
        </p>

        <div className="lock">
          🔒
        </div>

        <h2>Secure Login</h2>

        <label>Username</label>

        <input
          type="text"
          placeholder="Enter Username"
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter Password"
        />

        <div className="remember">

          <input type="checkbox" />

          <span>Remember Me</span>

        </div>

        <button>
          Request Login
        </button>

        <p className="footer">
          Administrator approval required
        </p>

        <small>
          Version 1.0
        </small>

      </div>
    </div>
  );
}
