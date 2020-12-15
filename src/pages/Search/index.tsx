import React, { useState } from 'react';
import './styles.scss';
import BaseForm from 'core/components/BaseForm';
import Loaders from './components/Loaders/Loaders';
import { makeRequest } from 'core/utils/request';
import { UserData } from 'core/types/UserData';

const Search = () => {

    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState<UserData>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const clickProfileButton = (event: any) => {
        window.location.href = "http://github.com/" + userName;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        makeRequest({ url: '/' + userName, data: userData })
            .then(
                response => setUserData(response.data)
            )
            .finally(() => {
                setIsLoading(false);
            })
            .catch(() => {
                alert("Usuário não existe");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="home-container">
                <BaseForm title="Encontre um perfil Github">
                    <input type="text"
                        name="userName"
                        id="userName"
                        value={userName}
                        className="form-control input-search"
                        onChange={handleOnChange}
                        placeholder={"Usuário Github"} />
                </BaseForm>
                {userData?.name || isLoading ? 
                <div>
                    {isLoading ? <Loaders /> :
                        (
                            <div>
                                <div className="card-userinfo">
                                    <div className='col-3'>
                                        <img
                                            src={userData?.avatar_url}
                                            alt={userData?.name}
                                            className="user-image" />
                                        <button className="btn btn-primary btn-lg profile-button"
                                            onClick={clickProfileButton}>
                                            Ver perfil
                                        </button>
                                    </div>
                                    <div>
                                        <div>
                                            <input type="text"
                                                disabled
                                                name="userPublicRepos"
                                                id="userPublicRepos"
                                                className="user-info-numbers ml"
                                                placeholder={"Repositório públicos: " + userData?.public_repos} />
                                            <input type="text"
                                                disabled
                                                name="userFollowers"
                                                id="userFollowers"
                                                className="user-info-numbers"
                                                placeholder={"Seguidores: " + userData?.followers} />
                                            <input type="text"
                                                disabled
                                                name="userFollowind"
                                                id="userFollowing"
                                                className="user-info-numbers"
                                                placeholder={"Seguindo: " + userData?.following} />
                                        </div>
                                        <div className='card-userinfo-fields'>
                                            <h4 className='user-info-title'>Informações</h4>
                                            <input type="text"
                                                disabled
                                                name="userCompany"
                                                id="userCompany"
                                                className="user-info-fields"
                                                placeholder={"Empresa: " + userData?.company} />
                                            <input type="text"
                                                disabled
                                                name="userWebsite"
                                                id="userWebsite"
                                                className="user-info-fields"
                                                placeholder={"Website/Blog: " + userData?.blog} />
                                            <input type="text"
                                                disabled
                                                name="userLocation"
                                                id="userLocation"
                                                className="user-info-fields"
                                                placeholder={"Localidade: " + userData?.location} />
                                            <input type="text"
                                                disabled
                                                name="userCreatedAt"
                                                id="userCreatedAt"
                                                className="user-info-fields"
                                                placeholder={"Membro desde: " + userData?.created_at} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                : null}
            </div>
        </form>
    )
};

export default Search;