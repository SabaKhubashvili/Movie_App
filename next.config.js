/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    images:{
        domains:[
            'res.cloudinary.com'
        ]
    },
    env:{

        AWS_Access_key:  process.env.AWS_Access_key,
        AWS_Secret_Access_Key: process.env.AWS_Secret_Access_Key,
        AWS_Region: process.env.AWS_Region,
        AWS_Cloudfront_Link: process.env.AWS_Cloudfront_Link
}
}

module.exports = nextConfig
