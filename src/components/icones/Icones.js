import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faArrowPointer } from '@fortawesome/free-solid-svg-icons'


export default function Icones(props) {
    const [fruta, setFruta] = useState(props.icone == 'fruta' ? true : false)
    const [ponteiro, setIconePonteiro] = useState(props.icone == 'ponteiro'? true : false)

    return (
        <>
            {fruta ? <FontAwesomeIcon color='#f44336' icon={faAppleWhole} /> : null}
            {ponteiro == true ? <FontAwesomeIcon color='#4a148c' icon={faArrowPointer} /> : null}
        </>
    )
}