import React from 'react';
import Create from './CreateProperty';
import Update from './UpdateProperty';
import Delete from './DeleteProperty'

function AdminPage(){
    return(
        <div>
            <Create />
            <br></br>
            <Update />
            <br></br>
            <Delete />
            <br></br>

        </div>
    )
}
export default AdminPage;