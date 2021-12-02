import React from "react";

import {Link} from 'react-router-dom';

import Card from '../../components/Card';

const Repository: React.FC = () => {
    return (
        <>
            <h3>Pagina Repository</h3>
            <Link to={`/`}> Dashboard</Link>
            <Card/>
        </>
    );
}
export default Repository;