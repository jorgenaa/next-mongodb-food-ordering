import React, { FC } from 'react'

const Logo: FC = () => {
  return (
    <>
        <svg 
            version="1.0" 
            id="logo" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox="0 0 75 75" 
            enableBackground="new 0 0 75 75" 
            xmlSpace="preserve">
            <circle fill="#E51600" cx="37.5" cy="37.5" r="37.5"/>
            <path d="M65.9,9.9c0.2,0.2,0.2,0.5,0,0.6L25.4,50c0,0-0.2,0-0.3-0.1C25,49.8,25,49.7,25,49.7c13.2-13.5,26.3-27,39.5-40.5
                C64.7,9,65,9,65.1,9.2L65.9,9.9z"/>
            <path d="M9,9.2C9.2,9,9.5,9,9.7,9.2l39.5,40.5c0,0,0,0.2-0.1,0.3C48.9,50,48.8,50,48.8,50c-13.5-13.2-27-26.3-40.5-39.5
                c-0.2-0.2-0.2-0.5,0-0.6L9,9.2z"/>
            <g>
                <path 
                    stroke="#000000" 
                    strokeWidth="0.25" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeMiterlimit="10" 
                    d="M37.1,26.2 c-4.9,0-9.1,0.2-12.1,0.2l0,0v15c0,3.5,8.7,4.7,12.4,4.7c3.7,0,11.8-0.5,11.8-5.4V26.2l0,0C47.1,26.2,41.1,26.2,37.1,26.2z"
                />
                
                <path 
                    fill="#FFFFFF" 
                    stroke="#000000" 
                    strokeWidth="0.25" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeMiterlimit="10" 
                    d="M25.2,25.9"
                />
                
                <path 
                    fill="#FFFFFF" 
                    stroke="#000000" 
                    strokeWidth="0.25" 
                    strokeLinecap="round" 
                    strokeLinejoin="bevel" 
                    strokeMiterlimit="10" 
                    d="M48.9,25.7c0,2.4-5.3,3.8-11.9,3.8s-11.9-1.7-11.9-3.8c0-2,5.3-3.5,11.9-3.5C43.4,22.3,48.9,23.7,48.9,25.7z"
                />
            </g>
            <text 
                transform="matrix(1 0 0 1 6.5 60.7396)" 
                fill="#FFFFFF" 
                fontFamily="'SedgwickAve-Regular'" 
                fontSize="12.7338px">
                Sumo Sushi
            </text>
            <g id="maki">
                <path 
                    id="tail_00000116196220078889600390000000186228723724403381_" 
                    fill="#84CC16" 
                    d="M47.7,14.2c-1.6,0.4-2.6,1.4-3.8,2.6
                    c0.4-1.4,0.9-2.7,0.2-4.7C43.3,10,41.3,7.2,39.8,6c-0.8,1.4-1.9,4.4-1.5,6.6c0.4,2.3,1.7,2.8,2.9,4.1c-1.8,0.6-3.6,1-6.1,2.8
                    c-2.2,1.6-3.4,3.7-4.6,6.4c-0.1,0.3,0,0.7,0.3,0.8c1.5,0.6,3.2,0.9,5.8,0.9c3.5,0,5.1-0.7,6.7-1.1c0.1,0,0.2-0.1,0.2-0.3
                    c0.2-2.7,0-3.1,0-4.2c0-1.5-0.2-3.2,0.2-3.4c0.4,0.6,3.4,1.3,5,0.8c2.2-0.6,5.5-2.6,6.3-4.5C52.8,14.4,49.8,13.6,47.7,14.2z"
                />
            </g>
        </svg>
    </>
  )
}

export default Logo