/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { CaixaInput } from "../../components/Input";
import logo from "../../img/logo-fv.png";
import "./Login.css";


export default function Login() {


  return (
<>
<Header/>
    <main className="mainlogin">
      <div id="login" className="login">
        <header>
          <img src={logo} alt="" />
          <h1>Bem Vinda!</h1>
        </header>
        <form action="">
          <label>E-mail ou número de telefone:</label>
          <CaixaInput type="text" placeholder="Insira o seu e-mail ou telefone..." />
          <label>Senha:</label>
          <CaixaInput type="password" placeholder="•••••••••••" />

          <button className="entrar">ENTRAR</button>
          <div className="link">
            <a href="#">Não tem uma conta?</a>
          </div>
          <div className="separator">OU</div>
          <button className="facebook">Continue pelo Facebook</button>
          <button className="instagram">Continue pelo Instagram</button>
          <button className="email">Continue pelo E-mail</button>
        </form>
      </div>
    </main>
    <Footer/>
    </>
   
  );
}
