import axios from "axios";

export async function getProfile() {
    try {
        const url = `${process.env.NEXT_PUBLIC_URL_PROFILE_API}/team-about`
        const data = await axios.get(url,
            {
                headers: {
                    'accept': 'application/json',
                    'x-api-key': `${process.env.NEXT_PUBLIC_PROFILE_API_KEY}`
                }
            }
        )
        
        if(data.data) {
            return data.data
        } else {
            throw new Error('Invalid data')
        }
    } catch(error) {
        console.log(error)
    }   
}
