import React, {useState, useEffect, FormEvent} from "react";
import {FiChevronRight} from 'react-icons/fi';

import{Link} from 'react-router-dom';

import api from '../../services/api';

import {Title, Form, Repositories, Error } from './Style';

interface Repository{
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;

    }
}



const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepository = localStorage.getItem(
            '@GithubExplorer:repositories',

        );
        
        if(storageRepository) {
            return JSON.parse(storageRepository);

        }


        return[];
    });

    const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!newRepo){
            setInputError("Digite um usuario/repositório para pesquisar.")
            return;
        }

    try {
        const response = await api.get<Repository>(`repos/${newRepo}`);
        const repository = response.data;

        setRepositories([...repositories, repository])
        setNewRepo('');
        setInputError('');

        } catch(err){
            setInputError("Repositório não encontrado ou inexistente.");
            

        }

    }

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories)
        )

    }, [repositories]);

    return (
        <>
            <Title>Explore repositórios no github</Title>
            <Form onSubmit={handleAddRepository}>
                <input
                    onChange = {e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome  do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                <Link to="#">
                    <img src={repository.owner.avatar_url} alt="repository.owner.login" />
                    <div>
                        <strong>{repository.full_name} </strong>
                        <p>{repository.description}</p>
                        <button type="submit"></button>
                    </div>
                    <FiChevronRight size={20}/>

                </Link>
                ))}
            </Repositories>

            
        </>
    );
}

export default Dashboard;