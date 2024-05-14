import  db  from '@repo/db/client';
import express from "express";
import cors from 'cors'
import { z } from "zod";
const app = express();
app.use(express.json())
app.use(cors());


const hdfcWebhookzod = z.object({
    token: z.string(),
    userId: z.string(),
    amount:z.string()
    
})
app.post("/hdfcWebhook",async (req, res) => {
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    };

    const success =  hdfcWebhookzod.safeParse(req.body);
    if (!success)
    {
        return res.json({
            message:"INvlaoid hdfc webhook"
        })
        

    } else {
           
    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId),
                },
                data: {
                    amount: {

                        increment: Number(paymentInformation.amount)
                    }

                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
                 
        ])
        res.json({
           message:"Captured"
       })
        
    } catch (error) {
        console.error(error);
        res.status(411).json({
            message: "Error while processing webhook"
        })

    }

    }


})


const port = process.env.PORT || 3006;

app.listen(port, () => {
    console.log(`starting the webhook at ${port}`);
    
})

