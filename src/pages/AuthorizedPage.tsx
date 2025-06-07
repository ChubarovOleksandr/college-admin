import "../style/pages/AuthPage.scss";
import { useState } from "react";
import { getAPI } from "../api/api.ts";
import { setInLocalStorage } from "../utils/useLocalStorage.ts";

export const AuthorizedPage = () => {
  const [authData, setAuthData] = useState({ login: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await getAPI({
      url: `/users?username=${authData.login}&password=${authData.password}`,
    });

    if (result.status === 404) {
      setLoginError("Не вірні данні для входу");
    }

    if (result.status === 200) {
      const { accessToken, refreshToken } = result;
      
      setInLocalStorage("accessToken", accessToken);
      setInLocalStorage("refreshToken", refreshToken);
    }
  };

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Вхід</h1>

        <label>
          Логін
          <input
            type="text"
            value={authData.login}
            onChange={(e) =>
              setAuthData((prev) => ({ ...prev, login: e.target.value }))
            }
          />
        </label>

        <label>
          Пароль
          <input
            type="password"
            value={authData.password}
            onChange={(e) =>
              setAuthData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </label>

        {loginError && <span className="error">{loginError}</span>}

        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};
