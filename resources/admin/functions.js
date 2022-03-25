import axios from 'axios';

const random = (length = 8, allCase = true) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if(!allCase)
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};

const downloadImage = async function({ url, label }){

    await axios.get(url, { responseType: 'blob' })
        .then(response => {
            const blob = new Blob([response.data], { type: 'image/png' })
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = label;
            link.click();
            URL.revokeObjectURL(link.href)
        }).catch(console.error)

};

export default {
    random,
    downloadImage

}
