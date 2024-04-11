import React, { useState, useEffect } from 'react';
import PacmanLoader  from 'react-spinners/PacmanLoader';
import {Hourglass} from 'react-loader-spinner'
export default function SpLoader(props) {
   
    return (
        <> <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
           
        }}>
            {props.pending ? (
               <Hourglass
               visible={true}
               height="80"
               width="80"
               ariaLabel="hourglass-loading"
               wrapperStyle={{}}
               wrapperClass=""
               colors={['#306cce', '#72a1ed']}
               />
            ) : (
                'if you moment later...'
            )}
        </div>
        </>
    );
}



