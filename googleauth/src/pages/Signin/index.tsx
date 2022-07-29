import { GoogleLogo} from 'phosphor-react' ;

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { auth } from '../../services/firebase';

import './styles.scss';
import { useState } from 'react';


export function SignIn(){

    const [user, setUser] = useState<User>({}as User);

function handleGoogleSingIn() {
    const provider = new GoogleAuthProvider();
    
    
    signInWithPopup(auth, provider)
    .then((result) => {
        setUser(result.user);
        console.log(result);
        

    })

    .catch((error) => {
        console.log(error)
    });

}


    return(
        <div className="container">
            <div className="user">
                {user.photoURL && <img src={user.photoURL} alt="Foto do Usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
                <small>{user.phoneNumber}</small>
                <small>{user.providerId}</small>
            </div>
            <h1>Acesse sua conta</h1>

            <span>

                Utilizando autenticação social, por exemplo, autenticação com  a Google você 
                <br/>
                facilita a vida do usuario permetindo utilizar sua aplicação sem fazer cadastro.

                
            </span>
            <button type="button" className="button" onClick={handleGoogleSingIn}>
                <GoogleLogo/>
                Entrar com Google
            </button>
        </div>
    );
}