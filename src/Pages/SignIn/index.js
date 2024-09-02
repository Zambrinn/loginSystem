import React, {useState} from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import * as C from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const SignIn = () => {
    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Todos os campos tem que ser preenchidos!")
            return;
        }

        const res = signin(senha, email);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home")
    }

  return (
    <C.container>
        <C.label>
            Sistema de Login
        </C.label>
        <C.content>
            <Input
            type="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
            type="password"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.labelError>{error}</C.labelError>
            <Button Text="Entrar" onClick={handleLogin}/>
            <C.labelSignUp>
                Não tem uma conta?
                <C.strong>
                    <Link to="./signup">&nbsp;Registrar-se</Link>
                </C.strong>
            </C.labelSignUp>
        </C.content>

    </C.container>
  )
}

export default SignIn