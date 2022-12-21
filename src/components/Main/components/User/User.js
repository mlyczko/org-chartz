import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import UserDetails from '../UserDetails';

const User = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="col mb-4">
            <div className="bg-secondary bg-gradient text-white p-3">
                <div>Grzegorz Nitro</div>
                <div>CEO</div>
                <Button variant="primary" onClick={() => setModalShow(true)}>Show details</Button>
                <UserDetails
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    name='Grzegorz Nitro'
                    position='CEO'
                    note1='xxx'
                    note2='yyy'
                />
            </div>
        </div>
    );
}

export default User;
