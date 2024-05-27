
import React from 'react'
import Swal from 'sweetalert2'

const Alerta = ({ title, text, icon = false, img, imgWidth = 100 }) => {
    return Swal.fire({
        icon: icon,
        imageUrl: img,
        imageWidth: imgWidth,
        title: title,
        text: text,
    })
}

export default Alerta