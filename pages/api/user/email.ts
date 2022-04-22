import type {  NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

// const apiKey = process.env.SENDGRID_API_KEY!
// sgMail.setApiKey(apiKey)

//const emailTo = process.env.EMAIL_TO

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { status } = res;
    // const { status } = res;
    // const body = req.body
    // try {
    //     const { email, name, message } = body
       
    //     const textMsg = `
    //         <div>Name: ${name}</div>
    //         </ br>
    //         <div>Message: ${message}</div>
    //     `

    //     const msg = {
    //         to: emailTo,
    //         from: email,
    //         subject: 'Kundehenvendelse',
    //         text: `Email ${email}`,
    //         html: textMsg
    //       }

    //     await sgMail.send(msg)

    //     status(200).json({message: `Email sent`})

    // } catch (error) {
    //     console.log(error)
    // }
}

  