import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, loginWithEmail, signupWithEmail } from "../services/authService";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    
    // Vérifier les conditions en mode inscription
    if (isSignup && !acceptTerms) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }
    
    setLoading(true);
    
    try {
      if (isSignup) {
        await signupWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
    
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      alert("Erreur connexion: " + error.message);
    }
  };

  return (
    <div className={`login-container ${isSignup ? 'signup-mode' : ''}`}>
      <div className="login-content">
        {/* CARTE CONNEXION À GAUCHE */}
        <div className="login-card">
          <div className="login-header">
            <div className="logo-circle">M</div>
            <h1 className="login-title">Messageneuve</h1>
            <p className="login-subtitle">
              {isSignup ? "Créer un compte étudiant" : "Marketplace étudiante"}
            </p>
          </div>

          {/* FORMULAIRE EMAIL/PASSWORD */}
          <form onSubmit={handleEmailAuth} className="email-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              className="input-field"
            />
            
            {/* CHECKBOX CONDITIONS ou SPACER */}
            <div className="terms-container">
              {isSignup ? (
                <label className="terms-checkbox">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    required
                  />
                  <span>
                    J'accepte les{" "}
                    <a href="/conditions" target="_blank" rel="noopener noreferrer">
                      conditions d'utilisation
                    </a>
                  </span>
                </label>
              ) : (
                <div className="terms-spacer"></div>
              )}
            </div>
            
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Chargement..." : (isSignup ? "Créer un compte" : "Se connecter")}
            </button>
            
            <p className="toggle-text">
              {isSignup ? "Déjà un compte? " : "Pas de compte? "}
              <span 
                onClick={() => {
                  setIsSignup(!isSignup);
                  setAcceptTerms(false);
                }} 
                className="toggle-link"
              >
                {isSignup ? "Se connecter" : "Créer un compte"}
              </span>
            </p>
          </form>

          {/* SÉPARATEUR */}
          <div className="divider">
            <span>OU</span>
          </div>
          
          {/* BOUTON GOOGLE */}
          <button className="google-btn" onClick={handleGoogleLogin}>
            <svg className="google-icon" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <span>Continuer avec Google</span>
          </button>
        </div>

        {/* FEATURES À DROITE */}
        <div className="login-features">
          <div className="feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
              <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#1e3c72"/>
            </svg>
            <span>Achète et vends facilement</span>
          </div>
          <div className="feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="#1e3c72"/>
              <path d="M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="white"/>
            </svg>
            <span>Sécurisé et fiable</span>
          </div>
          <div className="feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none">
              <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#1e3c72"/>
              <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#2a5298"/>
            </svg>
            <span>Réservé aux étudiants</span>
          </div>
        </div>
      </div>
    </div>
  );
}