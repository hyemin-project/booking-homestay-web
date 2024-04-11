import React, { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function SpLoader(props) {
   
    return (
        <> <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
           
        }}>
            {props.pending ? (
                <ScaleLoader color="#36d7b7"  height={100} width={15}/>
            ) : (
                'if you moment later...'
            )}
        </div>
        </>
    );
}



