import React, {useState} from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import * as C from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignUp = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais")
            return;
        } 

        const res = signup(email, senha);

        if ( res ) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso");
        navigate("/");
    }



  return (
    <C.container>
    <C.label> Sistema de Login</C.label>
    <C.content>
            <Input
            type="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
            type="email"
            placeholder="Confirme seu e-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
            type="password"
            placeholder="Insira sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.labelError>{error}</C.labelError>
            <Button Text="Inscrever-se" onClick={handleSignUp}/>
            <C.labelSignUp>
                Ja tem uma conta?
                <C.strong>
                    <Link to="/">&nbsp;Entre</Link>
                </C.strong>
            </C.labelSignUp>
        </C.content>
    </C.container>
  )
}

export default SignUp