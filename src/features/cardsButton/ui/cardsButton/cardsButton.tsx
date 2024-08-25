import { memo, useState } from 'react';
import { Navbar } from 'widgets/Navbar';
import { UserList } from 'entities/User';

export const CardsButton = memo(() => {
    const [favorite, setFavorite] = useState(false);

    return (
        <>
            <Navbar setFavorite={setFavorite} favorite={favorite} />
            <UserList favorite={favorite} />
        </>
    );
});
