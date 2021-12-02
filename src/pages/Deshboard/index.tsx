import React from "react";
import {FiChevronRight} from 'react-icons/fi';

import{Link} from 'react-router-dom';

import {Title, Form, Repositories } from './Style';



const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Explore repositórios no github</Title>
            <Form>
                <input placeholder="Figite o nome  do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <Link to="#">
                    <img src="https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2021/05/28/f73c4ea1/guapo.jpg" alt="" />
                    <div>
                        <strong>ProjetoReactMalwee</strong>
                        <p>glubiglubiglubi</p>
                        <button type="submit"></button>
                    </div>
                    <FiChevronRight/>

                </Link>
            </Repositories>

            
        </>
    );
}

export default Dashboard;